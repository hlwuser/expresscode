const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/user", (req, res) => {
  res.send({ username: "hlwy=user" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
