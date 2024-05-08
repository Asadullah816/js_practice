// let numbers = [23, 2, 2, 2, 3, 4, 5, 6, 7];
// let text = "<ul>"
// for (let i = 0; i < numbers.length; i++) {
//     text += "<li>" + numbers[i] + "</li>"
// }
// text += "</ul>"
// console.log(text)
// let container = document.querySelector('.demo');
// container.innerHTML = text;

// let animal = ['lion', 'monkey', 'cat'];
// let animal1 = ['Goat', 'donkey', 'sheep'];
// // let data = animal.toString();
// let data;
// // data = animal.at(1);
// // data = animal.join(" $ ")
// // data = animal.pop(3);
// // data = animal.push('Dog');
// // data = animal.shift();
// // data = animal.unshift('cow');
// // data = animal.concat(animal1)
// // data = animal.slice(0, 1, 'hourse');
// console.log(animal);

// let number = [1, 2, 3, 4, 5, 6, 7, 8];
// number.forEach(output);
// function output(value, index, item) {
//     console.log(value + "\n");
// }
// let numbers2 = number.map(output);
// function output(value, index, item) {
//     console.log(value * 4)
// }
// let flatMap = number.flatMap((i) => i * 3);
// console.log(flatMap);

// let filter = number.filter(output);
// function output(value, index, item) {
//     let data = value < 4;
//     console.log(data)
// }
// let date = new Date();
// let date1 = new Date(year, month);
// date = date.toString();
// date = date.toUTCString();
// date = date.toDateString();
// date = date.toISOString();
// console.log(date);


// switch (new Date().getDay()) {
//     case 0:
//         day = 'Sunday';
//         console.log(day);
//         break;
//     case 1:
//         day = "Monday";
//         console.log(day);
//         break;
//     case 2:
//         day = "Tuesday";
//         console.log(day);
//         break;
//     case 3:
//         day = "Wednesday";
//         console.log(day);
//         break;
//     case 4:
//         day = "Thursday";
//         console.log(day);
//         break;
//     case 5:
//         day = "Friday";
//         console.log(day);
//         break;
//     case 6:
//         day = "Saturday";
//         console.log(day);
//         break;
// }


// function tryCatch() {
//     let inp = document.querySelector('#inp').value;

//     let message = document.querySelector('#message');
//     message.innerHTML = "";
//     try {
//         if (inp.trim() == "") throw "empty";
//         if (isNaN(inp)) throw "Not a Number";
//         inp = Number(inp);
//         if (inp < 5) throw "Less then 5";
//         if (inp > 5) throw "greater Then 5";
//     }
//     catch (err) {
//         message.innerHTML = "Input is " + err
//     }
// }
// let person = {
//     firstname: "someone",
//     lastname: "lastName",
//     age: 20,
//     get fullName() {
//         return this.firstname + " " + this.lastname;

//     }
// }
// console.log(person.fullName)
// let car = {
//     engine: "Hybrid",
//     tires: 4,
//     sidelights: 4,
//     windows: 4,
//     doors: 4,
// }
// let cars = Array.from(car)
// console.log(cars);
// =======================================
// Project 1
// =======================================
// let body = document.getElementsByTagName("body")[0];
// function setColor(name) {
//     body.style.backgroundColor = name;
// }
// function randomColor() {
//     const red = Math.round(Math.random() * 255);
//     const blue = Math.round(Math.random() * 255);
//     const green = Math.round(Math.random() * 255);
//     const color = `rgb(${red},${green},${blue})`;
//     body.style.backgroundColor = color;
// }
// randomColor();
// =======================================
// Project 2
// =======================================
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// function check() {
//     let input = document.getElementById('input');
//     let value = input.value;
//     let reverse = reverseString(value);
//     if (value === reverse) {
//         alert("The Text is palendrome");
//     }
//     else {
//         alert("Not This text!!!");
//     }
// }
// =======================================
// Project 3
// =======================================
// let qoute = [
//     "You must be the change you wish to see in the world",
//     "Spread love everywhere you go",
//     "The only thing we have to fear is fear itself",
//     "Darkness cannot drive out darkness: only light can do that",
//     "Do one thing every day that scares you",
//     "Well done is better than well said",
//     "I failed my way to success",
//     "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
//     "You have within you, right now, everything you need to deal with whatever the world can throw at you",
//     "Character is power",
//     "Never be limited by other people's limited imaginations",
//     "Only a life lived for others is a life worthwhile",
//     "The only impossible journey is the one you never begin",
//     "It takes courage to grow up and become who you really are",
//     "Your self-worth is determined by you",
//     "Nothing is impossible",
// ]

