// type Props = {};
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Country from "../components/Country";
import { useEffect, useState } from "react";
import { CountryData } from "../services/Interfaces";

function Main() {
  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    const api = async () => {
      const fetchData = await fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
      });
      const jsonData = await fetchData.json();
      setData(jsonData);
    };

    api();
  }, []);

  console.log(data);

  return (
    <div className="w-full flex flex-col items-center pt-5 dark:bg-veryDarkBlueBG">
      <div className="w-11/12 flex flex-col gap-10">
        <Search></Search>
        <Navbar></Navbar>
      </div>
      <div className="mt-8 flex flex-col gap-10">
        {data.map((country) => (
          <Country
            key={country.name.common}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flags={country.flags}
          ></Country>
        ))}
      </div>
    </div>
  );
}

export default Main;
