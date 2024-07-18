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
//     {
//         id: 3,
//         title: "Egg Attack",
//         category: "breakfast",
//         price: 615.99,
//         img: "assets/images/7.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 4,
//         title: "Bacon Overflow",
//         category: "lunch",
//         price: 615.99,
//         img: "assets/images/8.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 5,
//         title: "Quarantine Buddy",
//         category: "lunch",
//         price: 615.99,
//         img: "assets/images/9.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 6,
//         title: "Steak Dinner",
//         category: "dinner",
//         price: 615.99,
//         img: "assets/images/10.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 7,
//         title: "American Classic",
//         category: "shakes",
//         price: 615.99,
//         img: "assets/images/11.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 8,
//         title: "Oreo Dream",
//         category: "lunch",
//         price: 615.99,
//         img: "assets/images/12.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 9,
//         title: "Country Delight",
//         category: "breakfast",
//         price: 615.99,
//         img: "assets/images/13.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 10,
//         title: "Diner Double",
//         category: "lunch",
//         price: 615.99,
//         img: "assets/images/14.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 11,
//         title: "Diner Double",
//         category: "dinner",
//         price: 615.99,
//         img: "assets/images/f4.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
//     {
//         id: 12,
//         title: "Diner Double",
//         category: "dinner",
//         price: 615.99,
//         img: "assets/images/food1.jpg",
//         desc: " Lorem  mpora numquam vel  quibusdam consectetur necessitatibus delectus nostrum excepturi at officia incidunt?"
//     },
// ]
// let menuTitle = document.querySelector('.menu-title');
// let menuPrice = document.querySelector('.menu-price');
// let menuDesc = document.querySelector('.menu-desc');
// let menuSrc = document.querySelector('.menu-img');
// let container = document.querySelector('.cards')

// let filterBtn = document.querySelectorAll('.filter-btn');
// filterBtn.forEach(function (btn) {

//     btn.addEventListener('click', function () {

//         let filter = btn.dataset.id;
//         let menuiItems = menu.filter(function (menus) {
//             if (menus.category === filter) {
//                 return menus;
//             }
//         })
//         if (filter == "all") {
//             dispalyMenus(menu);
//         }
//         else (
//             dispalyMenus(menuiItems)
//         )
//     })
// })
// window.addEventListener("DOMContentLoaded", function () {
//     dispalyMenus(menu);
// });
// function dispalyMenus(menuItems) {
//     let display = menuItems.map(function (i) {
//         return ` <div class="menu-card">
//             <div class="menu_img">
//                 <img class="menu-img" src="${i.img}" alt="">
//             </div>
//             <div class="card-content">
//                 <div class="menu_title">
//                     <p class="menu-title">${i.title}</p>
//                 </div>
//                 <div class="menu_price">
//                     <p class="menu-price">${i.price}</p>
//                 </div>
//             </div>
//             <div class="menu_desc">
//                 <p class="menu-desc">${i.desc}</p>
//             </div>
//         </div>`
//     })
//     display = display.join("");
//     container.innerHTML = display;
// }
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
// let months = [
//     'january',
//     'february',
//     'march',
//     'april',
//     'may',
//     'june',
//     'july',
//     'august',
//     'september',
//     'october',
//     'november',
//     'december',
// ]
// let weeklydays = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
// ]
// let giveSection = document.querySelector('.giveaway h4');
// let date = new Date(2024, 4, 9, 11, 30, 0);
// let futureDate = date.getTime();
// console.log(futureDate)
// let gyears = date.getFullYear();
// let gmonth = date.getMinutes();
// let gdays = date.getDay();
// let ghours = date.getHours();
// let gminutes = date.getMinutes();
// let gseconds = date.getSeconds();
// let items = document.querySelectorAll('.timer h2')
// let timerSection = document.querySelector('.timer-sec')

// giveSection.textContent = `Giveaway On :  ${months[gmonth]} ${gyears} ${weeklydays[gdays]} ${ghours}:${gminutes}:${gseconds}`

// function countDown() {
//     let fullTime = new Date();

//     fullTime = fullTime.getTime();
//     let t = futureDate - fullTime;
//     let oneDay = 24 * 60 * 60 * 1000;
//     let oneHour = 60 * 60 * 1000;
//     let oneMinute = 60 * 1000;
//     let oneSecond = 1000;
//     let days = Math.floor(t / oneDay);
//     let hours = Math.floor((t % oneDay) / oneHour);
//     let minutes = Math.floor((t % oneHour) / oneMinute);
//     let seconds = Math.floor((t % oneMinute) / oneSecond);
//     let values = [days, hours, minutes, seconds];
//     // console.log(days, hours, minutes, seconds)\
//     function formate(item) {
//         if (item < 10) {
//             return item = `0${item}`
//         }
//         return item;
//     }
//     items.forEach(function (item, index) {
//         item.innerHTML = formate(values[index])
//     })
//     if (t < 0) {
//         clearInterval(countdown);
//         timerSection.innerHTML = `Sorry This is Expired`
//     }

