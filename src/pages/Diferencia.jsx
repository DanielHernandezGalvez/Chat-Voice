import React from "react";
import { useState } from "react";
import Gastos from "../components/Gastos";

const Diferencia = () => {
  const [ingreso, Setingreso] = useState(0);
  const [gasto, SetGasto] = useState(0);
  const [diferencia, setDiferencia] = useState(0);

  const ingresarIngreso = (e) => {
    Setingreso(Number(e.target.value));
  };

  const ingresarGasto = (e) => {
    SetGasto(Number(e.target.value));
  };

  const calcularCapital = () => {
    setDiferencia(ingreso - gasto);
  };

  return (
    <>
      <input
        id="ingreso"
        value={ingreso}
        type="text"
        placeholder="Ingreso"
        onChange={ingresarIngreso}
      />
      <input
        id="gasto"
        value={gasto}
        type="text"
        placeholder="Gasto"
        onChange={ingresarGasto}
      />
      <button onClick={calcularCapital}>Calcular</button>
      <span id="capital">Total: {diferencia}</span>

      <Gastos gasto={gasto} />
      <Gastos ingreso={ingreso} />
    </>
  );
};

export default Diferencia;
