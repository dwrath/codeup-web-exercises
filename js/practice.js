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

/********************/
const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];





const totalMileage = cars.reduce((acc, cars)=> acc + cars.mileage, 0)
/***********************************/
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using map that has all the usernames with a "? to each of the usernames
let arr = array.map(user=> ({...user, username:`${user.username}?`}))
console.log(arr)
//Filter the array to only include users who are on team: red
let fil = array.filter(user => {
    return user.team == 'red'
})
console.log(fil)
//Find out the total score of all users using reduce
let totalScore = array.reduce((acc, user)=> acc + user.score)
console.log(totalScore)
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


function max_area_islands_DFS(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let biggestIslandArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 1) { // only if the cell is a land
                // we have found an island
                biggestIslandArea = Math.max(biggestIslandArea, visit_island_DFS(matrix, i, j));
            }
        }
    }
    return biggestIslandArea;
}

function visit_island_DFS(matrix, x, y) {
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length)
        return 0; // return, if it is not a valid cell
    if (matrix[x][y] === 0)
        return 0; // return, if it is a water cell

    matrix[x][y] = 0; // mark the cell visited by making it a water cell

    let area = 1; // counting the current cell
    // recursively visit all neighboring cells (horizontally & vertically)
    area += visit_island_DFS(matrix, x + 1, y); // lower cell
    area += visit_island_DFS(matrix, x - 1, y); // upper cell
    area += visit_island_DFS(matrix, x, y + 1); // right cell
    area += visit_island_DFS(matrix, x, y - 1); // left cell

    return area;
}


console.log(max_area_islands_DFS([
    [1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0]
]));

//Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.
//
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

function pair_with_target_sum(arr, target_sum) {
    let storage = {};

    for(let i = 0; i < arr.length; i++){
       let match = target_sum - arr[i];

       if(match in storage){
           return [i, storage[match]];
       }
       storage[arr[i]] = i;
    }
    return [-1,-1];
}
console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

//Any image can be represented by a 2D integer array (i.e., a matrix) where each cell represents the pixel value of the image.
//
// Flood fill algorithm takes a starting cell (i.e., a pixel) and a color. The given color is applied to all horizontally and vertically connected cells with the same color as that of the starting cell. Recursively, the algorithm fills cells with the new color until it encounters a cell with a different color than the starting cell.
//
// Given a matrix, a starting cell, and a color, flood fill the matrix.

function flood_fill_DFS(matrix, x, y, newColor) {
    // TODO: Write your code here
    if(matrix[x][y] != newColor){
        fill(matrix,x,y, matrix[x][y], newColor)
    }
    return matrix;
}
function fill(matrix,x,y, oldColor, newColor){
    if(x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length){
        return;
    }
    if(matrix[x][y] != oldColor){
        return
    }
    matrix[x][y] = newColor;

    fill(matrix, x+1,y,oldColor, newColor);
    fill(matrix, x-1,y,oldColor, newColor);
    fill(matrix, x,y+1,oldColor, newColor);
    fill(matrix, x,y-1,oldColor, newColor);
}
console.log(flood_fill_DFS([
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0]
], 1, 3, 2));
console.log(flood_fill_DFS([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
], 3, 2, 5));


class Solution {
    // Function to check if given sentence is pangram
    checkIfPangram(sentence) {
        // TODO: Write your code here
        let set = new Set()

        for(let char of sentence.toLowerCase()){
            if(char.match(/[a-z]/i)){
                set.add(char)
            }
        }
        return set.size == 26;
    }
}

// Test cases
const sol = new Solution();

// Test case 1: "TheQuickBrownFoxJumpsOverTheLazyDog"
// Expected output: true
console.log(sol.checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));

// Test case 2: "This is not a pangram"
// Expected output: false
console.log(sol.checkIfPangram("This is not a pangram"));

// Test case 3: "abcdef ghijkl mnopqr stuvwxyz"
// Expected output: true
console.log(sol.checkIfPangram("abcdef ghijkl mnopqr stuvwxyz"));

// Test case 4: ""
// Expected output: false
console.log(sol.checkIfPangram(""));

// Test case 5: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Expected output: true
console.log(sol.checkIfPangram("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"));
