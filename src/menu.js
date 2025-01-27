import data from "./data.json";
export const menu = document.createElement("div");
menu.classList.add("menu");

const dishes = [];
const categories = [];//[`Przystawki`, `Zupy`, `Główne Dania`, `Desery`];

class Dish {
    constructor(name, description, price, category){
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        dishes.push(this);
    }

    createItem (dark){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");
        if(dark){
            menuItem.classList.add("darker");
        }
    
        const _title = document.createElement("div");
        _title.classList.add("title");
        _title.textContent = this.name;
        const _desc = document.createElement("div");
        _desc.classList.add("desc");
        _desc.textContent = this.description;
        const _price = document.createElement("div");
        _price.classList.add("price");
        _price.textContent = this.price;
    
        menuItem.appendChild(_title);
        menuItem.appendChild(_desc);
        menuItem.appendChild(_price);
        
        return menuItem;
    }
}

function createMenu(){
    let i = 0;
    categories.forEach((category) =>{
        const cat = document.createElement("div");
        cat.classList.add("category");
        cat.textContent = category;
        dishes.forEach((dish) =>{
            if(dish.category === category){
                if(i % 2){
                    cat.appendChild(dish.createItem(true));
                }else{
                    cat.appendChild(dish.createItem(false));
                }
                i++;
            };
        });
        menu.appendChild(cat);
    })
}

function loadItems(){
    for (const category of data.categories){
        categories.push(category);
    };
    for (const dish of data.dishes){
        new Dish(dish.name, dish.description, dish.price, dish.category);
    };
    createMenu();
}

loadItems();

// loadJSON().then((val) => {
//     for (const category of val.categories){
//         categories.push(category);
//     };
//     for (const dish of val.dishes){
//         new Dish(dish.name, dish.description, dish.price, dish.category);
//     };
//     createMenu();
// });