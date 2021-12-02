export default function displayMenu () {

const content = document.querySelector('.content');
const title = document.createElement('div');
title.textContent = 'Meniu';
const meniu = document.createElement('div');

const traditionale = document.createElement('div');
const specials = document.createElement('div');
const gratar = document.createElement('div');
const drinks = document.createElement('div');
traditionale.textContent = 'Traditionale';
specials.textContent = 'Specialitatile bucatarului';
gratar.textContent = 'Gratar';
drinks.textContent = 'Bauturi';


meniu.appendChild(traditionale).classList.add('traditionale');
meniu.appendChild(specials).classList.add('specials');
meniu.appendChild(gratar).classList.add('gratar');
meniu.appendChild(drinks).classList.add('drinks');
content.appendChild(title).classList.add('title');
content.appendChild(meniu).classList.add('meniu');
}