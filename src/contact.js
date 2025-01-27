import data from "./data.json";
export const contact = document.createElement("div");
contact.classList.add("contact");

const title = document.createElement("h1");

const contactContainer = document.createElement("div");
contactContainer.classList.add("contactContainer");

const name = document.createElement("div");
name.classList.add("name");
name.innerHTML = `<i class="fa-solid fa-address-card"></i>`;
const address = document.createElement("div");
address.classList.add("address")
address.innerHTML = `<i class="fa-solid fa-house"></i>`
const phone = document.createElement("div");
phone.classList.add("phone")
phone.innerHTML = `<i class="fa-solid fa-phone"></i>`
const email = document.createElement("div");
email.classList.add("email")
email.innerHTML = `<i class="fa-solid fa-envelope"></i>`
const map = document.createElement("div");
map.classList.add("map")

contactContainer.appendChild(name);
contactContainer.appendChild(address);
contactContainer.appendChild(phone);
contactContainer.appendChild(email);
contactContainer.appendChild(map);

contact.appendChild(title);
contact.appendChild(contactContainer);

title.textContent = data.contactTitle;
map.textContent = data.contactMapInfo;
name.innerHTML += data.contactName;
address.innerHTML += data.contactAddress;
phone.innerHTML += data.contactPhone;
email.innerHTML += data.contactEmail;

// loadJSON().then((val) => {
//     title.textContent = val.contactTitle;
//     map.textContent = val.contactMapInfo;
//     name.innerHTML += val.contactName;
//     address.innerHTML += val.contactAddress;
//     phone.innerHTML += val.contactPhone;
//     email.innerHTML += val.contactEmail;
// });