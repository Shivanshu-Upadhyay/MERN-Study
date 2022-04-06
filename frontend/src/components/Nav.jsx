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
      <ul className="link">
        <Link to="/">Product</Link>
        <Link to="/Add">Add Product</Link>
        <Link to="/Update">Update Product</Link>
        <Link to="/Profile">Profile</Link>
        {auth ? (
          <Link to="/SignUp" onClick={logout}>
            Logout
          </Link>
        ) : (
          <Link to="/SignUp">SignUp</Link>
        )}
        <Link to="/login">LogIn</Link>
      </ul>
    </>
  );
}

export default Nav;
