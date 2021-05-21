import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';
import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

import packageJson from '../../../package.json';

interface Health {
  version: string;
  status: string;
}

async function fetchKeyVaultSecrets() {
  const { serverRuntimeConfig } = getConfig();

  const keyVaultName = serverRuntimeConfig.azureKeyVaultName;
  const KVUri = `https://${keyVaultName}.vault.azure.net`;

  const credential = new DefaultAzureCredential();
  const client = new SecretClient(KVUri, credential);

  const secretName = 'ApplicationInsights--InstrumentationKey';
  // const appInsightsKey = await client.getSecret(secretName);
  // const list = await client.listPropertiesOfSecrets();

  for await (const secretProperties of client.listPropertiesOfSecrets()) {
    console.log('Secret properties: ', secretProperties);
  }
}

export default async (req: NextApiRequest, res: NextApiResponse<Health>) => {
  await fetchKeyVaultSecrets();
  const healthData = { name: packageJson.name, version: packageJson.version, status: 'ok' };

  res.status(200).json(healthData);
};
