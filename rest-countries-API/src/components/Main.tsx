// type Props = {};
import Search from "./Search";
import Navbar from "./Navbar";
import Country from "./Country";

function Main() {
  return (
    <div className="w-full flex flex-col items-center pt-5 dark:bg-veryDarkBlueBG">
      <div className="w-11/12 flex flex-col gap-10">
        <Search></Search>
        <Navbar></Navbar>
      </div>
      <Country></Country>
    </div>
  );
}

export default Main;
