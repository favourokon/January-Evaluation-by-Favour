const animals = [
    {
        name: "Lion",
        numberOfLegs: "4",
        type: "Wild Animal"
    },
    {
        name: "Goat",
        numberOfLegs: "4",
        type: "Domestic Animal"
    },
    {
        name: "Dog",
        numberOfLegs: "4",
        type: "Domestic Animal"
    },
    {
        name: "Elephant",
        numberOfLegs: "4",
        type: "Domestic Animal"
    },
    {
        name: "Chicken",
        numberOfLegs: "2",
        type: "Domestic Animal"
    },
    {
        name: "Bear",
        numberOfLegs: "4",
        type: "Wild Animal"
    },
    {
        name: "Cat",
        numberOfLegs: "4",
        type: "Domestic Animal"
    },
    {
        name: "Fish",
        numberOfLegs: "0",
        type: "Domestic Animal"
    },
];

let classBox = document.getElementById('class-box')

let html = "";
for(let i=0; i < animals.length; i++){
    html += `
    <div class="animal-card">
    <div class="animal-info">
        <p class="animal-name">${animals[i].name}</p>
        <p class="animal-name">${animals[i].numberOfLegs}</p>
        <p class="animal-name">${animals[i].type}</p>
    </div>
</div>
    `
}

classBox.innerHTML = html

// Question Number 2

// 1. Bolean
// 2. Strings
// 3. Object
// 4. Numbers

// Question Number 3

Math.PI 






// Question Numer 4

// 1. pushing element
// 2. deleting element
// 3. shifting element
// 4. changig element

// Question Number 5

let food = "I Love Pizza";
let sliced = food.slice(7,12);
console.log(sliced)

let text = "I love pizza"
let replaced = text.replace("pizza", "kungfu")
console.log(replaced)
// Question Number 6

const fruits = [,"Banana", "Cucumber", "Orange", "Mango"]
console.log(fruits)

fruits.push("lemon")
console.log(fruits)

fruits.pop("lemon")
console.log(fruits)


const cars = ["Toyota", "Benz", "Ford", "Lexus"]
const novel = ["Harry Potter", "Rich dad", "Poor dad", "Game of throne",]
const mixedArray = novel.concat(cars)
console.log(mixedArray)