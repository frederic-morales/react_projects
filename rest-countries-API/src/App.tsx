// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
// import Country from "./components/Country";
import Main from "./pages/Main";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center font-nunito">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
