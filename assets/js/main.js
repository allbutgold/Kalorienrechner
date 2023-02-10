
// Variables
const size  = document.querySelector('#size');
const age = document.querySelector('#age');
const weight = document.querySelector('#weight');
const activity = document.querySelector('#activity');
const male = document.querySelector('#male');
console.log(btn);




function kalories() {
    let grundUmsatz = '';

    if (male.checked)
        grundUmsatz =  664 + (13.7 * weight.value) + (5 * size.value) - (6.8 * age.value);
    else {
        grundUmsatz = 655.1 + (9.6 * weight.value) + (1.8 * size.value) - (4.7 * age.value);
    }
    document.querySelector('#grundUmsatz').innerHTML = `Grundumsatz: ${grundUmsatz.toFixed(2)}`;
    document.querySelector('#gesamtUmsatz').innerHTML = `Gesamtumsatz: ${(grundUmsatz * activity.value).toFixed(2)}`;
}
