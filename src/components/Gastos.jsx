import React from "react";

const Gastos = (props) => {
  return (
    <>
      <p>{props.ingreso}</p>
      <p>{props.gasto}</p>
    </>
  );
};

export default Gastos;
