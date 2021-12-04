export default function displayContact () {

    const content = document.querySelector('.content');
    const overlay = document.createElement('div');
    const info = document.createElement('div');
    info.textContent = 'Pentru rezervari, detalii privind rezervarile sau orice alta informatie, ne puteti contacta prin urmatoarele:'
    const telefoane = document.createElement('div');
    telefoane.textContent = 'Telefon';
    const number1 = document.createElement('div');
    number1.textContent = '0722334455';
    const number2 = document.createElement('div');
    number2.textContent = '0755667788';
    const email = document.createElement('div');
    email.textContent = 'Email: cazarerubinndorna@gmail.com';
    const leaveM = document.createElement('div');
    leaveM.textContent = 'Va multumim pentru vizita si va asteptam sa ne vizitati si in locatia noastra cat de curand!'

  
    telefoane.appendChild(number1).classList.add('number');
    telefoane.appendChild(number2).classList.add('number');
    overlay.appendChild(info).classList.add('info');
    overlay.appendChild(telefoane).classList.add('telefoane');
    overlay.appendChild(email).classList.add('email');
    overlay.appendChild(leaveM).classList.add('leaveM');
    content.appendChild(overlay).classList.add('overlay');
}