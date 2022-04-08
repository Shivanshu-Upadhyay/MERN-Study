import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function Updateproduct() {
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [category, setcategory] = useState();
  const [compnay, setcompnay] = useState();
  const params = useParams();
  const navi = useNavigate();
  useEffect(() => {
    updateData();
  }, []);

  const updateData = async (e) => {
    let result = await fetch(`http://localhost:8000/update/${params.id}`);
    result = await result.json();
    console.log(result);
    setname(result.name);
    setprice(result.price);
    setcategory(result.category);
    setcompnay(result.compnay);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8000/updateProduct/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, compnay }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navi("/");
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Update Product</h2>
        <form action="" className="form">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Compnay"
            value={compnay}
            onChange={(e) => setcompnay(e.target.value)}
          />

          <button
            type="buton"
            onClick={(e) => {
              updateData();
              handlesubmit(e);
            }}
          >
            Updata
          </button>
        </form>
      </div>
    </>
  );
}

export default Updateproduct;
