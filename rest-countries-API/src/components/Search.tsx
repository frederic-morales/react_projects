import { useState } from "react";
import { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (text: string) => void;
}

function Search(props: SearchBarProps) {
  const { onSearch } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(inputValue);
  };

  return (
    <>
      <div className="flex max-w-96 h-14 w-full items-center rounded-md justify-start pl-9 bg-veryLigthGray dark:bg-darkBlue dark:text-white">
        <svg
          className="size-5"
          role="button"
          aria-label="Search country"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            className="stroke-2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="pl-6 bg-transparent focus:outline-none text-sm placeholder:dark:text-white "
          type="text"
          placeholder="Search for a country..."
          aria-label="Campo de búsqueda"
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default Search;
