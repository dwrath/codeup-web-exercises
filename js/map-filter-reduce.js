const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
console.log('filter:', users.filter( user => user.languages.length >= 3))

// TODO: Use .map to create an array of strings where each element is a user's email address
console.log('Map:', users.map(user => user.email))

// TODO: Use .reduce to get the total years of experience from the list of users.
//  Once you get the total of years you can use the result to calculate the average.
let totalYears =  users.reduce((total, user)=> {
    return (total + user.yearsOfExperience)}, 0)

let average = totalYears /users.length

console.log('Average:',average)

// TODO: Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((longest, user)=>
    longest.length < user.email.length ? user.email : longest
        , '')
console.log('Longest email:',longestEmail)

// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let listOfUserNames = users.reduce((acc, user)=>{
    return `${acc + user.name} `
}, '')
console.log('List of user names:', listOfUserNames)

// TODO: Use .reduce to get the unique list of languages from the list of users.
console.log('List of languages:', users.reduce((acc, user)=>
    acc.concat(user.languages)
, []).filter((language, index, array) =>
    array.indexOf(language) === index
))