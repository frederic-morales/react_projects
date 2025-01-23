import { useParams } from "react-router-dom";
import { CountryData } from "../services/Interfaces";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState<CountryData>();

  useEffect(() => {
    const api = async () => {
      try {
        const fetchData = await fetch(
          `https://restcountries.com/v3.1/name/${id}`,
          { method: "GET" }
        );
        const jsonData = await fetchData.json();
        setCountry(jsonData[0]);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, [id]);

  console.log(country);
  if (!country) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center w-full dark:bg-veryDarkBlueBG">
      <div className="w-10/12 mt-7 max-w-xs">
        <button className="py-1 px-8 bg-darkBlue shadow-lg mb-6">Back</button>
        <div className="h-96 w-full rounded-lg flex flex-col justify-between">
          <div className="w-full h-56">
            <img
              src={country.flags?.png}
              alt=""
              className="w-full h-full object-fill"
            />
          </div>
          <p>{country.name?.common}</p>
          <ul>
            <li>
              Native Name: {country.altSpellings ? country.altSpellings[0] : ""}
            </li>
            <li>Population: {country.population}</li>
            <li>Region:{country.region}</li>
            <li>Sub Region: {country.subRegion}</li>
            <li>Capital:{country.capital[0]}</li>
            <li>Top Level Domain: {country.tld ? country.tld[0] : ""}</li>
            <li>
              Currencies:{" "}
              {country.currencies
                ? Object.keys(country.currencies).map((key) => {
                    return country.currencies
                      ? country.currencies[key].name
                      : "";
                  })
                : ""}
            </li>
            <li>
              Languages:{" "}
              {country.languages
                ? country.languages[Object.keys(country.languages)[0]]
                : ""}
            </li>
          </ul>
          <div>
            <p>Boder countries</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
