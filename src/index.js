import _ from 'lodash';
import homePage from './home.js';
import './Styles/home.css';

window.onload = homePage();

//Creates the header's content and the buttons to switch tabs
const tabs = (function(){
 //Header's DOM
 const content = document.querySelector('.content')
const header = document.querySelector('.header');
const brand = document.createElement('div');
const home = document.createElement('button');
const contact = document.createElement('button');
const menu = document.createElement('button');
const headButtons = document.createElement('div');
const body = document.querySelector('body')
header.appendChild(brand).classList.add('brand');
brand.textContent = 'Restaurant Sura Brazilor';

headButtons.appendChild(home).classList.add('home');
home.textContent = 'Home';

headButtons.appendChild(contact).classList.add('contact');
contact.textContent = 'Contact';

headButtons.appendChild(menu).classList.add('menu');
menu.textContent = 'Menu';

header.appendChild(headButtons).classList.add('headButtons');


//Functionality for buttons that change the tabs
//Home
home.addEventListener('click', loadHome);

function loadHome() {
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }
    homePage();
}

//Menu
menu.addEventListener('click', loadMenu);

function loadMenu () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
}


})();