// let qouteIndexes = new Set();
// let text = document.getElementById('text');
// function generate() {
//     if (qouteIndexes.size >= qoute.length) {
//         qouteIndexes.clear();
//     }
//     while (true) {
//         let rand = Math.floor(Math.random() * qoute.length);
//         if (qouteIndexes.has(rand)) continue
//         let index = qoute[rand];
//         text.innerHTML = index;
//         qouteIndexes.add(rand);
//         break;
//     }
// }
// =======================================
// Project 4
// =======================================
// let interval = null;
// let elipse = 0;
// const time = document.getElementById('time');

// function padStart(val) {
//     return val.toString().padStart(2, "0");
// }
// function setTime() {
//     let minutes = Math.floor(elipse / 60);
//     let seconds = elipse % 60;
//     time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
// }
// function timer() {
//     elipse++;
//     setTime();
// }
// function start() {
//     if (interval) stop()
//     interval = setInterval(timer, 1000);
// }
// function stop() {
//     clearInterval(interval);
// }
// function reset() {
//     stop();
//     elipse = 0;
//     setTime();
// }
// =======================================
// Project 5
// =======================================
// let items = [];
// let itemDiv = document.getElementById('item');
// let input = document.getElementById('input');
// let storageKey = "items";
// function renderItem() {
//     itemDiv.innerHTML = null;
//     for (const [idx, item] of Object.entries(items)) {
//         let container = document.createElement('div');
//         let check = document.createElement('input');
//         check.setAttribute("type", 'checkbox');
//         container.appendChild(check)
//         let text = document.createElement('p');
//         text.style.display = 'inline'
//         text.style.marginRight = "10px"
//         let button = document.createElement('button');
//         button.textContent = "Delete";
//         text.textContent = item;
//         button.onclick = () => removeItem(idx);
//         container.appendChild(text);
//         container.appendChild(button)
//         itemDiv.appendChild(container);
//     }
// }
// renderItem()
// function addItem() {
//     let value = input.value;
//     if (value == "") {
//         alert("Please enter an Item");
//     }
//     else {
//         items.push(value);
//         renderItem();
//         input.value = ""
//         saveItem();
//     }
// }
// function removeItem(idx) {
//     items.splice(idx, 1);
//     renderItem();
//     saveItem();
// }
// function checked(idx) {
//     let item = items[idx];
//     item.style.textDecoration = "underline";
//     renderItem();
//     saveItem();
// }
// function saveItem() {
//     let itemsString = JSON.stringify(items);
//     localStorage.setItem(storageKey, itemsString);
// }
// function loadItem() {
//     let oldItems = localStorage.getItem(storageKey);
//     if (oldItems) items = JSON.parse(oldItems);
//     renderItem();

// }
// document.addEventListener('DOMContentLoaded', loadItem);
// ==========================================================================
// ==========================================================================
// ==========================================================================
// let menu = [
//     {
//         id: 1,
//         title: "Buttermilk Pancakes",
//         category: "breakfast",
//         price: 15.99,
//         img: "assets/images/5.jpg",
//         desc: " Lorem  mpora numquam vel sint quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 2,
//         title: "Godzilla Milksha",
//         category: "breakfast",
//         price: 615.99,
//         img: "assets/images/6.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
{
    id: 3,
        title: "Egg Attack",
            category: "breakfast",
                price: 615.99,
                    img: "assets/images/7.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 4,
        title: "Bacon Overflow",
            category: "lunch",
                price: 615.99,
                    img: "assets/images/8.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 5,
        title: "Quarantine Buddy",
            category: "lunch",
                price: 615.99,
                    img: "assets/images/9.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 6,
        title: "Steak Dinner",
            category: "dinner",
                price: 615.99,
                    img: "assets/images/10.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 7,
        title: "American Classic",
            category: "shakes",
                price: 615.99,
                    img: "assets/images/11.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 8,
        title: "Oreo Dream",
            category: "lunch",
                price: 615.99,
                    img: "assets/images/12.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 9,
        title: "Country Delight",
            category: "breakfast",
                price: 615.99,
                    img: "assets/images/13.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 10,
        title: "Diner Double",
            category: "lunch",
                price: 615.99,
                    img: "assets/images/14.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 11,
        title: "Diner Double",
            category: "dinner",
                price: 615.99,
                    img: "assets/images/f4.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
{
    id: 12,
        title: "Diner Double",
            category: "dinner",
                price: 615.99,
                    img: "assets/images/food1.jpg",
                        desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
},
]
let menuTitle = document.querySelector('.menu-title');
let menuPrice = document.querySelector('.menu-price');
let menuDesc = document.querySelector('.menu-desc');
let menuSrc = document.querySelector('.menu-img');
let container = document.querySelector('.cards')

