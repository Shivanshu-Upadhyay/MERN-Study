import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
function Product() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    product();
  }, []);

  const product = async () => {
    let result = await fetch("http://localhost:8000/products");
    result = await result.json();
    setdata(result);
  };

  const handleDelete = async (id) => {
    let result = await fetch(`http://localhost:8000/delete/${id}`, {
      method: "Delete",
    });
    result = await result.json();

    if (result) {
      product();
      console.log(result);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Compnay</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
             
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.compnay}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      style={{ background: "red" }}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                    <Link
                      style={{ background: "green" }}
                      to={`/Update/${item._id}`}
                      className="button"
                    >
                      Update
                    </Link>
                  </td>
                 
                </tr>
              
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Product;
