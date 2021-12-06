let ul = document.querySelector(".wrapper ul");

// console.log(ul);
// console.log(ul.children);
// console.log(ul.childNodes);

// for (let i = 0; i < ul.childNodes.length; i++) {
//     if (ul.childNodes[i].nodeType == 1) {
//         console.log(ul.childNodes[i]);
//     }
// }

// Parent
// console.log(ul.parentElement);
// console.log(ul.parentNode);

// Childs
// console.log(ul.children);
// console.log(ul.childNodes);

// Siblings
// console.log(ul.nextElementSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.previousSibling);

// console.log(ul.firstChild);
// console.log(ul.firstElementChild);

// console.log(ul.lastChild);
// console.log(ul.lastElementChild);

// let button = document.querySelector(".wrapper button");

// button.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("Button clicked");
// });


// function Test() {
//     console.log("Onclick called");
// }


class Brand {
    constructor(Id, Name) {
        this.id = Id,
            this.name = Name
    }
}

class Model {
    constructor(Id, Name, BrandId) {
        this.id = Id,
            this.name = Name,
            this.brandId = BrandId
    }
}

let brand1 = new Brand(1, "Audi");
let brand2 = new Brand(2, "BMW");
let brand3 = new Brand(3, "Mercedes");

let model1 = new Model(1, "RS7", 1);
let model2 = new Model(2, "Q7", 1);
let model3 = new Model(3, "A8", 1);

let model4 = new Model(4, "M4", 2);
let model5 = new Model(5, "X7", 2);
let model6 = new Model(6, "X5", 2);

let model7 = new Model(7, "GL500", 3);
let model8 = new Model(8, "C220", 3);

let Brands = [];
let Models = [];

Brands.push(brand1);
Brands.push(brand2);
Brands.push(brand3);

Models.push(model1);
Models.push(model2);
Models.push(model3);
Models.push(model4);
Models.push(model5);
Models.push(model6);
Models.push(model7);
Models.push(model8);

{ /* <option value="1">One</option> */ }

let BrandSelect = document.querySelector("#Brand");

Brands.forEach(brand => {
    let option = document.createElement("option");
    option.value = brand.id;
    option.textContent = brand.name;

    BrandSelect.append(option);
});

BrandSelect.addEventListener("change", function(e) {
    e.preventDefault();
    let ModelSelectOptions = document.querySelectorAll("#Model option");
    for (let i = 0; i < ModelSelectOptions.length; i++) {
        ModelSelectOptions[i].remove();
    }

    let ModelSelect = document.querySelector("#Model");

    let optionSelect = document.createElement("option");
    optionSelect.textContent = "Select model";
    optionSelect.setAttribute("selected", "selected");
    optionSelect.setAttribute("disabled", "disabled");
    ModelSelect.appendChild(optionSelect);

    let id = Number(this.value);
    Models.filter(model => model.brandId == id).forEach(item => {
        let option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;

        ModelSelect.appendChild(option);
    });
});

let add = document.getElementById("add");


add.addEventListener("click", function(e) {
    e.preventDefault();

    let brandId = document.getElementsByName("Brand")[0].value;
    let modelId = document.getElementsByName("Model")[0].value;
    let year = document.getElementsByName("Year")[0].value;
    let price = document.getElementsByName("Price")[0].value;

    if (brandId == "Select brand") {
        document.getElementsByName("Brand")[0].nextElementSibling.style.display = "block";
    }

    if (modelId == "Select model") {
        document.getElementsByName("Model")[0].nextElementSibling.style.display = "block";
    }

    if (price == "") {
        document.getElementsByName("Price")[0].nextElementSibling.style.display = "block";
    }

    if (year == "") {
        document.getElementsByName("Year")[0].nextElementSibling.style.display = "block";
    }

    if (price == "" || year == "" || brandId == "Select brand" || modelId == "Select model") {
        return;
    }

    let brand = Brands.find(item => item.id == brandId).name;
    let model = Models.find(item => item.id == modelId).name;

    let col = document.createElement("div");
    col.classList.add("col-lg-3");

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem;";


    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = "img/car.jpg";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = brand + " " + model;

    let p1 = document.createElement("p");
    p1.classList.add("card-text");
    p1.textContent = year;

    let p2 = document.createElement("p");
    p2.classList.add("card-text");
    p2.textContent = price;

    cardBody.appendChild(h5);
    cardBody.appendChild(p1);
    cardBody.appendChild(p2);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);

    let row = document.querySelector(".adds");

    row.appendChild(col);
});



// let year = document.getElementsByName("Year")[0];

// year.addEventListener("keypress", function(e) {
//     console.log(this.value);

// });


document.getElementsByName("Brand")[0].addEventListener("change", function(e) {
    document.getElementsByName("Brand")[0].nextElementSibling.style.display = "none";
});

document.getElementsByName("Model")[0].addEventListener("change", function(e) {
    document.getElementsByName("Model")[0].nextElementSibling.style.display = "none";
});

document.getElementsByName("Price")[0].addEventListener("change", function(e) {
    document.getElementsByName("Price")[0].nextElementSibling.style.display = "none";
});

document.getElementsByName("Year")[0].addEventListener("change", function(e) {
    document.getElementsByName("Year")[0].nextElementSibling.style.display = "none";
});