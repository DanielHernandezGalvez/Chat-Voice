import React from "react";
const capital = document.getElementById("capital");
const ingreso = document.getElementById("ingreso");
const gasto = document.getElementById("gasto");

capital.innerHTML = parseInt(ingreso.value - gasto.value);

const Categorias = () => {
  return (
    <div>
      <input id="ingreso" type="text" placeholder="Ingreso" />
      <input id="gasto" type="text" placeholder="Gasto" />
      <span id="capital"></span>
    </div>
  );
};

export default Categorias;
