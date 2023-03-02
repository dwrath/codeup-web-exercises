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

// const getToDestination = (age, isInsured, hasCar) => {
//     let result = '';
//    if(age > 16 && isInsured == true && hasCar == true){
//          result='Use your car';
//     }else if(age < 16 && isInsured == false || hasCar==false && canGetRideshare == true){
//        let rideshare = canGetRideshare()
//         if(rideshare == true){
//             return 'you can get rideshare'
//         }else{
//             return 'you cannot get rideshare'
//         }
//
//     }else {
//         result = 'call a friend';
//     }
//     console.log(result);
//
// }

function make_squares(arr) {
    const n = arr.length;
    const squares = Array(n).fill(0);
    // TODO: Write your code here
    let highestSquaredIdx = n-1
    let left = 0
    let right = n -1

    while(left <= right){
        let leftSquare = arr[left] * arr[left],
            rightSquare = arr[right]* arr[right]

        if(leftSquare > rightSquare){
            squares[highestSquaredIdx] = leftSquare
            left +=1
        }else{
            squares[highestSquaredIdx] = rightSquare
            right -=1
        }
        highestSquaredIdx -= 1
    }
    return squares;
}


console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

//Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

function containsDuplicate(nums) {
    // TODO: Write your code here
    let set = new Set()

    for(let i=0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true
        }
        set.add(nums[i])
    }
    return false;
}

const nums1 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1)); // Expected output: false

const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums2)); // Expected output: true

const nums3 = [];
console.log(containsDuplicate(nums3)); // Expected output: false

const nums4 = [1, 1, 1, 1];
console.log(containsDuplicate(nums4)); // Expected output: true

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains
 * a street number (as a string) and
 * street name separated by a space characters,
 * and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/
const convertAddressToObject = (address) => {
    const indexOfSpace = address.indexOf(' ')
    let streetNum = address.substring(0, indexOfSpace)
    let streetName = address.substring(indexOfSpace+1, address.length-1)

    let addressObj = {streetNumber: streetNum, streetName: streetName }

    return addressObj;
}
console.log(convertAddressToObject('8646 Sunny Oaks'));

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

const minMax = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)

    return [max, min]
}
console.log(minMax([1, 2, 3, 4, 5]))