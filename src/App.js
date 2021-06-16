import React, { useState, useEffect } from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import getDog from "./helpers/getDog";
import Error from "./components/Error";
const initialDog = {
  image:
    "",
  breed: {
    id: "0",
    name: "",
  },
};
function App() {
  const [dog, setdog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breeId) => {
    setLoading(true);
    getDog(breeId)
      .then((newdog) => {
        setdog(newdog);
        setLoading(false);
      })
      .catch((error) => {
        
        setError("Error al Cargar el Perro");
        console.log(error);
        setLoading(false)
      });
  };
  return (
    <div className="app">
      <h1>Doggies</h1>
      <Select updateDog={updateDog} />
      {error && <Error error={error} />}
      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  );
}

export default App;
