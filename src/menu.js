export default function displayMenu () {

const content = document.querySelector('.content');
const title = document.createElement('div');
title.textContent = 'Meniu';
const meniuLine = document.createElement('div');
const meniu = document.createElement('div');
const rezerva = document.createElement('div');
rezerva.textContent = 'Suna pentru a rezerva la : 0722334455'

const traditionale = document.createElement('div');
const tradLine = document.createElement('div');
const specials = document.createElement('div');
const specialsLine = document.createElement('div');
const gratar = document.createElement('div');
const gratarLine = document.createElement('div');
const drinks = document.createElement('div');
const drinksLine = document.createElement('div');
traditionale.textContent = 'Traditionale';
specials.textContent = 'Specialitatile bucatarului';
gratar.textContent = 'Gratar';
drinks.textContent = 'Bauturi';


meniu.appendChild(traditionale).classList.add('traditionale');
traditionale.appendChild(tradLine).classList.add('line2');
meniu.appendChild(specials).classList.add('specials');
specials.appendChild(specialsLine).classList.add('line2');
meniu.appendChild(gratar).classList.add('gratar');
gratar.appendChild(gratarLine).classList.add('line2');
meniu.appendChild(drinks).classList.add('drinks');
drinks.appendChild(drinksLine).classList.add('line2');
content.appendChild(title).classList.add('title');
title.appendChild(meniuLine).classList.add('line')
content.appendChild(meniu).classList.add('meniu');
content.appendChild(rezerva).classList.add('rezerva')

//Adds items under 'Traditionale'
const tradArray = ['sarmale', 'ciorba de burta', 'tochitura cu mamaliga']
for (let i=0;i<= tradArray.length; i++) {

    let trad = document.createElement('div');
    trad.textContent = tradArray[i];
    traditionale.appendChild(trad).classList.add('trad');
}

//Adds items under 'Speciale'
const specialsArray = ['coaste in miere', 'cotlet la cuptor', 'piept de pui in sos cu ciuperci']
for (let i=0; i<= specialsArray.length;i++) {
    let special = document.createElement('div');
    special.textContent = specialsArray[i];
    specials.appendChild(special).classList.add('special');
}


const gratarArray = ['mici', 'pastrav', 'ceafa', 'cartofi'];

for (let i=0;i<= gratarArray.length;i++) {

    let gratare = document.createElement('div');
    gratare.textContent = gratarArray[i];
    gratar.appendChild(gratare).classList.add('gratare')
}

const drinksArray = ['bere', 'vin alb', 'vin rosu', 'vin rose', 'limonada', 'whiskey']

for (let i=0;i<= drinksArray.length;i++) {

    let drink = document.createElement('div');
    drink.textContent = drinksArray[i];
    drinks.appendChild(drink).classList.add('drink');
}
}