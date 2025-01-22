import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import morgan from "morgan";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressEjsLayouts); // 3rd-party middleware for layout

// Application Level Middleware
app.use((req, res, next) => {
  console.log("Time: ", Date.now()); // from 1 january 1970
  next();
});

// Built-in Middleware
app.use(express.static("public"));

// Third-party Middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
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

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br>
    Category: ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404)
     .send("404 Not Found");
  // res.send("Test Middleware");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});