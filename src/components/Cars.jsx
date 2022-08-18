import axios from "axios";
import React from "react";

const Cars = ({ car, rechargepag, setGetInfo}) => {
  const style = {
    backgroundColor: car.color,
  };

  const deletecar = () => {
    axios
      .delete(`https://cars-crud.herokuapp.com/cars/${car.id}/`)
      .then((res) => rechargepag())
      .catch((err) => console.log("algo malo paso aki" + err))
      
  }
  const getInfoUpdate = () =>{
    setGetInfo(car)
  }

  return (
    <article style={style}>
      <p>brand: {car.brand}</p>
      <p>color: {car.color}</p>
      <p># {car.id}</p>
      <p>model: {car.model}</p>
      <p>$ {car.price}</p>
      <p>year: {car.year}</p>
      <hr />
      <button onClick={deletecar}>detelete</button>
      <button onClick={getInfoUpdate}>update</button>
    </article>
  );
};

export default Cars;
