import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const auth = localStorage.getItem("user");
  const navi = useNavigate();
  const logout = () => {
    localStorage.clear();
    navi("/SignUp");
  };
  return (
    <>
      {auth ? (
        <ul className="link">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/Add">Add Product</Link>
          </li>
          <li>
            <Link to="/Update">Update Product</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/SignUp" onClick={logout}>
              Logout <span style={{textTransform:"capitalize"}}> ({JSON.parse(auth).name})</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className=" link2">
          <li style={{ marginRight: "2rem" }}>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Nav;
