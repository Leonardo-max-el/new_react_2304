import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [list, setList] = useState<string[]>([
    "goku",
    "saitama",
    "naruto",
    "luffy",
  ]);

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado:", elemento);
  };

  const handleAdd = () => {
    setList((prevList) => [...prevList, "minion"]);
  };

  const handleRemove = () => {
    setList((prevList) => prevList.slice(0, -1));
  };

  const contenido =
    list.length !== 0 ? (
      <List data={list} onSelect={handleSelect} />
    ) : (
      "No hay elementos"
    );

  return (
    <Card>
      {list.length === 0 && <h1>No hay elementos</h1>}

      <CardBody title="Hola Mundo" text="Este es el texto"></CardBody>
      {contenido}

      {/* Pasar las funciones de agregar y eliminar al componente Button */}
      <Button onAdd={handleAdd} onRemove={handleRemove} />
    </Card>
  );
}

export default App;
