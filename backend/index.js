import express, { json } from "express";
import "./dbConnection/config.js";
import students from "./dbConnection/user.js";
import cors from "cors";
const app = express();
app.use(express.json());

app.use(cors());

app.post("/signup", async (req, res) => {
  let user = new students(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  res.send(result);
  console.log(result);
});

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

app.listen(8000);
