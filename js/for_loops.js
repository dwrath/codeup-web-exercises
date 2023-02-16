"use strict"
// const showMultiplyTable = (number) => {
//     let table = '';
//     for(let i = 1; i <=10; i++){
//         let damath = parseInt(number)*i
//         let output =`${number} x ${i} = ${damath}\n`
//         table += output
//     }
//     return table
// }
const showMultiplicationTable = (number) => {
    for(let i = 1; i <= 10; i++){

        console.log(number * i);
    }
}
// for(let i=0; i < 10; i++){
//     let myRandomNumber = randomNumber(20,200)
//     if(myRandomNumber % 2 ===0){
//         console.log(`${myRandomNumber} is even`)
//     }else{
//         console.log(`${myRandomNumber} is odd`)
//     }
// }
const randNum = ()=>{
    for(let i = 0; i < 10; i++){
        let randomNum = (Math.random() * (200 - 20) + 20).toFixed();
        randomNum % 2 === 0 ? console.log(`${randomNum} is even`) : console.log(`${randomNum} is odd`)
    }
}
// for(let i = 0; i < 9; i++){
//     let output = `${i++}`;
//     for(let j = i; j > 0; j--){
//         let moNumbers = `${i+1}`
//         output += moNumbers
//     }
//     console.log(output)
//
// }
// for(let i = 0; i < 10;i++){
//     let output =`${i}`.repeat(i)
//     console.log(output)
// }


const ramp = () => {
    for (let i = 1; i < 10; i++) {
        let row = i
        for (let j = 1; j <= row; j++) {
            console.log(`${i}`)
        }
    }
}

// for(let i = 100; i > 0; i -= 5){
//     console.log(i)
// }
const subtract = (num) => {
    while(num !== 0){
        num -= 5
        console.log(num)
    }
}
