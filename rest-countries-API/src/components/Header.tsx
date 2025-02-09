import { useEffect, useState } from "react";

function Header() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body")?.classList.add("dark");
      console.log(theme);
    } else {
      document.querySelector("body")?.classList.remove("dark");
      console.log(theme);
    }
  }, [theme]);

  const handleChangeTheme = () => {
    console.log(theme);
    setTheme((prevTheme) => (prevTheme === "ligth" ? "dark" : "ligth"));
  };

  return (
    <div className="flex w-11/12 md:w-[86%] justify-between items-center shadow-lg lg:max-w-screen-xl">
      <p className="text-sm font-bold md:text-xl lg:text-2xl">
        Where in the world?
      </p>
      <div
        onClick={handleChangeTheme}
        className="flex justify-end items-center w-36 h-20"
      >
        <svg
          className="size-5 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
        <p className="pl-2 text-sm font-medium">Dark Mode</p>
      </div>
    </div>
  );
}

export default Header;
