// type Props = {};
import { CountryData } from "../services/Interfaces";

function Country(props: CountryData) {
  const { flags, name, population, region, capital } = props;

  return (
    <div className="w-64 h-80 rounded-lg dark:bg-darkBlue">
      <div className="w-full h-40">
        <img src={flags?.png} alt="" className="w-full h-full object-fill" />
      </div>
      <div className="w-full pl-4 pt-5">
        <p className="dark:text-white text-base font-bold">{name?.common}</p>
        <ul className="dark:text-white text-sm mt-4">
          <li>
            <b>Pupolation:</b> {population}
          </li>
          <li>
            <b>Region:</b> {region}
          </li>
          <li>
            <b>Capital:</b> {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
