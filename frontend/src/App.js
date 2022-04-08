import "./App.css";
import Nav from "./components/Nav";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import Updateproduct from "./components/Updateproduct";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateCom from "./components/PrivateCom";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      
        <Route element={<PrivateCom />}>
          <Route path="/" element={<Product />} />
          <Route path="/Add" element={<AddProduct />} />
          <Route path="/Update/:id" element={<Updateproduct />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>

        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
