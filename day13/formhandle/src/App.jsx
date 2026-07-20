// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");

//   const storeData = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <>
//       <input type="text" placeholder="Enter Name" value={name} onChange={storeData} />
//       <button>Click here</button>
//       <h2>Name:{name}</h2>

      
//     </>
//   );
// };

// export default App;


import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [saveData, setSaveData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveData(data);
    setData("");
  };

  return (
    <>
      <h1>User Data</h1>

      <form onSubmit={handleSubmit}>
        
        <input type="text"   placeholder="Enter Name"   value={data} onChange={(e) => setData(e.target.value)} />

        <button type="submit">Submit</button>

      </form>

      <h3>{saveData}</h3>
    </>
  );
};

export default App;