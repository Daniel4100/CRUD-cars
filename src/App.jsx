import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useApiCall from "./hook/useApiCall";
import Cars from "./components/Cars";
import useApiPost from "./hook/useApiPost";
import axios from "axios";
import Form from "./components/Form";

function App() {
  const [cars, setCars] = useState();
  const [getInfo, setGetInfo] = useState()

  const rechargepag = () =>{
    axios
      .get("https://cars-crud.herokuapp.com/cars/")
      .then((res) => setCars(res.data))
      .catch((err) => console.log("error url no valida"));
  }

  useEffect(() => {
    rechargepag()

  }, []);

  
  

  const killAll = (e) =>{
    e.preventDefault()
    let carsDelete = cars?.filter(car => car.brand.includes(e.target.brand.value))
    console.log(carsDelete)
    carsDelete?.map(car => (
      axios.delete(`https://cars-crud.herokuapp.com/cars/${car.id}/`)
        .then(res => { rechargepag()
          console.log('eliminate sucefull')})
        .catch(err => console.log(err + 'valio kk'))
        .finally(e.target.brand.value = '')
    ))
  }

  return (
    <div className="App">
      <Form rechargepag={rechargepag} getInfo={getInfo} setGetInfo={setGetInfo} />
      <form onSubmit={killAll}>
        <input list="lista" type="text" id="brand" />
        <datalist id="lista">
          {
            cars?.map(car => (
              <option key={car.id} value={car.brand}></option>
            ))
          }
          
        </datalist>
        <button>kill all</button>
      </form>
      <div className="container">
        {cars?.map((car) => (
        <Cars key={car.id} car={car} rechargepag={rechargepag} setGetInfo={setGetInfo} />
      ))}
      </div>
      
    </div>
  );
}

export default App;
