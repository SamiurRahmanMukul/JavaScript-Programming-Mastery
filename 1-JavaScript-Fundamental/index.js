/* =====> Part-1: Introduction JavaScript Fundamental <===== */

// ? 0. Starting Learn JavaScript -->
/* document.querySelectorAll(".btn").forEach((item) =>
{
    item.addEventListener('click', () => {
        alert("Hello World!");
    })
}); */

/* var firstNames = prompt("Enter your first name: ");
var lastNames = prompt("Enter your lsat name: ");
var fullNames = firstNames + " " + lastNames;
alert(fullNames); */

// ? 1. Printing Something 3 Way -->
/* alert("Hello World!");
console.log("Hello World");
document.write("Hello World!"); */

// ? 2. Variable Declear And Initialize -->
/* let names, state, zip;
names = "Samiur Rahman Mukul";
state = "Mymensingh";
zip = 2200;

console.log(names, state, zip);

    // using -> var
var profession = "Software Engineer";
console.log(profession);

    // using -> let
let about = "Web Developer";
console.log(about);

    // using -> const (CONSTANT) ? not reassign possible
const man = "Mukul";
console.log(man); */

// ? 3. String Concatenation -->
/* var firstName = "Samiur Rahman";
var lastName = "Mukul";
console.log(firstName +" " + lastName);

var url = "google";
console.log("https://www."+url+".com"); */

// ? 4. Operators In JavaScript -->
/* +=, -+, *=, /=, ++, --, % */

/* var num = 10;
console.log(num);

    // Type of Variable
console.log(typeof 101);
console.log(typeof "Hello World!");
console.log(typeof true);

    // Type Casting -> Implicit
var num1 = prompt("Enter 1st Number: ");
var num2 = prompt("Enter 2nd Number: ");

var num3 = parseInt(num1, 10);
var num4 = parseInt(num2, 10);

var sum = num3 + num4;
alert("Sum = " + sum); */

// ? 5. Arrays, Function, Objects -->
// Arrays
/* const friends = ["Jonas","Petter","Mukul", undefined, null];
console.log(friends[1]);

const bestFriend = friends[0];
console.log(bestFriend); */

// Functions
/* // normal function
function hello() {
    console.log("Hello World!");
}
hello();

// parametrized function
function myName(name) {
    console.log("Welcome to " + name);
}
myName("Samiur Rahman Mukul");

// return type function
function addValue(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(addValue(10, 20)); */

// Objects
/* const Person = {
    fullName : "Samiur Rahman",
    callName : "Mukul",
    age : 21,
    education : "B.Sc. Hons In CSE",
    married : false,
    sibling : ["Alam", "Arif", "Mostofa", "Oli"],
    getting() {
        console.log("Hello I'm Samiur Rahman Mukul");
    }
}

console.log(Person.callName);
console.log(Person.getting());
console.log(Person.married); */

// ? 6. Control Statement -->
// <, =<, >, >=, ==, !=, &&, ||
// if, if-else, switch, loop

/*  if (true) {
     console.log("Hello World!");
 } */

// 1. Dice Program:
// var num = prompt("Please enter a number: ");
/* var num = 6;
switch (num) {
    case 1:
        console.log("You Chose - 1");
        break;
    case 2:
        console.log("You Chose - 2");
        break;
    case 3:
        console.log("You Chose - 3");
        break;
    case 4:
        console.log("You Chose - 4");
        break;
    case 5:
        console.log("You Chose - 5");
        break;
    case 6:
        console.log("You Chose - 6");
        break;

    default:
        console.log("Something Went Wrong!");
        break;
} */

/* =====> Part-2: Connecting The Dots <===== */
// ? 7. JavaScript String Method -->
/* let text = "Samiur Rahman Mukul";
let text_len = text.length;

console.log(text);
console.log(text_len);
console.log(text.toLowerCase());
console.log(text.toUpperCase()); */

// ? 8. JavaScript Array Method -->
/* let names = ["Alam", "Arif", "Al-amin", "Babul", "Mukul"];
let names_len = names.length;

console.log(names);
console.log(names_len);

// array in for loop
let new_array = [];
for (let i = 0; i <= names.length; i++) {
  console.log(names[i]);
} */

// ? 9. JavaScript Map Method -->
/* const people = [
    {name: 'mukul', age: 46, position: 'developer'},
    {name: 'alam', age: 46, position: 'developer'},
    {name: 'arif', age: 46, position: 'developer'}
];

const ages = people.map(function (person) {
    console.log(person);
    return 'hello world';
});
console.log(ages); */

