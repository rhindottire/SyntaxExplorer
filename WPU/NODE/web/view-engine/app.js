import express from "express"; // express cannot include
// import * as url from "url";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const port = 3000;
// const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.get("/", (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname });
  const students = [
    {
      name: "John Doe",
      email: "example@domain.com",
      phone: "08123456789",
    },
    {
      name: "Jane Doe",
      phone: "08123456789",
    },
    {
      name: "John Smith",
      email: "example@domain.com",
      phone: "08123456789",
    },
  ];
  // const students = [];
  res.render("index", {
    title: "Home",
    name: "Ridho",
    students,
    layout: "partials/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    layout: "partials/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
    layout: "partials/main-layout",
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