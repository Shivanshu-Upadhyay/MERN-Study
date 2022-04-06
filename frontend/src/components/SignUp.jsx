import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const nevigate = useNavigate();


useEffect(()=>{
const auth = localStorage.getItem("user");
if(auth){
  nevigate('/')
}
})


  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch("http://localhost:8000/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    console.log(data);
    if (data) {
      nevigate("/");
      localStorage.setItem("user", JSON.stringify(data));
    }
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <form action="" className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="buton" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default SignUp;
