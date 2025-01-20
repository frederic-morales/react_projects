import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col items-center bg-veryLigthGray dark:bg-darkBlue dark:text-white">
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default Layout;
