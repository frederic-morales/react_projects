// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
// import Country from "./components/Country";
import Main from "./components/Main";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
