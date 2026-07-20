import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({name:"", email:"", password:""});
  const [users, setUsers] = useState([]);

  const storeData = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]:value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({ name: "", email: "", password: "",
    });
};

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={storeData} />
        <input type="email" name="email" placeholder="Enter Eamil" value={formData.email} onChange={storeData} />
        <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={storeData} />
        <input type="Submit" value="Register" />
    </form>     
       {users.map((user, index) => (
        <div key={index}>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Password: {user.password}</h2>
          
        </div>
      ))}

      
    </>
  );
};

export default App;