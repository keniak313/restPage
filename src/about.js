import data from "./data.json";
export const about = document.createElement("div");
about.classList.add("about");

const title = document.createElement("h1");
const text = document.createElement("div");

about.appendChild(title);
about.appendChild(text);

title.textContent = data.aboutTitle;
text.textContent = data.aboutText;

// loadJSON().then((val) => {
//     title.textContent = val.aboutTitle;
//     text.textContent = val.aboutText;
// });