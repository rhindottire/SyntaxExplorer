const fs = require("fs"); // core module

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input your name: ", (name) => {
  rl.question("Input your phone: ", (phone) => {
    const contact = { name, phone };
    const fileBuffer = fs.readFileSync("data/contacts.json");
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Contact has been added.");
    rl.close();
  });
});