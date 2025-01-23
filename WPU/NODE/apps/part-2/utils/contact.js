import fs from "fs";

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

export const loadContacts = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

export const findContact = name => loadContacts().find(contact => contact.name.toLowerCase() === name.toLowerCase());

export const saveContacts = contacts => fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

export const addContact = contact => saveContacts(loadContacts().concat(contact));

export const checkDuplicate = name => loadContacts().find(contact => contact.name === name);

export const deleteContact = name => saveContacts(loadContacts().filter(contact => contact.name !== name));

export const updateContact = newContact => {
  const contacts = loadContacts();
  const filterContact = contacts.filter(contact => contact.name !== newContact.oldName);
  console.log(contacts, newContact);
  delete newContact.oldName;
  filterContact.push(newContact);
  saveContacts(filterContact);
};