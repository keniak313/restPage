export const header = document.createElement("header");
import { updateContent} from "./index.js";
import data from "./data.json";

const headerContainer = document.createElement("div");
headerContainer.classList.add("headerContainer");

const logo = document.createElement("div");
logo.classList.add("logo");
logo.dataset.id = "main";

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

headerContainer.appendChild(logo);
headerContainer.appendChild(nav);

header.appendChild(headerContainer);

logo.textContent = data.logo;
nav.appendChild(navItem(data.menu, "menu"));
nav.appendChild(navItem(data.about, "about"));
nav.appendChild(navItem(data.contact, "contact")); 

// loadJSON().then((val) => {
//     logo.textContent = val.logo;
//     nav.appendChild(navItem(val.menu, "menu"));
//     nav.appendChild(navItem(val.about, "about"));
//     nav.appendChild(navItem(val.contact, "contact")); 
// });

