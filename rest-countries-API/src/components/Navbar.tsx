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
      <div className="flex px-6 h-14 justify-between rounded-md items-center w-56 bg-veryLigthGray dark:bg-darkBlue dark:text-white">
        <p className="text-sm">Filter by region</p>
        <svg
          onClick={handleClick}
          className="dark:text-white size-3"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          strokeWidth={1.5}
          stroke="currentColor"
          fill="currentColor"
        >
          <path
            className="stroke-13"
            d="M10 30 L50 70 L90 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showList && (
        <div className="flex z-10 pl-6 mt-1 text-sm py-3 rounded-md flex-col w-56 bg-veryLigthGray dark:bg-darkBlue dark:text-white">
          <p className="pt-3">
            <a href="">Africa</a>
          </p>
          <p className="pt-3">
            <a href="">America</a>
          </p>
          <p className="pt-3">
            <a href="">Asia</a>
          </p>
          <p className="pt-3">
            <a href="">Europe</a>
          </p>
          <p className="py-3">
            <a href="">Oceania</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
