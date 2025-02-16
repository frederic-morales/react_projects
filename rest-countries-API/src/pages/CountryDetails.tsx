import { useParams, useNavigate } from "react-router-dom";
import { CountryData } from "../services/Interfaces";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState<CountryData>();
  const [borders, setBorders] = useState<CountryData[]>([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

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

  if (!country)
    return (
      <div className="h-screen w-full flex justify-center items-center text-xl font-black dark:bg-veryDarkBlueBG">
        Loading...
      </div>
    );

  return (
    <div className="flex items-center justify-center md:items-start md:pt-3 w-full md:h-svh dark:bg-veryDarkBlueBG">
      <div className="w-10/12 max-w-xs flex flex-col md:flex-row md:max-w-none md:gap-8 lg:gap-32 lg:max-w-screen-xl">
        <div className="md:w-2/5 lg:w-2/4">
          <button
            onClick={handleGoBack}
            className="mt-12 py-2 pr-7 pl-5 dark:bg-darkBlue shadow-lg flex gap-3"
          >
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
          <div className="w-full mt-16 md:max-w-sm lg:max-w-none">
            <img
              src={country.flags?.png}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="mt-12 h-full md:mt-0 w-full rounded-lg flex flex-col justify-between md:w-3/5 md:pt-28 lg:pt-44 lg:w-2/4">
          <p className="text-2xl font-bold lg:text-4xl">
            {country.name?.common}
          </p>
          <div className="flex flex-col md:w-full md:flex-row md:gap-10">
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
            </ul>
            <ul>
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
          </div>
          <div className="mt-10 flex md:flex-row md:h-auto flex-wrap gap-2 my-5 lg:mt-6 lg:my-0">
            <p className="font-semibold w-full">
              {borders.length > 0 ? " Border Countries: " : ""}
            </p>
            {/* <ul className="flex flex-wrap gap-2 my-5"> */}
            {borders?.map((border) => {
              return (
                <li
                  className="flex justify-center text-sm dark:bg-darkBlue dark:text-white w-24 py-2 rounded-lg shadow-lg"
                  key={border.name?.common}
                >
                  <button className="">{border.name?.common}</button>
                </li>
              );
            })}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
