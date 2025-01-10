import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["Goku", "Eren", "Luffy"]);
  const addElement = () => setList([...list, "Chanchito Feliz"]);
  const removeElement = () => setList(list.slice(0, -1));

  const handleSelect = (element: string) => {
    console.log("Imprimiendo ", element);
  };

  return (
    <Card>
      <Button onClick={addElement}>Agregar</Button>
      <Button onClick={removeElement}>Eliminar</Button>
      <CardBody />
      {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
    </Card>
  );
}

export default App;
