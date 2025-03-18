import express from "express"; // just for fun 

const app = express();

const port = 5001;

app.get("/funday", (req, res) => {
  res.send(`<h1>Server is ready at port 6000</h1>`);
});

app.listen(port, () => {
  console.log(`server port  ${port}`);
});
