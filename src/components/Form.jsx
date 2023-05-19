import React from "react";

export default function Input() {
  return (
    <main>
      <h1>Finanzas Personales</h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "25px",
          margin: "1rem",
        }}
      >
        <aside>{/* <Formulario /> */}</aside>

        <section className="card mt-2 bt-primary text-ligth">
          <div className="card-body">
            {/* <BudgetStyle> */}
            <h3>Budget : $</h3>
            <input type="number" value="" />
            {/* </BudgetStyle> */}
            <h4 className="mb-1">Total Expenses: $ </h4>
            {/* Calc Economies */}
            <h4>Economies: $</h4>
          </div>
        </section>
      </section>
      <section>{/* <Gastos /> */}</section>
    </main>
  );
}
