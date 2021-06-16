import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";
import Error  from './Error'

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
];

const Select = ({updateDog}) => {
  const [breeds, setbreeds] = useState(initialBreeds);
  const [error, seterror] = useState(null)
  useEffect(() => {
    updateBreed();
  }, []);

  const updateBreed = (breedId) => {
    getBreeds(breedId).then((newbreeds) => {
      setbreeds(newbreeds);
    })
    .catch((error)=>{
      console.log(error)
      seterror('Error al Cargar las Razas')
    })
  };

  return (
    <>
    <select onChange={(e)=>updateDog(e.target.value)}>
      {breeds.map((val) => (
        <option value={val.id} key={val.id}>
          {val.name}
        </option>
      ))}
    </select>
    {error && <Error error={error}/>}
    
    </>
  );
};

export default Select;
