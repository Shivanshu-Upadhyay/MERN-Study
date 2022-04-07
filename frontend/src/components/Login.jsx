import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:8000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("enter currect");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>LogIn</h2>
      <form action="" className="form">
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <button type="buton" onClick={handlesubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
