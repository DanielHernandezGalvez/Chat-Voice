import React from "react";

const Gastos = (props) => {
  return (
    <>
    <View>
      <Text>{props.ingreso}</Text>
      <Text>{props.gasto}</Text>
    </View>
    </>
  );
};

export default Gastos;
