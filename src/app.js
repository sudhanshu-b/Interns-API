const express = require("express");
const { run, client } = require('./db/conn')
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();
const port = process.env.PORT || 4000;
const collection = client.db("interndb").collection("intern");

app.use(express.json());

// Handling Get Request
app.get("/getdata", async (req, res) => {
  try {
    const getData = await collection.find().toArray();
    res.send(getData);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/", async (req, res) => {
  res.send("HI");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