// }
// let countdown = setInterval(countDown, 1000)
// countDown()
//==========================================================================
//==========================================================================
//==========================================================================\
// let items = [
//     'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.',
//     'Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.',
//     'Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.',
//     'Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.',
//     'Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably havent heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.',
//     'Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.',
//     'Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.',
//     'Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.',
//     'sdfdsf sdf dsf4fdgrt edtfgrtgrgrggr grhuygf hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.',

// ]
// let form = document.querySelector('.form');
// let input = document.querySelector('.input');
// let para = document.querySelector('.paragraph');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     let value = input.value;
//     let random = Math.floor(Math.random() * items.length);
//     value = parseInt(value)
//     if (isNaN(value) || value < 0 || value > 9) {
//         para.innerHTML = `<p>${items[random]}</p>`
//     }
//     else {
//         let data = items.slice(0, value);
//         data.map(function (data) {
//             para.innerHTML += `<p>${data}</p>`
//         })
//     }
// })
// ================================================================
// ============================ TO DO LIST ====================================
// ================================================================
// let input = document.querySelector('.input');
// let listitems = document.querySelector('.list-items');
// let form = document.querySelector('.form');
// let del = document.querySelector('.span');

// function data() {
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         let value = input.value;
//         if (value == " " || value == "") {
//             alert("Plase Enter Some Thing", "danger");
//         }
//         else {
//             let li = document.createElement("li");
//             let div2 = document.createElement("div");
//             div2.setAttribute("class", 'li-div');
//             div2.innerHTML = value;
//             li.appendChild(div2)
//             let span = document.createElement("span");
//             span.setAttribute('class', 'delete');
//             span.innerHTML = "X";
//             let span2 = document.createElement("span")
//             span2.innerHTML = "+"
//             span2.setAttribute("class", "edit");
//             let div = document.createElement("div");
//             div.appendChild(span2)
//             div.appendChild(span)
//             li.appendChild(div)
//             listitems.appendChild(li);
//         }
//         input.value = "";
//         saveItem()
//     })
// }
// listitems.addEventListener('click', function (e) {
//     if (e.target.tagName == "LI" || e.target.firstChild) {
//         e.target.classList.toggle('checked');
//         saveItem()
//     } else if (e.target.classList == "delete") {
//         e.target.parentElement.parentElement.remove();
//         saveItem()
//     }
//     else if (e.target.classList == "edit") {

//         let innerData = e.target.parentElement.parentElement.firstChild.innerText;
//         input.value = innerData;
//         e.target.parentElement.parentElement.remove();
//         saveItem();
//     }
// });

// function saveItem() {
//     localStorage.setItem("data", listitems.innerHTML);
// }
// function showData() {
//     listitems.innerHTML = localStorage.getItem("data");
// }
// data()
// showData()
// ================================================================================
// ================================================================================
// ================================================================================
// let slider = document.querySelectorAll('.slide');
// let nextBtn = document.querySelector('.next')
// let prevBtn = document.querySelector('.prev')
// let sliderBtn = document.querySelectorAll('.slide-btn');

// slider.forEach(function (value, index) {
//     value.style.left = `${index * 100}%`;
// })
// let counter = 0;
// nextBtn.addEventListener('click', function () {
//     counter++;
//     carousel();
// })
// prevBtn.addEventListener('click', function () {
//     counter--;
//     carousel();
// })

// function carousel() {
//     if (counter > slider.length - 1) {
//         counter = slider.length - 1
//     }
//     else if (counter < 0) {
//         counter = 0;
//     }
//     else {
//         slider.forEach(function (value) {
//             value.style.transform = `translateX(-${counter * 100}%)`;

//         })
//         sliderBtn.forEach(function (e) {
//             e.classList.remove('active');
//         })
//         sliderBtn[counter].classList.add('active');

//     }
// }
// =================================================================
// =================================================================
// =================================================================
// let carousel = document.querySelector('.carousel');
// let ItemWidth = document.querySelector('.carousel-item').offsetWidth;
// let isDragging = false, startX, startScrolleft;
// let arrowBtn = document.querySelectorAll('.arrowBtn');
// let carouselChildren = [...carousel.children];
// let itemPrevView = Math.round(carousel.offsetWidth / ItemWidth);

// carouselChildren.slice(-itemPrevView).reverse().forEach(function (e) {
//     carousel.insertAdjacentHTML("afterbegin", e.outerHTML);
// })
// carouselChildren.slice(0, itemPrevView).forEach(function (item) {
//     carousel.insertAdjacentHTML("beforeEnd", item.outerHTML);
// })
// arrowBtn.forEach(function (btn) {
//     btn.addEventListener('click', function () {
//         carousel.scrollLeft += btn.id === 'prev' ? -ItemWidth : ItemWidth;
//     })
// })
// let dragStart = (e) => {
//     isDragging = true
//     startX = e.pageX;
//     carousel.classList.add('dragging');
//     startScrolleft = carousel.scrollLeft;
// }

