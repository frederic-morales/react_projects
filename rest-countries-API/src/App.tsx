// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Search></Search>
      <Navbar></Navbar>
    </>
  );
}

export default App;
