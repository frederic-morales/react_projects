import { useParams } from "react-router-dom";
import { CountryData } from "../services/Interfaces";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState<CountryData>();
  const [borders, setBorders] = useState<CountryData[]>([]);

  useEffect(() => {
    const api = async () => {
      try {
        const fetchData = await fetch(
          `https://restcountries.com/v3.1/name/${id}`,
          { method: "GET" }
        );
        const jsonData = await fetchData.json();
        if (jsonData[0].borders) {
          const bordersData = await Promise.all(
            jsonData[0].borders.map(async (border: string) => {
              const borderData = await fetch(
                `https://restcountries.com/v3.1/alpha/${border}`
              );
              const borderJson = await borderData.json();
              return borderJson[0]; // Retornar solo los datos necesarios
            })
          );
          setBorders(bordersData);
        }
        setCountry(jsonData[0]);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, [id]);

  console.log(country);
  console.log(borders);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center w-full dark:bg-veryDarkBlueBG">
      <div className="w-10/12 max-w-xs">
        <button className="mt-12 py-2 pr-7 pl-5 bg-darkBlue shadow-lg flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>{" "}
          <p>Back</p>
        </button>
        <div className="mt-16 h-full w-full rounded-lg flex flex-col justify-between">
          <div className="w-full h-52">
            <img
              src={country.flags?.png}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>
          <p className="text-2xl font-bold mt-6">{country.name?.common}</p>
          <ul className="text-sm mt-5 space-y-2">
            <li>
              <b>Native Name:</b>{" "}
              {country.altSpellings ? country.altSpellings[0] : ""}
            </li>
            <li>
              <b>Population:</b> {country.population}
            </li>
            <li>
              <b>Region:</b> {country.region}
            </li>
            <li>
              <b>{country.subregion && "Sub Region:"} </b> {country.subregion}
            </li>
            <li>
              <b>Capital:</b> {country.capital[0]}
            </li>
            <li className="pt-10">
              <b>Top Level Domain:</b> {country.tld ? country.tld[0] : ""}
            </li>
            <li>
              <b>Currencies: </b>
              {country.currencies
                ? Object.keys(country.currencies).map((key) => {
                    return country.currencies
                      ? country.currencies[key].name
                      : "";
                  })
                : ""}
            </li>
            <li>
              <b>Languages: </b>
              {country.languages
                ? country.languages[Object.keys(country.languages)[0]]
                : ""}
            </li>
          </ul>
          <div className="mt-10">
            <p className="text-xl font-semibold">
              {borders.length > 0 ? " Border Countries: " : ""}
            </p>
            <ul className="flex flex-wrap gap-2 my-5">
              {borders?.map((border) => {
                return (
                  <li
                    className="flex justify-center text-sm bg-darkBlue text-white w-24 py-2 rounded-lg "
                    key={border.name?.common}
                  >
                    <button className="">{border.name?.common}</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
