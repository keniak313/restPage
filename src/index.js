import "./styles.css"
import {header} from "./header.js";
import {footer} from "./footer.js";
import {main} from "./main.js"
import {menu} from "./menu.js"
import {about} from "./about.js"
import {contact} from "./contact.js"

const navItems = [main, menu, about, contact];

const content = document.createElement("content");

let currentView = "main"

export function updateContent(item){
    navItems.forEach((val) =>{
        console.log(`val ${val.className} oraz name ${item.classList}`);
        if(val.className === item.dataset.id && val.className != currentView){
            currentView = val.className;
            content.replaceChildren(val);
            item.classList.add("active");
        }else if(item.dataset.id === "main" && item.dataset.id != currentView){
            currentView = "main";
            content.replaceChildren(main);
        };
    });
    const navButtons = document.querySelectorAll(".navItem")
    navButtons.forEach((btn) => {
        if(btn.dataset.id != currentView){
            btn.classList.remove("active");
        };
    })
};

content.appendChild(main);

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);
