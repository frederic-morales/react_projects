import { useState } from "react";
// type Props = {};

function Navbar() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(!showList);
    console.log("click");
  }

  return (
    <div>
      <div className="flex px-6 py-4 justify-between rounded-md items-center w-56 bg-veryLigthGray dark:bg-darkBlue dark:text-white">
        <p>Buscar countries</p>
        <svg
          onClick={handleClick}
          className="dark:text-white size-4"
          role="button"
          aria-label="Nav bar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          fill="currentColor"
        >
          <path
            className="stroke-2"
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {showList && (
        <div className="flex pl-6 mt-0.5 py-3 rounded-md flex-col w-56 bg-veryLigthGray dark:bg-darkBlue dark:text-white">
          <p className="pt-3">Africa</p>
          <p className="pt-3">America</p>
          <p className="pt-3">Asia</p>
          <p className="pt-3">Europe</p>
          <p className="py-3">Oceania</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
