import express, { json } from "express";
import "./dbConnection/config.js";
import students from "./dbConnection/user.js";
import products from "./dbConnection/product.js";
import cors from "cors";
const app = express();
app.use(express.json());

app.use(cors());

// SIGNUP API

app.post("/signup", async (req, res) => {
  let user = new students(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
  console.log(result);
});

// LOGIN API

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await students.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send("No USER Found");
    }
  } else {
    res.send("No USER Found");
  }
});

// FOR ADDING THE DATA

app.post("/addProduct", async (req, res) => {
  let product = new products(req.body);
  let result = await product.save();
  res.send(result);
});

// FOR COMPLETE DATA

app.get("/products", async (req, res) => {
  let data = await products.find();
  if (data.length > 0) {
    res.send(data);
    console.log(data);
  } else {
    res.send("no data");
  }
});

// FOR DELETING THE DATA

app.delete("/delete/:id", async (req, res) => {
  const result = await products.deleteOne({ _id: req.params.id });
  res.send(result);
});

// FOR SENDING THE DATA IN FORM

app.get("/update/:id", async (req, res) => {
  let result = await products.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("sonthing went wrong");
  }
});

// FOR UPDATING THE DATA

app.put("/updateProduct/:id", async (req, res) => {
  let result = await products.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  )
  res.send(result)
});

app.listen(8000);
