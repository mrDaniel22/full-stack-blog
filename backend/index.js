import express from "express";

const app = express();

app.get("/api/users", (req, res) => {
  res.send("Yes It Works, User Endpoint!!!");
});

app.listen(5000, () => {
  console.log("Server is Running");
});
