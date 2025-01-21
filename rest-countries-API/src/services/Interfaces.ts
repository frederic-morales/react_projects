export interface CountryData {
  altSpelling?: object[];
  name: {
    common: string;
    official: string;
    nativeName: object[];
  };
  population: number;
  region: string;
  capital?: Array<string>;
  continent?: Array<string>;
  timeZone?: string;
  flags: {
    alt: string;
    png: string;
  };
}