let filterBtn = document.querySelectorAll('.filter-btn');
filterBtn.forEach(function (btn) {

    btn.addEventListener('click', function () {

        let filter = btn.dataset.id;
        let menuiItems = menu.filter(function (menus) {
            if (menus.category === filter) {
                return menus;
            }
        })
        if (filter == "all") {
            dispalyMenus(menu);
        }
        else (
            dispalyMenus(menuiItems)
        )
    })
})
window.addEventListener("DOMContentLoaded", function () {
    dispalyMenus(menu);
});
function dispalyMenus(menuItems) {
    let display = menuItems.map(function (i) {
        return ` <div class="menu-card">
            <div class="menu_img">
                <img class="menu-img" src="${i.img}" alt="">
            </div>
            <div class="card-content">
                <div class="menu_title">
                    <p class="menu-title">${i.title}</p>
                </div>
                <div class="menu_price">
                    <p class="menu-price">${i.price}</p>
                </div>
            </div>
            <div class="menu_desc">
                <p class="menu-desc">${i.desc}</p>
            </div>
        </div>`
    })
    display = display.join("");
    container.innerHTML = display;
}
// ==========================================================================
// ==========================================================================
// ==========================================================================
// let btn = document.querySelectorAll('.accordion-head');
// btn.forEach(function (button) {
//     let content = button.nextElementSibling;
//     button.addEventListener('click', function () {
//         btn.forEach(function (e) {
//             e.nextElementSibling.classList.remove('show')
//         })
//         content.classList.toggle('show');
//     })
// })
// ==========================================================================
// ==========================================================================
// ==========================================================================
// let showBtn = document.querySelector('.modal-btn');
// let closeBtn = document.querySelector('.modal-close');
// let modal = document.querySelector('.modal-container')
// showBtn.addEventListener('click', function () {
//     modal.style.display = "flex"
// })
// closeBtn.addEventListener('click', function () {
//     modal.style.display = "none"
// })
//==========================================================================
//==========================================================================
//==========================================================================
// let play = document.querySelector(".play")
// let pause = document.querySelector(".pause")
// let video = document.querySelector('.video')
// let data = document.querySelector('.video-play')
// let preloader = document.querySelector('.preloader');
// window.addEventListener('load', function () {
//     preloader.classList.add('preloader-hide')
// })
// play.addEventListener('click', function () {
//     if (!play.classList.contains('video-play')) {
//         video.play()
//         play.classList.add('video-play')
//     }
//     else {
//         play.classList.remove('video-play')
//         video.pause()

//     }
// })
//==========================================================================
//==========================================================================
//==========================================================================
// let btn = document.querySelectorAll('.tab-btn');
// let tabs = document.querySelectorAll('.tab');


// let tabHeader = document.querySelector('.tab-header');
// tabHeader.addEventListener('click', function (e) {
//     let id = e.target.dataset.id

//     if (id) {
//         btn.forEach(function (btn) {
//             btn.classList.remove('active');
//             e.target.classList.add('active');
//         })
//         tabs.forEach((val) => {
//             val.classList.remove('show');
//             console.log('sdfdsfdsfdsfds')
//         })
//         let element = document.getElementById(id);
//         element.classList.add('show');
//     }
// })
//==========================================================================
//==========================================================================
//==========================================================================
// const navbar = document.querySelector('.navbar');
// let navbarHeight = navbar.getBoundingClientRect().height;
// window.addEventListener('scroll', function () {
//     if (window.scrollY > navbarHeight) {
//         navbar.classList.add('nav-fixed');
//     }
//     else {
//         navbar.classList.remove('nav-fixed');
//     }
// })

// let linksContainer = document.querySelector('.links-container');
// let links = document.querySelector('.links');
// let scrollLinks = document.querySelectorAll('.slide-link');
// scrollLinks.forEach(function (data) {


//     data.addEventListener('click', function (e) {
//         scrollLinks.forEach(function (link) {
//             link.classList.remove('active')
//         })
//         e.preventDefault();
//         let id = e.target.getAttribute('href').slice(1);
//         let element = document.getElementById(id);
//         let position = element.offsetTop - navbarHeight;
//         window.scrollTo({
//             left: 0,
//             top: position,
//         })
//         console.log(position)
//         e.target.classList.add('active')
//     })
// })
//==========================================================================
//==========================================================================
//==========================================================================
let months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
]
let weeklydays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
let giveSection = document.querySelector('.giveaway h4');
let date = new Date(2024, 5, 3, 2, 3, 4);
let gyears = date.getFullYear();
let gmonth = date.getMinutes();
let gdays = date.getDay();
let ghours = date.getHours();
let gminutes = data.getMinutes();
uu

giveSection.textContent = `Giveaway On :  ${months[gmonth]} ${gyears} ${weeklydays[gdays]} ${ghours}:${gminutes}:`