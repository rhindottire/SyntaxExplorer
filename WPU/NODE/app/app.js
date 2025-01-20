// const { question, saveContact, listContact } = require("./contacts");
import { question, saveContact, listContact, showDetails, deleteContact } from "./contacts.js";

// get arguments from command line
// console.log(process.argv);
// const yargs = require("yargs");
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
// console.log(yargs.argv);
const args = yargs(hideBin(process.argv));

args.command({
  command: "add",
  describe: "Create a new contact",
  builder: {
    name: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Contact email",
      demandOption: false,
      type: "string",
    },
    phone: {
      describe: "Contact phone",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // const contact = {
    //   name: argv.name,
    //   email: argv.email,
    //   phone: argv.phone
    // };
    // console.log(contact);

    saveContact(argv.name, argv.email, argv.phone);
  },
}).demandCommand();

// args.command({
//   command: "edit",
//   describe: "Update a contact",
//   handler: () => {

//   },
// });

args.command({
  command: "remove",
  describe: "Delete contact",
  builder: {
    name: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    deleteContact(argv.name);
  },
});

args.command({
  command: "search",
  describe: "Show details contact by name",
  builder: {
    name: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    showDetails(argv.name);
  },
});

args.command({
  command: "list",
  describe: "Show all contacts",
  handler: () => {
    listContact();
  },
});

args.parse();

// const main = async () => {
//   const name = await question("Input your name: ");
//   const email = await question("Input your email: ");
//   const phone = await question("Input your phone: ");

//   saveContact(name, email, phone);
// };

// main();