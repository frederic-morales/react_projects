// type Props = {};
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Country from "../components/Country";
import { useEffect, useState } from "react";
import { CountryData } from "../services/Interfaces";
import { Link } from "react-router-dom";

function Main() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedContinent, setSelectedContinent] = useState<string>("");

  const handleSelectContinent = (continent: string) => {
    console.log(selectedContinent);
    setSelectedContinent(continent);
  };

  useEffect(() => {
    const api = async () => {
      try {
        let url = "https://restcountries.com/v3.1/all";
        if (selectedContinent) {
          url = `https://restcountries.com/v3.1/region/${selectedContinent}`;
        }
        const fetchData = await fetch(url, {
          method: "GET",
        });
        const jsonData = await fetchData.json();
        setCountries(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, [selectedContinent]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  let results: CountryData[] = [];

  if (!searchText) {
    results = countries;
  } else {
    results = countries.filter((data) => {
      const name = data.name?.common.toLowerCase();
      if (name?.includes(searchText.toLowerCase())) return name;
    });
    console.log(results);
  }

  // console.log(searchText);

  return (
    <div className="w-full flex flex-col items-center pt-5 md:pt-12 dark:bg-veryDarkBlueBG min-h-screen pb-20">
      <div className="w-11/12 absolute flex flex-col gap-y-5 md:flex-row md:justify-between md:max-w-[86%] ">
        <Search onSearch={handleSearch}></Search>
        <Navbar onSelectContinent={handleSelectContinent}></Navbar>
      </div>
      <div className="mt-44 md:mt-28 max-w-[86%] flex flex-col md:flex-row md:flex-wrap justify-center lg:justify-between gap-10">
        {results.map((country) => (
          <Link
            key={country.name?.common}
            to={`country/${country.name?.common}`}
          >
            <Country
              key={country.name?.common}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flags={country.flags}
              altSpellings={country.altSpellings}
            ></Country>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;
