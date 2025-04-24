import React, { useState } from "react";

interface Props {
  data: string[]; // Define que `data` es un array de strings
  onSelect?: (elemento: string) => void; // Define que `onSelect` es una función que recibe un string
}

function List({ data, onSelect }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Estado para almacenar el índice seleccionado

  const handleClick = (index: number, elemento: string) => {
    setSelectedIndex(index); // Actualiza el índice seleccionado
    onSelect?.(elemento); // Llama a la función onselect con el elemento seleccionado
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          style={{ cursor: "pointer" }}
          key={`${elemento}-${i}`} // Usa una clave única
          className={`list-group-item ${selectedIndex === i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
