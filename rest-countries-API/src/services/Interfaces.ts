export interface CountryData {
  altSpellings?: string[];
  borders?: string[];
  name?: countryName;
  population: number;
  region: string;
  subregion?: string;
  capital: string[];
  continents?: string[];
  timeZone?: string;
  flags?: countryFlags;
  tld?: string[];
  currencies?: currency;
  languages?: language;
}

interface countryName {
  common: string;
  official: string;
  nativeName: object[];
}

interface countryFlags {
  alt: string;
  png: string;
}

interface currencies {
  name: string;
  symbol: string;
}

interface currency {
  [key: string]: currencies;
}

interface language {
  [key: string]: string;
}

export interface SearchBarProps {
  onSearch: (text: string) => void;
}
