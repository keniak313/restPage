export const menu = document.createElement("div");
menu.classList.add("menu");

const dishes = [];
const categories = [`Przystawki`, `Zupy`, `Główne Dania`, `Desery`];

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

new Dish("Śledzik", "Rybka w oleju", "3.35zł", `Przystawki`);
new Dish("Ogóreczek", "Z bułeczką", "3.35zł", `Przystawki`);

new Dish("Żuruś", "Z jajkiem w chlebku", "4.50zł", `Zupy`);
new Dish("Barszczyk", "Oraz ziemniaczek i skwarki", "4.50zł", `Zupy`);

new Dish("Kiełbaska", "Smażona z ziemniaczkiem", "2.25zł", `Główne Dania`);
new Dish("Kotlecik", "Z kartofelkiem z pieca oraz kapustką", "2.25zł", `Główne Dania`);
new Dish("Mielonek", "Smażona kiełbasa z ziemniaczkiem", "2.25zł", `Główne Dania`);

new Dish("Beza", "Opis", "3.35zł", "Desery");
new Dish("Szarlotka", "Opis", "3.35zł", "Desery");

console.log(categories);
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

createMenu();