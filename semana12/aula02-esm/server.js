import users, { ageVerify } from "./users-data.js";
// import { ageVerify } from "./users-data.js";
import hello from "./greetings.js";
import { chalkLog } from "./log.js";
// import fetchList from "./fetch-list.js";
import PromptSync from "prompt-sync";

//console.log(users);
//hello();
//ageVerify(17);
//chalkLog();
// fetchList();

let userName = "";
const prompt = PromptSync();

console.log("Digite o seu nome amigao:");
userName = prompt("> ");

console.log("Tua idade aí meu primo");
userAge = prompt("> ");

hello(userName);
console.log("Luquinhas é nosso companheiro");
console.log("Luquinhas é nosso companheiro");
console.log("Luquinhas é nosso companheiro");
console.log("Ninguém pode negar!!!");
