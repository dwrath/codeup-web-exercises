"use strict"
const showMultiplicationTable = (number) => {
    for(let i = 1; i <= 10; i++){
        console.log(number * i);
    }
}
const randNum = ()=>{
    for(let i = 0; i < 10; i++){
        let randomNum = (Math.random() * (200 - 20) + 20).toFixed();
        randomNum % 2 === 0 ? console.log(`${randomNum} is even`) : console.log(`${randomNum} is odd`)
    }
}
const ramp = () => {
    for (let i = 1; i < 10; i++) {
        let row = i
        for (let j = 1; j <= row; j++) {
            console.log(`${i}`)
        }
    }
}

const subtract = (num) => {
    while(num !== 0){
        num -= 5
        console.log(num)
    }
}
