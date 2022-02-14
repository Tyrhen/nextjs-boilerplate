export interface Address {
  addressType: string;
  addressLineOne: string;
  addressLineTwo?: string;
  city: string;
  state: string;
  stateCode: string;
  zipCode: string;
  countryCode: string;
}

export type Id = string | number;
