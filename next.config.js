// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  env: {
    APPINSIGHTS_INSTRUMENTATIONKEY: '',
    KeyVaultName: '',
  },
  serverRuntimeConfig: {
    APPINSIGHTS_INSTRUMENTATIONKEY: '',
    keyVaultName: process.env.KeyVaultName,
  },
  publicRuntimeConfig: {
    appInsightsKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
  },
});
