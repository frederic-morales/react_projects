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
        setCountry(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, [id]);

  console.log(country);
  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <p>country</p>
      </div>
    </div>
  );
}

export default CountryDetails;
