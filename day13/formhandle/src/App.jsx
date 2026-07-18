import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const storeData = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Enter Name" value={name} onChange={storeData} />
      <button>Click here</button>
      <h2>Name:{name}</h2>

      
    </>
  );
};

export default App;