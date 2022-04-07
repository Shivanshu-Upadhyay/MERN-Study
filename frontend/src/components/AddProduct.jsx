import React,{useState} from 'react'

function AddProduct() {
  const [name, setname] = useState()
  const [price, setprice] = useState()
  const [category, setcategory] = useState()
  const [compnay, setcompnay] = useState()

 const handlesubmit =(e)=>{
   e.preventDefault();
   console.log(name,price,category,compnay);
 }


  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
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

        <button type="buton" onClick={handlesubmit}>Save</button>
      </form>
    </div>
  );
}

export default AddProduct