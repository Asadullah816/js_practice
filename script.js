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
//         result.innerHTML = `You Correct Answers is ${score} out of ${questions.length}`
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
let questions = [
    {
        question: "What is the capital of France?",
        answer: [
            {
                text: "London",
                correct: false,
            },
            {
                text: "Paris",
                correct: true,
            },
            {
                text: "Berlin",
                correct: false,
            },
            {
                text: "Rome",
                correct: false,
            }
        ]
    },
    {
        question: "Which of the following is the largest mammal?",
        answer: [
            {
                text: "Elephant",
                correct: false,
            },
            {
                text: "Blue Whale",
                correct: true,
            },
            {
                text: "Giraffe",
                correct: false,
            },
            {
                text: "Hippopotamus",
                correct: false,
            },
        ]
    },
    {
        question: "Who wrote the famous novel To Kill a Mockingbird?",
        answer: [
            {
                text: "Harper Lee",
                correct: true,
            },
            {
                text: "F. Scott Fitzgerald",
                correct: false,
            },
            {
                text: "Mark Twain",
                correct: false,
            },
            {
                text: " J.K. Rowling",
                correct: false,
            },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: [
            {
                text: "Au",
                correct: true,
            },
            {
                text: "Ag",
                correct: false,
            },
            {
                text: "Pt",
                correct: false,
            },
            {
                text: " Fe",
                correct: false,
            },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answer: [
            {
                text: "1905",
                correct: false,
            },
            {
                text: "1921",
                correct: false,
            },
            {
                text: " 1912",
                correct: true,
            },
            {
                text: " 1933",
                correct: false,
            },
        ]
    },
];

let cardHead = document.querySelector('.card-title');
let cardBody = document.querySelector('.card-body');
let nextBtn = document.querySelector('.next');


let questionCount = 0;
let score = 0;

function startQuizz() {

    questionCount = 0;
    score = 0;
    showQuizz();
}
function resetState() {
    nextBtn.style.display = "none";
    while (cardBody.firstChild) {
        cardBody.removeChild(cardBody.firstChild);
    }
}
function showQuizz() {
    resetState();
    let Currentquestion = questions[questionCount];
    let questionNO = questionCount + 1;
    cardHead.innerHTML = `Question ${questionNO}: ${Currentquestion.question}`;
    Currentquestion.answer.forEach(function (data) {
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerHTML = data.text;
        cardBody.appendChild(btn);
        if (data.correct) {
            btn.dataset.correct = data.correct;
        }
        btn.addEventListener('click', function (s) {
            if (s.target.dataset.correct === "true") {
                score++;
                btn.classList.add('correct');
            }
            else {
                btn.classList.add('incorrect');
            }
            Array.from(cardBody.children).forEach(function (e) {
                if (e.dataset.correct === 'true') {
                    e.classList.add('correct');
                }
                e.disabled = true;
                nextBtn.style.display = "block"
            })
        })
    })
}
nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (questionCount < questions.length) {
        questionCount++;
        if (questionCount < questions.length) {
            showQuizz();
        }
    }
    else if (questionCount == questions.length) {
        resetState()
        nextBtn.innerHTML = "FINISH"
        cardHead.innerHTML = "Quizz finished"
        let h1 = document.createElement("h1");
        h1.innerText = ` Your Total score is ${score} out of ${questions.length}`;
        cardBody.appendChild(h1);
    }
})

startQuizz()