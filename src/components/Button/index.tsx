import { FC } from "react";
import styled from "styled-components";



type: BtnProps{
  onRemove: boolean;
}
const Btn = styled.button`
  background-color: red;
  padding: 10px;
`;

import styles from "./Button.module.css";

interface ButtonProps {
  onAdd: () => void;
  onRemove: () => void;
}
console.log(styles);

const Button: FC<ButtonProps> = ({ onAdd, onRemove }) => {
  const className = [styles.button, styles.padded].join(" ");

  return (
    <div className="">
      <Btn onClick={onAdd}>Agregar</Btn>
      <Btn onClick={onRemove}>Eliminar </Btn>

      {/* <Btn onClick={onRemove} className={className}>
        Eliminar
      </Btn> */}
    </div>
  );
};

export default Button;

// const Button: FC<ButtonProps> = ({ onAdd, onRemove }) => {
//     return (
//       <div className="d-flex gap-2">
//         <button className="btn btn-primary" onClick={onAdd}>
//           Agregar
//         </button>
//         <button className="btn btn-secondary" onClick={onRemove}>
//           Eliminar
//         </button>
//       </div>
//     );
//   };

//   export default Button;
