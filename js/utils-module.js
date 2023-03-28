export function formatToLocaleString(number, language='en', country='USD', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,{style: 'currency', currency: 'currency'})
}

export function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== 'string';
}

export function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)+min);
}

export function arrayOfRandomNumbers(lengthOfArray){
    const array = new Array(lengthOfArray)
    for(let i = 0; i < lengthOfArray; i++){
        let newRandNum = randomNumber(1,lengthOfArray+100)
        while(array.includes(newRandNum)){
            newRandNum = randomNumber(1,lengthOfArray+100)
        }
        array.push(newRandNum)
    }
    return array;
}

export function shuffleArray(array) {
    // Loop through the array from the last index to the first
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at index i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Return the shuffled array
    return array;
}
