// type Props = {};
import { CountryData } from "../services/interfaces";

function Country(props: CountryData) {
  const { name, population, region, capital } = props;

  return (
    <div className="w-28 h-96 bg-slate-400">
      <div>
        <img src="" alt="" />
      </div>
      <div className="">
        <p>County Name</p>
        <ul>
          <li>Name: {name.common}</li>
          <li>Pupolation: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
