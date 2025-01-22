import express from "express";
import * as url from "url"; // url is a module, not a package

const app = express();
const port = 3000;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.get("/", (req, res) => {
  res.send("Hello World"); // this is root or route
});

app.get("/about", (req, res) => {
  // res.send("This is about page");

  res.sendFile("./html/about.html", { root: __dirname });
  // res.sendFile(path.join(__dirname, "./html/about.html"));

  // const dirName = path.join(__dirname, "./html/about.html");
  // console.log(dirName);

});
// console.log(__dirname);

app.get("/contact", (req, res) => {
  // res.send("This is contact page");
  res.json({
    name: "John Doe",
    email: "example@domain.com",
    phone: "08123456789",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br>
    Category ID: ${req.params.idCat}`
  );
});

// Query String
app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br>
    Category: ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404)
     .send("404 Not Found");
  // res.send("Test Middleware");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});