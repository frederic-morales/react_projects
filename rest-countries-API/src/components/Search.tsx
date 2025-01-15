// type Props = {};

function Search() {
  return (
    <>
      <div className="flex w-11/12 rounded-md justify-start py-4 pl-9 bg-veryLigthGray dark:bg-darkBlue dark:text-white">
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
          className="pl-6 bg-transparent focus:outline-none text-sm placeholder:text-white"
          type="text"
          placeholder="Search for a country..."
          aria-label="Campo de búsqueda"
        />
      </div>
    </>
  );
}

export default Search;
