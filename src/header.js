export const header = document.createElement("header");
import { updateContent } from "./index.js";

const headerContainer = document.createElement("div");
headerContainer.classList.add("headerContainer");

const logo = document.createElement("div");
logo.classList.add("logo");
logo.dataset.id = "main";
logo.textContent = "Jak kiedyś...";

logo.addEventListener("click", () => {
    updateContent(logo);
})

const nav = document.createElement("div");
nav.classList.add("nav");

function navItem (name, navId){
    const navItem = document.createElement("div");
    navItem.classList.add("navItem");
    navItem.dataset.id = navId;
    navItem.textContent = name;
    navItem.addEventListener("click", () =>{
        updateContent(navItem);
    });
    return navItem;
}

nav.appendChild(navItem("menu", "menu"));
nav.appendChild(navItem("o nas", "about"));
nav.appendChild(navItem("kontakt", "contact"));

headerContainer.appendChild(logo);
headerContainer.appendChild(nav);

header.appendChild(headerContainer);


