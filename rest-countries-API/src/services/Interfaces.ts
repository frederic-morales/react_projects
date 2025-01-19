export interface CountryData {
  name: {
    common: string;
    official: string;
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
