import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.all("/", (_, res) => {
  res.send(path.join(__dirname, "public", "index.html"));
});

app.all("*", (_, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => console.log("Server started on port 3000"));