// ? 10. JavaScript Filter Method -->
/* const people = [
    {name: 'mukul', age: 46, position: 'developer'},
    {name: 'alam', age: 46, position: 'developer'},
    {name: 'arif', age: 46, position: 'developer'}
];

const youngDeveloper = people.filter(function(person) {
    return person.age <= 25
});
console.log(youngDeveloper); */

// ? 11. JavaScript Find Method -->
// ? 12. JavaScript Reduce Method -->

// ? 13. JavaScript Math Function -->
/* console.log(Math.floor(4.6663));
console.log(Math.ceil(5.7673));

const num1 = 5;
console.log(Math.sqrt(num1));

console.log(Math.PI);
console.log(Math.min(10, 24, 54, 53, 55));
console.log(Math.max(10, 24, 54, 53, 55));

// Random Number Generate
const random = Math.random() * 10;
console.log(random); */

// ? 14. Date & Time Generate -->
/* const date = new Date();
console.log(date);

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const days = [
    'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
]

const day = date.getDay();
console.log(days[day]);

const month = date.getMonth();
console.log(months[month]);

console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;
document.body.innerHTML = sentence; */

/* =====> Part-3: JavaScript Dom Manipulating <===== */
// ? 15. Window Object API -->
/* console.log(window);
console.log(document);

// select element using id
const h2 = document.getElementById("title");
h2.style.color = "red";

// select element using html tag
const headings = document.getElementsByTagName("h2");
headings[1].style.color = "purple";
console.log(headings.length);

const item = document.getElementsByTagName("li");
item[2].style.color = "green";

const betterItem = [...item];
betterItem.forEach(function (item) {
  // console.log(item);
});
console.log(item);
console.log(betterItem);

// select element using class
const list = document.getElementsByClassName("special");
list[3].style.color = "purple";

// select element using QuerySelector
const qSelect = document.querySelectorAll(".special");
console.log(qSelect);

const qSelLast = document.querySelector(".special:last-child");
qSelLast.style.color = "tomato";

// children, first & last child select
const special = document.querySelector(".special");
const allChildren = special.childNodes;
console.log(allChildren);

const children = special.children;
console.log(children);

console.log(special.firstChild);
console.log(special.lastChild);

// select parent element
const head = document.querySelector("h2");
const parent = head.parentElement;
parent.style.color = "blue"; */

// previousSibling, nextSibling, return whitespace
// previousElementSibling, nextElementSibling
// nextValue, textContent
// getAttribute(), setAttribute() method
// className, classList dynamic property set
// dynamic createElement, createTextNode, element.appendChild(ChildElement)
// insertBefore('element', 'location');
// replaceChild('old', 'new');

// prepend, innerText
/* const heading = document.createElement('h2');
heading.innerText = `i am a dynamic heading`;
document.body.prepend(heading);

// remove element, removeChild element
const result= document.querySelector('h2');
result.remove();

// innerHTML, textContent
// CSS - Property Set
const random = document.querySelector('.random');
console.log(random.style);

random.style.backgroundColor = "purple"
random.style.color = 'white';
random.style.textTransform = 'capitalize';

// select element, addEventListener(), what event to do
const btn = document.querySelector('.btn-1');

// callBack function
btn.addEventListener('click', function(){
    console.log('Ok. Click MEE!');
    btn.classList.add('.btn');
}) */

// Click, mousedown, mouseup, mouseenter, mouseleave
/* const mouse = document.querySelector('h3');

mouse.addEventListener('click', function(){
    console.log('mouse clicked.');
})
mouse.addEventListener('mouseup', function(){
    console.log('mouse clicked.');
})
mouse.addEventListener('click', function(){
    console.log('mouse up.');
})
mouse.addEventListener('mousedown', function(){
    console.log('mouse down.');
})
mouse.addEventListener('mouseenter', function(){
    console.log('mouse enter.');
})
mouse.addEventListener('mouseleave', function(){
    console.log('mouse leave.');
}) */

// keypress, keyup, keydown
/* const key = document.querySelector('name');

key.addEventListener('keypress', function(){
    console.log('keypress');
})
key.addEventListener('keyup', function(){
    console.log('keyup');
})
key.addEventListener('keydown', function(){
    console.log('keydown');
}) */

// event object, event.type, event.currentTarget
// this keyword, preventDefault() - prevent default behaviour
// currentTarget, Target
// allow select dynamic elements
// event propagation, event bubbling, event capturing
// submits event listener, prevent default, get a value
// web storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear
// JSON.stringify(), JSON.parse()
