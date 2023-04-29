const express = require("express");
const { connect } = require("./config/connectDB");
const cors = require("cors");
const { json } = require("express");
const { UserModel } = require("./model/userData");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const user = await UserModel.find({name});
    if (user.length>0) {
      return res.send({ status: false, reason: `${name} Name is already used ` });
    }
  } catch (error) {
     console.log(error)
    return res.send({ status: false, error });
  }

  try {
    const user = await UserModel.create(req.body);
    res.send({ status: true, user });
  } catch (error) {
    res.send({ status: false, error });
  }
});

app.get("/userdetails", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000, async () => {
  try {
    await connect;
    console.log("Connect to DB 🚩");
  } catch (error) {
    console.log("error is ", error);
  }
  console.log("server is running  on 5000");
});
