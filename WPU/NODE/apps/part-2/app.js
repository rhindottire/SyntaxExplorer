import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
// import morgan from "morgan";
import {
  loadContacts,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
  updateContact
} from "./utils/contact.js";
import { body, validationResult, check } from "express-validator";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// app.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });
app.use(express.static("public"));
app.use(expressEjsLayouts);
// app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

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
  const contacts = loadContacts();
  res.render("contact", {
    title: "Contact Page",
    layout: "partials/main-layout",
    contacts,
    msg: req.flash("msg"),
  });
});

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Add Contact",
    layout: "partials/main-layout",
  });
});

app.post("/contact",
  [
    body("name").custom(value => {
      const duplikat = checkDuplicate(value);
      if (duplikat) {
        throw new Error("Name already used");
      }
      return true;
    }),
    check("email", "Email is invalid").optional({ checkFalsy: true }).isEmail(),
    check("phone", "Phone number should be Indonesian").isMobilePhone("id-ID")
  ],
  (req, res) => {
  // res.send(req.body);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });

    res.render("add-contact", {
      title: "Add Contact",
      layout: "partials/main-layout",
      errors: errors.array(),
    });
    return;
  } else {
    addContact(req.body);
    req.flash("msg", "Data contact successfully added");
    res.redirect("/contact");
  }
});

app.get("/contact/delete/:name", (req, res) => {
  const contact = findContact(req.params.name);
  if (!contact) {
    res.status(404);
    res.send("<h1>404 Not Found</h1>");
    return;
  } else {
    // res.send(`Data contact with name ${req.params.name} successfully deleted`);

    deleteContact(req.params.name);
    req.flash("msg", "Data contact successfully deleted");
    res.redirect("/contact");
  }
});

app.get("/contact/edit/:name", (req, res) => {
  const contact = findContact(req.params.name);
  if (!contact) {
    res.status(404);
    res.send("<h1>404 Not Found</h1>");
    return;
  } else {
    res.render("edit-contact", {
      title: "Edit Contact",
      layout: "partials/main-layout",
      contact,
    });
  }
});

app.post("/contact/update",
  [
    body("name").custom((value, { req })=> {
      const duplikat = checkDuplicate(value);
      if (value !== req.body.oldName && duplikat) {
        throw new Error("Name already used");
      }
      return true;
    }),
    check("email", "Email is invalid").optional({ checkFalsy: true }).isEmail(),
    check("phone", "Phone number should be Indonesian").isMobilePhone("id-ID")
  ],
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("edit-contact", {
      title: "Edit Contact",
      layout: "partials/main-layout",
      errors: errors.array(),
      contact: req.body,
    });
    return;
  } else {
    updateContact(req.body);
    req.flash("msg", "Data contact successfully updated");
    res.redirect("/contact");
  }
});

app.get("/contact/:name", (req, res) => {
  const contacts = findContact(req.params.name);

  res.render("details", {
    title: "Detail Contact",
    layout: "partials/main-layout",
    contacts,
    name: req.params.name,
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
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});