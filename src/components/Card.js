import React from "react";
import Spinner from './Spinner'

const Card = ({ dog, updateDog,loading }) => {
  if(loading) return <Spinner/>
  return (
    <div className="card">
      <img onClick={() => updateDog(dog.breed.id)} src={dog.image} alt="dog" />
      <p>{dog.breed.name}</p>
    </div>
  );
};

export default Card;
