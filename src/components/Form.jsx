import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({rechargepag, getInfo, setGetInfo}) => {

  const {register, handleSubmit, reset} = useForm()

  useEffect(() => {
    if (getInfo) {
      reset(getInfo)
    }
    
  }, [getInfo])
  

  const defaultValues = {
        brand: '',
        model: '',
        color: '',
        year: '',
        price: '',
  }

  const post = data => {
    
    let object = {
        brand: data.brand,
        model: data.model,
        color: data.color,
        year: data.year,
        price: data.price,
      }
  ;
    axios
      .post("https://cars-crud.herokuapp.com/cars/", object)
      .then((res) => rechargepag())
      .catch((err) => console.log("algo malo paso aki" + err))
      .finally(reset(defaultValues))
  };

  const updateInfo = data =>{

    axios.patch(`https://cars-crud.herokuapp.com/cars/${getInfo.id}/`, data )
    .then(res => rechargepag())
    .finally(reset(defaultValues))
    setGetInfo(undefined)
  }

  const resetValues = () =>{
    reset(defaultValues)
    setGetInfo(undefined)
    
  }

 
  return (
    <form onSubmit={handleSubmit(getInfo ? updateInfo : post)}>
      <label htmlFor="brand">brand</label>
      <input id="brand" {...register('brand')} type="text" />
      <label htmlFor="modeld">model</label>
      <input id="model" {...register('model')} type="text" />
      <label htmlFor="color">color</label>
      <input id="color" {...register('color')} type="text" />
      <label htmlFor="year">year</label>
      <input id="year" {...register('year')} type="text" />
      <label htmlFor="price">price</label>
      <input id="price" {...register('price')} type="text" />
      <button>
        {
          getInfo ? 'update' : 'create car'
        }
      </button>
      
        {
          getInfo && <button onClick={resetValues}>reset</button>
        }
      

    </form>
  );
};

export default Form;
