//Write a function that accepts a string and returns the string reversed.

// const reverseString = (str) => {
//     let reverse = str.split("").reverse().join("");
//
//     return reverse;
// }
// console.log(reverseString('string'))

//Write a function that accepts a last name and a first name and returns the full name.

// const fullName = (lastName, firstName) =>{
//     let name = `${firstName} ${lastName}`;
//     return name
// }
// console.log(fullName('wrather', 'damian'))

// Write a function called `identity(input)` that takes in an argument called
// input and returns that input.

// const identity = (input) =>{
//     return input
// }

// Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.

// const getRandomNumber = (min, max) => {
//     return Math.random() * (max - min) + min;
// }

// Write a function called `first(input)` that returns the first character in the
// provided string.

// const first = (input) => {
//     let firstChar = input.charAt(0)
//
//     return firstChar;
// }

// ### IF / ELSE IF / ELSE

// #### Create a function called `getToDestination` which will help determine how a person can get to their destination!
//
//     It will accept 4 arguments and the parameter names are:
//
//     - age - the age of the rider
// - isInsured - a boolean telling the function if the rider has insurance
// - hasCar - a boolean describing if the rider has a car
// - canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
//
// ---
//     1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// 2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// 3. If the rider meets none of the above, they should call a friend for a ride!
//
//     This `getToDestination` should not return any value, but rather console log based on the conditions met.

//---
//     const getToDestination = (age, isInsured, hasCar, canGetRideshare) => {
//     let result = '';
//     if(age > 16 && isInsured == true && hasCar == true){
//          result='Use your car';
//     }else if(age < 16 && isInsured == false || hasCar==false && canGetRideshare == true){
//         result= 'Get rideshare';
//     }else {
//         result = 'call a friend';
//     }
//     console.log(result);
//     }



// #### getToDestination, part 2
//
// - Create a function called canGetRideshare() which will *RETURN* a boolean
// - It will determine if there are drivers nearby and the person has enough money for the ride
// - Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// - Call canGetRideshare() in the else if *after* !isLegalDriver &&...
// - Be sure to log to the user if they can or cannot get a rideshare
//
// BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
// - Consider this: What if mileage determined:
//     - If the rider has enough funds?
//     - If there is a driver close enough to service the rider?
//
//     ---
const canGetRideshare = () => {
    let nearbyDrivers = true
    let fundsForRides = true
    let result = false
    if(nearbyDrivers == true && fundsForRides ==true){
        result = true
        return result
    }

    return result
}

const getToDestination = (age, isInsured, hasCar) => {
    let result = '';
   if(age > 16 && isInsured == true && hasCar == true){
         result='Use your car';
    }else if(age < 16 && isInsured == false || hasCar==false && canGetRideshare == true){
       let rideshare = canGetRideshare()
        if(rideshare == true){
            return 'you can get rideshare'
        }else{
            return 'you cannot get rideshare'
        }

    }else {
        result = 'call a friend';
    }
    console.log(result);

}
// ### SWITCH STATEMENTS
//
// Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
// - This will involve multiple switch statements and functions
// - Orchestrate the statements in a central function that is responsible for calling and checking for errors
//     each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
//     ie: `function getBodyStyle(input){return input}`
//
//
//     - For user input, either use the browser's prompt/confirm/alert methods or mock up user input by hard-coding values
//
//
//     - The user should be able to enter their
//     - Body style (2D, 4D, etc)
//     - Vehicle type (sports car, sedan, compact, truck, etc)
//     - Vehicle color
//
//
//     - Each switch statement should confirm the user's choice in a logging statement
//
//
//     - The point of this is to validate what the user enters.
//     - If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
//         ie: default: `"error: " + vehicleType + " not recognized"`;
//         - If this occurs, call the related function again (see: recursion) until the user enters a correct choice
//         - HINT: a way you can check for errors is to see if the string contains the word "error"
//
//
//         - After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user