// let dragging = (e) => {
//     if (!isDragging) return;
//     carousel.scrollLeft = startScrolleft - (e.pageX - startX);
// }
// let dragStop = () => {
//     isDragging = false
//     carousel.classList.remove('dragging');
// }
// const autoPlay = () => {
//     if (window.innerWidth < 800) return;
//     timeoutId = setInterval(() => carousel.scrollLeft += ItemWidth, 2500);
// }
// autoPlay();
// carousel.addEventListener('mousedown', dragStart);
// carousel.addEventListener('mousemove', dragging);
// document.addEventListener('mouseup', dragStop);

// carousel.addEventListener("scroll", function () {
//     if (carousel.scrollLeft === 0) {
//         carousel.classList.add('transition');
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove('transition');
//     }
//     else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add('transition');
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove('transition');
//     }
// })
// =========================================================================
// =========================================================================
// =========================================================================
// let form = document.querySelector('.form');
// let inputs = document.querySelectorAll('.input');
// let div = document.querySelector('.input-div');
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     inputs.forEach(function (input) {
//         if (input.value == "") {
//             input.classList.add('error');
//             let text = document.createElement("p");
//             text.innerHTML = `${input.name} is required`
//             input.append(text)
//         }
//         else {
//             input.classList.remove('error');
//         }
//     })
// })
// ======================================================
// ======================================================
// ======================================================
// let questions = [
//     {
//         question: "What is the capital of France?",
//         answer: [
//             {
//                 text: "London",
//                 correct: false,
//             },
//             {
//                 text: "Paris",
//                 correct: true,
//             },
//             {
//                 text: "Berlin",
//                 correct: false,
//             },
//             {
//                 text: "Rome",
//                 correct: false,
//             }
//         ]
//     },
//     {
//         question: "Which of the following is the largest mammal?",
//         answer: [
//             {
//                 text: "Elephant",
//                 correct: false,
//             },
//             {
//                 text: "Blue Whale",
//                 correct: true,
//             },
//             {
//                 text: "Giraffe",
//                 correct: false,
//             },
//             {
//                 text: "Hippopotamus",
//                 correct: false,
//             },
//         ]
//     },
//     {
//         question: "Who wrote the famous novel To Kill a Mockingbird?",
//         answer: [
//             {
//                 text: "Harper Lee",
//                 correct: true,
//             },
//             {
//                 text: "F. Scott Fitzgerald",
//                 correct: false,
//             },
//             {
//                 text: "Mark Twain",
//                 correct: false,
//             },
//             {
//                 text: " J.K. Rowling",
//                 correct: false,
//             },
//         ]
//     },
//     {
//         question: "What is the chemical symbol for gold?",
//         answer: [
//             {
//                 text: "Au",
//                 correct: true,
//             },
//             {
//                 text: "Ag",
//                 correct: false,
//             },
//             {
//                 text: "Pt",
//                 correct: false,
//             },
//             {
//                 text: " Fe",
//                 correct: false,
//             },
//         ]
//     },
//     {
//         question: "In which year did the Titanic sink?",
//         answer: [
//             {
//                 text: "1905",
//                 correct: false,
//             },
//             {
//                 text: "1921",
//                 correct: false,
//             },
//             {
//                 text: " 1912",
//                 correct: true,
//             },
//             {
//                 text: " 1933",
//                 correct: false,
//             },
//         ]
//     },
// ];

// let cardHead = document.querySelector('.card-title');
// let cardBody = document.querySelector('.card-body');
// let nextBtn = document.querySelector('.next');

// let questionCount = 0;
// let score = 0;

// nextBtn.addEventListener('click', function (e) {
//     if (questionCount < questions.length) {
//         questionCount++;
//         if (questionCount < questions.length) {
//             showQuestion();
//         }
//     }
//     if (questionCount === questions.length) {
//         resetState();
//         cardHead.innerHTML = "Quiz Finished";
//         let result = document.createElement('h1');
//         result.innerHTML = `Your Correct Answers is ${score} out of ${questions.length}`
//         cardHead.appendChild(result);
//         nextBtn.innerHTML = "FINISH";
//     }
// })


// function startQuizz() {
//     questionCount = 0;
//     score = 0;
//     nextBtn.innerHTML = "NEXT";
//     showQuestion();
// }
// function showQuestion() {
//     resetState()
//     let currentQuestion = questions[questionCount];
//     let questionNo = questionCount + 1;
//     cardHead.innerHTML = `Question ${questionNo}: ${currentQuestion.question}`;
//     currentQuestion.answer.forEach(function (ans) {
//         let btn = document.createElement('button');
//         btn.innerText = ans.text;
//         btn.setAttribute('class', 'btn');
//         cardBody.appendChild(btn);
//         if (ans.correct) {
//             btn.dataset.correct = ans.correct;
//         }
//         btn.addEventListener('click', function (e) {
//             if (e.target.dataset.correct === "true") {
//                 score++;
//                 btn.classList.add('correct');
//             }
//             else {
//                 btn.classList.add('incorrect');
//             }
//             Array.from(cardBody.children).forEach(function (e) {
//                 if (e.dataset.correct === "true") {
//                     e.classList.add('correct');
//                 }
//                 e.disabled = true;
//             })
//             nextBtn.style.display = 'block'
//         })
//     })
// }
// function resetState() {
//     nextBtn.style.display = "none";
//     while (cardBody.firstChild) {
//         cardBody.removeChild(cardBody.firstChild);
//     }
// }
// startQuizz()

// =======================================================
// =======================================================
// =======================================================
// let questions = [
//     {
//         question: "What is the capital of France?",
//         answer: [
//             {
//                 text: "London",
//                 correct: false,
//             },
//             {
//                 text: "Paris",
//                 correct: true,
//             },
//             {
//                 text: "Berlin",
//                 correct: false,
//             },
//             {
//                 text: "Rome",
//                 correct: false,
//             }
//         ]
//     },
//     {
//         question: "Which of the following is the largest mammal?",
//         answer: [
//             {
//                 text: "Elephant",
//                 correct: false,
//             },
//             {
//                 text: "Blue Whale",
//                 correct: true,
//             },
//             {
//                 text: "Giraffe",
//                 correct: false,
//             },
//             {
//                 text: "Hippopotamus",
//                 correct: false,
//             },
//         ]
//     },
//     {
//         question: "Who wrote the famous novel To Kill a Mockingbird?",
//         answer: [
//             {
//                 text: "Harper Lee",
//                 correct: true,
//             },
//             {
//                 text: "F. Scott Fitzgerald",
//                 correct: false,
//             },
//             {
//                 text: "Mark Twain",
//                 correct: false,
//             },
//             {
//                 text: " J.K. Rowling",
//                 correct: false,
//             },
//         ]
//     },
//     {
//         question: "What is the chemical symbol for gold?",
//         answer: [
//             {
//                 text: "Au",
//                 correct: true,
//             },
//             {
//                 text: "Ag",
//                 correct: false,
//             },
//             {
//                 text: "Pt",
//                 correct: false,
//             },
//             {
//                 text: " Fe",
//                 correct: false,
//             },
//         ]
//     },
//     {
//         question: "In which year did the Titanic sink?",
//         answer: [
//             {
//                 text: "1905",
//                 correct: false,
//             },
//             {
//                 text: "1921",
//                 correct: false,
//             },
//             {
//                 text: " 1912",
//                 correct: true,
//             },
//             {
//                 text: " 1933",
//                 correct: false,
//             },
//         ]
//     },
// ];

// let cardHead = document.querySelector('.card-title');
// let cardBody = document.querySelector('.card-body');
// let nextBtn = document.querySelector('.next');


// let questionCount = 0;
// let score = 0;

// function startQuizz() {

//     questionCount = 0;
//     score = 0;
//     showQuizz();
// }
// function resetState() {
//     nextBtn.style.display = "none";
//     while (cardBody.firstChild) {
//         cardBody.removeChild(cardBody.firstChild);
//     }
// }
// function showQuizz() {
//     resetState();
//     let Currentquestion = questions[questionCount];
//     let questionNO = questionCount + 1;
//     cardHead.innerHTML = `Question ${questionNO}: ${Currentquestion.question}`;
//     Currentquestion.answer.forEach(function (data) {
//         let btn = document.createElement('button');
//         btn.classList.add('btn');
//         btn.innerHTML = data.text;
//         cardBody.appendChild(btn);
//         if (data.correct) {
//             btn.dataset.correct = data.correct;
//         }
//         btn.addEventListener('click', function (s) {
//             if (s.target.dataset.correct === "true") {
//                 score++;
//                 btn.classList.add('correct');
//             }
//             else {
//                 btn.classList.add('incorrect');
//             }
//             Array.from(cardBody.children).forEach(function (e) {
//                 if (e.dataset.correct === 'true') {
//                     e.classList.add('correct');
//                 }
//                 e.disabled = true;
//                 nextBtn.style.display = "block"
//             })
//         })
//     })
// }
// nextBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (questionCount < questions.length) {
//         questionCount++;
//         if (questionCount < questions.length) {
//             showQuizz();
//         }
//     }
//     else if (questionCount == questions.length) {
//         resetState()
//         nextBtn.innerHTML = "FINISH"
//         cardHead.innerHTML = "Quizz finished"
//         let h1 = document.createElement("h1");
//         h1.innerText = ` Your Total score is ${score} out of ${questions.length}`;
//         cardBody.appendChild(h1);
//     }
// })

// startQuizz()
// ==============================================================
// ==============================================================
// ==============================================================
// let row = document.querySelectorAll('.t-row');
// let NumBtn = document.querySelector('.n-btns');
// let btns = document.querySelectorAll('.btn');

// let length = Math.ceil(row.length / 2);
// // console.log(length);
// for (let i = 0; i < length; i++) {
//     let btn = document.createElement('button');
//     btn.classList.add('btn');
//     btn.innerHTML = i + 1;
//     NumBtn.appendChild(btn);
// }
// load(btns);
// console.log(btns.length)
// document.addEventListener('load', function () {
//     btns.forEach(e => {
//         console.log(e)
//         e.addEventListener('click', function () {
//             e.classList.add('active')
//             console.log(e)
//         })
//     })
// })
// ================================================================
// ======================== IMAGE GALLERY =========================
// ================================================================
// let img = document.querySelectorAll('.img');
// let imgView = document.querySelector('.img-view');
// let imgContainer = document.querySelector('.img-container');
// let crossBtn = document.querySelector('.cros-btn');
// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');
// let idx
// let images = document.querySelector('.images');
// img.forEach(function (e, index) {
//     let imgData = ` <img class="pre-img" src="${e.src}" alt="">`
//     images.innerHTML += imgData;
//     e.addEventListener('click', function () {
//         let preImg = document.querySelectorAll('.pre-img');
//         preImg.forEach(function (i) {
//             i.classList.remove('active');
//         })
//     })
//     // ===================== VISIBLE PAGE = MAIN CLICK ==================================
//     e.addEventListener('click', function () {
//         imgView.src = e.src;
//         imgContainer.style.visibility = "visible";
//         // console.log(images.children[index])
//         if (e.scr == imgData.src) {
//             images.children[index].classList.add('active')
//             // images.children.classList.add('active');
//         }
//         let preImg = document.querySelectorAll('.pre-img')
//         preImg.forEach(function (img, idx2) {
//             img.addEventListener('click', function () {
//                 preImg.forEach(function (i) {
//                     i.classList.remove('active');
//                 })
//             })
//             // ============================= RANDOM CLICKS ============================
//             img.addEventListener('click', function (e) {
//                 imgView.src = img.src;
//                 e.target.classList.add('active')
//                 index = idx2;
//             })
//         })

//         // ======================== NEXT BTN  =============================
//         next.addEventListener('click', function () {
//             preImg.forEach(function (e) {
//                 e.classList.remove('active')
//             })

//             if (index < img.length - 1) {
//                 index++
//                 imgView.src = img[index].src;
//                 images.children[index].classList.add('active');
//                 console.log(img[index]);
//             } else {
//                 images.children[0].classList.add('active');
//                 index = 0
//                 imgView.src = img[index].src;

//             }
//         })
//         // ======================= PREV BTN ===================================
//         prev.addEventListener('click', function () {
//             preImg.forEach(function (e) {
//                 e.classList.remove('active')
//             })

//             if (index > 1) {
//                 index--
//                 imgView.src = img[index].src;
//                 images.children[index].classList.add('active');
//                 console.log(img[index]);
//             } else {
//                 images.children[0].classList.add('active');
//                 index = img.length
//                 imgView.src = img[0].src;

//             }
//         })
//     });
// })
// crossBtn.addEventListener('click', function () {
//     imgContainer.style.visibility = 'hidden';
// })
// ================================================================
// ======================== IMAGE GALLERY End =====================
// ================================================================
// let cards = document.querySelectorAll('.card')
// let observer = new IntersectionObserver(entries => {
//     entries.forEach(function (ent) {
//         ent.target.classList.toggle('show', ent.isIntersecting);
//         if (ent.isIntersecting) observer.unobserve(ent.target)
//     })
// }, {
//     threshold: 1,
//     rootMargin: "200px",
// })
// cards.forEach(function (card) {
//     observer.observe(card);
// })
// ====================================================================
// ====================================================================
// ====================================================================
// const toast = document.querySelector('.toast');
// const btn = document.querySelector('.btn');
// const cross = document.querySelector('.cross');
// const progress = document.querySelector('.progress')

// btn.addEventListener('click', function () {
//     toast.classList.add('show');
//     progress.classList.add('active')
//     setTimeout(() => {
//         progress.classList.remove('active')
//         toast.classList.remove('show');
//     }, 5000);
// })
// cross.addEventListener('click', function () {
//     progress.classList.remove('active')
//     toast.classList.remove('show');
// })
// =====================================================================
// =====================================================================
// =====================================================================
// const field = document.querySelectorAll('.field');
// const input = document.querySelectorAll('.input');
// const error = document.querySelectorAll('.error');
// const form = document.querySelector('.form');
// const pass = document.querySelector('#password');
// const password = document.querySelector('.password-error');
// const passwordconf = document.querySelector('.confirm-password-error');
// const confpass = document.querySelector('#confirm-password');


// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     error.forEach(e => {
//         // console.log(e)
//         e.classList.remove('invalid')
//     })
//     console.log('jlkdsajflkdsajf')
//     for (let i = 0; i < input.length; i++) {
//         // console.log(input[i])
//         if (input[i].value == "") {
//             error[i].classList.add('invalid')
//         }
//     }
//     if (pass.value.length < 8) {
//         password.classList.add('invalid');
//     }
//     if (confpass.value != pass.value) {
//         passwordconf.classList.add('invalid');
//     }
// })
//
// ====================================================================
// ====================================================================
// ====================================================================
// let opn = document.querySelector('.span');
// let selects = document.querySelector('.selects');
// opn.addEventListener('click', () => {
//     selects.classList.toggle('open');
//     opn.classList.toggle('active')
// })
// ====================================================================
// ====================================================================
// ====================================================================
// let minute = document.querySelector('.minute');
// let second = document.querySelector(".second");
// let body = document.querySelector('.body');
// let hour = document.querySelector('.hour');
// let btn = document.querySelector('.btn');

// const timeFunction = () => {
//     let date = new Date();
//     let min = (date.getMinutes() / 60) * 360;
//     let sec = (date.getSeconds() / 60) * 360;
//     let hr = (date.getHours() / 12) * 360;
//     minute.style.transform = `rotate(${min}deg)`
//     second.style.transform = `rotate(${sec}deg)`
//     hour.style.transform = `rotate(${hr}deg)`
// }
// setInterval(timeFunction, 1000);
// btn.addEventListener('click', function () {
//     console.log('sfdsfd')
//     body.classList.toggle('dark')
//     if (btn.innerHTML == "Dark Mode") {
//         btn.innerHTML = "Light Mode"
//     }
//     else {
//         btn.innerHTML = "Dark Mode"
//     }
// })
// =========================================================
// =========================================================
// =========================================================
// let percent = document.querySelector('.percent');
// let value = 0;
// const card = document.querySelector('.active');
// let count = setInterval(() => {
//     value++;
//     percent.innerHTML = `${value}%`;
//     if (value >= 100) {
//         clearInterval(count);
//         card.style.background = "conic-gradient(white, white, white, white)";
//     }

// }, 100)
// ============================================
// ============================================
// ============================================
// const inp = document.querySelector('.input');
// const btn = document.querySelector('.show-password');
// btn.addEventListener('click', () => {
//     if (inp.type == "password") {
//         inp.type = "text";
//         btn.innerHTML = 'hide'
//     }
//     else {
//         inp.type = 'password';
//         btn.innerHTML = 'show'
//     }
// })
// =====================================================
// =====================================================
// =====================================================
// let stars = document.querySelectorAll('.star');

// stars.forEach(function (star, index1) {
//     star.addEventListener('click', function () {
//         console.log(index1)
//         stars.forEach(function (star2, index2) {
//             console.log(index2)
//             index1 >= index2 ? star2.classList.toggle('active') : star2.classList.remove('active');
//         })
//     })
// })

// stars.forEach(function (star, index1) {
//     star.addEventListener('mouseover', function () {
//         console.log(index1)
//         stars.forEach(function (star2, index2) {
//             console.log(index2)
//             index1 >= index2 ? star2.classList.add('active') : star2.classList.remove('active');
//         })
//     })
// })
// ===============================================================
// ===============================================================
// ===============================================================
// let boxes = document.querySelectorAll('.box');
// let image = document.querySelector('.image');
// boxes.forEach(function (box) {
//     box.addEventListener('dragover', function (e) {
//         e.preventDefault();
//         box.appendChild(image)
//         box.classList.add('hovered');
//     })
//     box.addEventListener('dragleave', function () {
//         box.classList.remove('hovered')
//     })
//     box.addEventListener('drop', function () {
//         box.classList.remove('hovered')
//     })
// })
// ================================================================
// ============================= JS Arrow functions ===============
// ================================================================
// fistFunction = (e, i) => {
//     let sum = e + i;
// }
// fistFunction(2, 8)

// function greeding(name, param = " Hello") {
//     console.log(param, ",", name);
// }
// greeding("someone", "hi");
// const axiRequest = require("axios");
// async function testing() {
//     let resp = await axiRequest('https://www.boredapi.con/api/activity');
//     console.log(resp);
// }
// testing();
// =================================================================
// =================================================================
// =================================================================
// const sec = document.querySelectorAll('.hidden');
// const ani = document.querySelectorAll('.animate');
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((ent) => {
//         if (ent.isIntersecting) {
//             ent.target.classList.add('show');
//         }
//         else {
//             ent.target.classList.remove('show');
//         }
//     });
// })
// ani.forEach(function (e) {
//     observer.observe(e);
// })
// sec.forEach(function (data) {
//     observer.observe(data);
// })
//=====================================================================
//=====================================================================
//=====================================================================
// let res = new Promise(function (res, rej) {
//     return res("This is first Function");
// })
// let p1 = res.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("This is the P1 function return");
//     })
// })
// let p2 = p1.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res(console.log('the last function'))
//     })
// })

// let [e, i, ...j] = [2, 4, 5, 5, 3, 2, 4, 2, 4, 5, 6]
// console.log(e, i, j);


// function fun(a, b, c) {
//     console.log(a, b, c)
// }
// console.log(name);

// let data = [21, 44, 22, 66, 652, 11];
// fun(...data);
// console.log(...data);
// for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
// }

// var name = "asdfasdf"
// function promiceData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(console.log(
//                 "This is resolved"
//             ))
//         }, 2000)
//     })

// }

// async function data() {
//     console.log('Loading...');
//     let res = await promiceData();
// }
// data()'

// let newData = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('This will be resolve')
//     }, 4000);
// })
// async function data() {
//     console.log('Wait...')
//     let res = await newData;
//     console.log(res);
// }

// data()
// let data = [4, 4, 3, 43, 4, 34, 3, 4, 3, 3, 43, 4]
// console.log(...data);
// console.log(data)

// =======================================================================
// =======================================================================
// =======================================================================
const addTask = document.querySelector('.add');
const input = document.querySelector('.input');
const mainContainer = document.querySelector('.main-content');
const check = document.querySelector('.check')
const taskText = document.querySelector('.para');
const task = document.querySelectorAll('task');
// const edit = document.querySelector('.edit');
let checktask;
let val;
function taskFun() {
    addTask.addEventListener('click', () => {
        val = input.value;
        if (val == "" || val == " ") {
            alert("Please Enter some text");
        }
        else {
            let data = ` <div class="task">
                        <div class="check">
                            <input type="checkbox" ce onchange="complete(this)" name="complete" class="check">
                            <p class="para">${val}</p>
                        </div>
                        <div class="action">
                            <div class="delete" onclick="taskDelete(this)">
                                <img src="https://img.icons8.com/?size=100&id=67884&format=png&color=000000" alt="">
                            </div>
                            <div class="edit" onclick="edit(this)">
                                <img src="assets/images/edit.png" alt="">
                            </div>
                        </div>
                    </div>`
            mainContainer.innerHTML += data;
            input.value = ""
        }
        save();
    })
}
taskFun();
taskDelete = (e) => {
    e.closest('.task').remove();
    save();
}
function edit(e){
    editData =  e.closest(".task").querySelector('p').textContent;
    input.value = editData;
    e.closest(".task").remove();
    save();
    // e.closest('task').remove();
    // save();
}
function complete(e) {
    if (e.checked) {
        let data = e.closest('.task');
        data.classList.add('complete');
        e.setItem = "changed";
        e.setAttribute('checked',true);
        save();
    }
    else {
        let data = e.closest('.task');
        data.classList.remove('complete');
        e.removeAttribute('checked', false);
        save();
    }
}
let saveData = "data"
function save() {
    localStorage.setItem(saveData, JSON.stringify(mainContainer.innerHTML));
}
function load() {
    let data = JSON.parse(localStorage.getItem(saveData));
    if (data) {
        mainContainer.innerHTML = data;
    }
}
load();
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
// const markWeight = 78;
// const markHeight = 2.69;

// let markBmi = markWeight / markHeight ** 2;
// markBmi = markWeight / (markHeight * markHeight);
// console.log(markBmi);

// const johnWeight = 92;
// const johnHeight = 1.95;

// let johnBmi = johnWeight / johnHeight ** 2;
// johnBmi = johnWeight / (johnHeight * johnHeight);

// console.log(johnBmi);

// let markHeighterBmi = markBmi > johnBmi;
// console.log(markHeighterBmi)
// // ==========================================

// if (markBmi > johnBmi) {
//     console.log(`Marks BMI ${markBmi} is greater then John Bmi ${johnBmi}`);
// }
// else {
//     console.log(`john's BMI ${johnBmi} is greater then Mark's Bmi ${markBmi}`);
// }

// ==================================================
// let dolphins = (96 + 108 + 89) / 3;
// dolphins = Math.floor(dolphins);
// console.log(dolphins);
// let koalas = (88 + 91 + 110) / 3;
// koalas = Math.floor(koalas);

// if (dolphins > koalas) {
//     console.log('Dolphins Is Winner');
// }
// else {
//     console.log('koalas is Winner');
// }


// const person = {
//     firstName: "Salamortand",
//     lastName: "Zillar",
//     job: "Camera Man",
//     dob: 1990,
//     dl: false,
//     friends: ['michel', 'peter', 'salmon'],
//     age: function () {
//         return 2024 - this.dob;
//     }
// }
// console.log(person)
// console.log(person.lastName);
// const personJob = "job";
// console.log(person.personJob);
// console.log(person[personJob]);
// console.log(person['job']);
// console.log(person.age());
// console.log(`${person.firstName} is a ${person.age()}-years old ${person.job}, and he has ${person.dl ? "a" : "not"} driving license `);
// const john = {
//     firstName: "John",
//     weight: 92,
//     height: 1.95,
//     calBmi: function () {
//         let bmi = this.weight / this.height ** 2;
//         bmi = this.weight / (this.height / this.height);
//         return bmi;
//     }
// }
// const mark = {
//     firstName: "Mark",
//     weight: 78,
//     height: 1.69,
//     calBmi: function () {
//         let bmi = this.weight / this.height ** 2;
//         bmi = this.weight / (this.height / this.height);
//         return bmi;
//     }

// }
// if (mark.calBmi() > john.calBmi) {
//     console.log(`The ${mark.firstName} is Higher BMI which is ${mark.calBmi()} and the ${john.firstName} BMI is ${john.calBmi()}`);
// }
// else {
//     console.log(`The ${john.firstName} is Higher BMI which is ${john.calBmi()} and the ${mark.firstName} BMI is ${mark.calBmi()}`)
// }
// const arr = ['2003', '1939', '2001', '2002'];
// let age = [];
// for (let i = 0; i < arr.length; i++) {
//     console.log(`The birth date is ${arr[i]}`);
//     age.push(2024 - arr[i])
//     console.log(age[i])
// }
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//     age.push(2024 - arr[i]);
//     console.log(age[i]);

// }
// let sum = 0;
// const arr = [22, 44, 55, 66, 66];
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);
// ==========================================
// ======= GUESS GAME =======================
// ==========================================

// const check = document.querySelector('.check');
// const score = document.querySelector('.score');
// const inputVal = document.querySelector('.input');
// const rounds = document.querySelector('.rounds');
// const start = document.querySelector('.start');
// const again = document.querySelector('.again');
// const number = document.querySelector('.guess-number');
// let round = 20;
// let highScore = 0;
// score.textContent = 'Higher Score is 0';
// rounds.textContent = `Rounds Lift: ${round}`;
// let random = Math.ceil(Math.random() * 10);
// check.addEventListener('click', function () {
//     const input = document.querySelector('.input').value;
//     if (round > 0) {
//         if (!input) {
//             console.log('The input is empty');
//         } else if (input == random) {
//             number.textContent = random;
//             start.textContent = `Correct Answer!!!`;
//             check.ariaDisabled = true;
//             highScore += random;
//             score.textContent = `Higher Score is ${highScore}`;
//             check.style.display = "none";
//             again.style.display = 'block';
//             inputVal.value = "";
//             again.addEventListener('click', function () {
//                 random = Math.ceil(Math.random() * 10);
//                 check.style.display = "block";
//                 again.style.display = 'none';
//                 number.textContent = `?`;
//                 inputVal.value = "";
//             })
//         }
//         else if (input > random) {
//             console.log(random);
//             start.textContent = `Too Hight`;
//             round--;
//             rounds.textContent = `Rounds Lift: ${round}`;
//             console.log('not matched');
//             inputVal.value = "";
//         } else if (input < random) {
//             start.textContent = `Too Low`;
//             round--;
//             rounds.textContent = `Rounds Lift: ${round}`;
//             inputVal.value = "";
//         }
//     } else {
//         start.textContent = `Game Over!!!`;
//     }
// })

// ===============================================
// ===============================================
// ===============================================
// const myFunction = function (name = "someOne", age =33){
//     console.log(name + "  " + age);
// }
// myFunction();
// const restorant = {
//     resName: "Italian Restro",
//     branch: 1,
//     mainMenu: ['pizza', 'burger', 'fries'],
// }
// console.log(...restorant.mainMenu);
// const newMenu = [...restorant.mainMenu, 'shawarma'];
// const allMenu = [...newMenu, 'Sandwitch'];
// console.log(allMenu);
// console.log(...allMenu);

// const str = "Asad";
// const lastName = "Khan"
// const letters = [...str, ' ', ...lastName]
// console.log(...letters);
// console.log(letters);
// console.log({ ...restorant, loc: "somewhere" });

// const data = [3, 5, 2, 6];
// function myData(a, b, ...c) {
//     console.log(a, b, ...c);
// }
// myData(1, 2, ...data);
// ===============================
// ===============================
// ===============================
// const gk = 'GoalKeeper';
// const fieldPlayers = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'];
// const gkT2 = 'GoalKeeper';
// const fieldPlayers2 = ['p21', 'p22', 'p23', 'p24', 'p25', 'p26', 'p27', 'p28', 'p29', 'p210'];

// const player1 = [gk, ...fieldPlayers];
// const player2 = [gkT2, ...fieldPlayers2];
// console.log(player1);
// console.log(player2);
// const AllPlayers = [...player1, ...player2]
// console.log(AllPlayers)
// const finalPlayers1 = [...player1, 'burshi', 'hudil', 'gidani'];

// const game = {
//     team1: "Bayern Munich",
//     team2: "Borrussis Dortmund",
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9thm 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.2,
//     }
// };
// const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);
// const AllPlayers = [...player1, ...player2]
// console.log(AllPlayers);

// const finalPlayers1 = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(finalPlayers1);
// const { team1, x, team2 } = game.odds;
// console.log(team1, x, team2)
// ================================================================
// let body = document.querySelector('.body');
// let start = document.querySelector('.start');
// let stop = document.querySelector('.stop');
// function randomColor() {
//     let hex = "01234656789ABCDEF"
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//     }
//     body.style.background = color;
// }
// let intervalId;
// function startInterval() {
//     intervalId = setInterval(randomColor, 1000);
// }
// function stopInterval() {
//     clearInterval(intervalId);
//     body.style.background = null;
// }
// start.addEventListener('click', function (e) {  
//     startInterval();
// });
// stop.addEventListener('click', stopInterval);
// try{
//     console.log("sfrdsfdsf");
// }catch{
    
// }

// =========================================
// =========================================
// =========================================

