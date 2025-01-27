export const contact = document.createElement("div");
contact.classList.add("contact");

const title = document.createElement("h1");
title.textContent = "Odwiedź nas!"

const contactContainer = document.createElement("div");
contactContainer.classList.add("contactContainer");

const name = document.createElement("div");
name.classList.add("name");
name.innerHTML = `<i class="fa-solid fa-address-card"></i> Jak kiedyś... S.C.`;
const address = document.createElement("div");
address.classList.add("address")
address.innerHTML = `<i class="fa-solid fa-house"></i> Łódź`
const phone = document.createElement("div");
phone.classList.add("phone")
phone.innerHTML = `<i class="fa-solid fa-phone"></i> +48 000 000 000`
const email = document.createElement("div");
email.classList.add("email")
email.innerHTML = `<i class="fa-solid fa-envelope"></i> jak_kiedys@tutaj.pl`
const map = document.createElement("div");
map.classList.add("map")
map.textContent = "Jak będzie Api to i będzie mapa."

contactContainer.appendChild(name);
contactContainer.appendChild(address);
contactContainer.appendChild(phone);
contactContainer.appendChild(email);
contactContainer.appendChild(map);

contact.appendChild(title);
contact.appendChild(contactContainer);