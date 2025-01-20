// const fs = require("fs"); // core module
// const readline = require("readline");
// const chalk = require("chalk");
// const validator = require("validator");

import fs from "fs"; // core module
import readline from "readline";
import chalk from "chalk";
import validator from "validator";
import exp from "constants";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create Directory
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Create File
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContacts = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
}

export const question = (message) => {
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      resolve(answer);
    });
  });
};

export const saveContact = async (name, email, phone) => {
  const contact = { name, email, phone };

  const contacts = loadContacts();

  const duplicate = contacts.find((contact) => contact.name === name);
  if (duplicate) {
    console.log(
      chalk.red.inverse.bold(
        "Contact name already exists, please use another name"
      )
    );
    rl.close();
    return false;
  }

  if (!validator.isEmail(email)) {
    console.log(
      chalk.red.inverse.bold(
        "Invalid email"
      )
    );
    rl.close();
    return false;
  }

  if (!validator.isMobilePhone(phone, "id-ID")) {
    console.log(
      chalk.red.inverse.bold(
        "Phone number should be Indonesian"
      )
    );
    rl.close();
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(
    chalk.green.inverse.bold(
      "Contact has been added."
    )
  );
  rl.close();
};

export const listContact = () => {
  const contacts = loadContacts();

  console.log(chalk.cyan.inverse.bold("Contact List"));
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
  });
  console.log();
};

export const showDetails = (name) => {
  const contacts = loadContacts();

  const contact =
    contacts.find((contact) =>
      contact.name.toLowerCase() === name.toLowerCase());
  if (!contact) {
    console.log(chalk.red.inverse.bold(`Contact ${name} not found`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold("Contact Details"));
  console.log(`Name: ${contact.name}`);
  console.log(`Phone: ${contact.phone}`);
  if (contact.email) {
    console.log(`Email: ${contact.email}`);
  }
  console.log();
};

export const deleteContact = (name) => {
  const contacts = loadContacts();
  // [ "A", "B", "C" ]
  // [ "A", undefined,"C" ]

  const newContacts =
    contacts.filter((contact) =>
      contact.name.toLowerCase() !== name.toLowerCase());
  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`Contact ${name} not found`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

  console.log(chalk.green.inverse.bold(`Contact ${name} has been removed`));
};

// module.exports = { question, saveContact, listContact };