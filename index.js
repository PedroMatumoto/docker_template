const express = require("express");
const app = express();
app.use(express.json());

app.get("/hey-docker", (req, res) => {
  res.status(200).json({ mensagem: "Hey Docker!" });
});

app.listen(5201, () => {
  console.log("Server running on docker port 5201");
});
