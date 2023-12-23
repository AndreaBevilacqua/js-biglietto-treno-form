console.log('JS OK')

/* 
1 - Recuper elementi dal dom 
2 - agigungo un event listener al button di conferma
3 - calcolo il prezzo del biglietto 
4 - verifico se devo applicare lo sconto
5 - Creare il prezzo finale
6 - compongo il biglietto
*/

const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');


const confirmButton = document.getElementById('create');

const ticketSection = document.getElementById('ticket-info');
const passengerElement = document.getElementById('passenger-name');
const typeElement = document.getElementById('ticket-type');
const priceElement = document.getElementById('ticket-price');


const pricePerKms = 0.21;
let rateName = 'Biglietto standard';

confirmButton.addEventListener('click', function (){
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;

    let price = pricePerKms * kmsValue;


    if(ageValue === 'minor') {
        rateName = 'Tariffa junior';
        price *= 0.8;
    } else if (ageValue === 'over'){
        rateName = 'Tariffa Senior';
        price *= 0.6;
    }


    passengerElement.innerText = nameValue;
    typeElement.innerText = rateName;
    priceElement.innerText = '$' + price.toFixed(2);

})