//import { loadJSON } from "./index.js";
import data from "./data.json";
export const main = document.createElement("div");
main.classList.add("main");

const title = document.createElement("h1");
const text = document.createElement("div");

main.appendChild(title);
main.appendChild(text);

    title.textContent = data.mainTitle;
    text.textContent = data.mainText;

// loadJSON().then((val) => {
//     title.textContent = val.mainTitle;
//     text.textContent = val.mainText;
// });