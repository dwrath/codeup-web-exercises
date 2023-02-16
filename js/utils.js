function formatToLocaleString(number, language='en', country='USD', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,{style: 'currency', currency: 'currency'})
}

function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== 'string';
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)+min);
}