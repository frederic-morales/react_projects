// type Props = {};

import { useState, useEffect } from "react";

type county = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string;
};

function Country() {
  const [data, setData] = useState<county>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const handleClick = () => {
    console.log(data);
  };

  return (
    <div className="w-28 h-96 bg-slate-400" onClick={handleClick}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>County Name</p>
        <ul>
          <li>Pupolation: 323.154.54</li>
          <li>Region: Americas</li>
          <li>Capital: sdfrzssdgewgd</li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
