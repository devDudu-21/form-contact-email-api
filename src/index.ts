import express from "express";
import bodyParser from "body-parser";
import receiveData from "./routes/receiveDataRoute";
import "dotenv/config";

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", receiveData);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
