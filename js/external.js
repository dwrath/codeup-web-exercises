// console.log("Hello from external JavaScript")
//
// alert("Welcome to my Website!")

// let color = prompt("What's your favorite color?")
// alert(`${color} is my favorite color too`)

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.
//     Finally, commit the changes to your git repository, and push to GitHub.

// let days = prompt('How many days will you rent for')
// let price = 3
// let customerPrice = days * price
//
// alert(`You will pay: ${customerPrice.toLocaleString("en-US",{style:"currency", currency:"USD"})}`)

// let googleHrs = prompt(`how many hours did you work for Google?`);
// let googlePay = 400 * googleHrs;
// let metaHrs = prompt(`how many hours did you work for meta?`);
// let metaPay = 350 * metaHrs;
// let amazonHrs = prompt(`how many hours did you work for amazon?`);
// let amazonPay = 380 * amazonHrs;
// let paycheck = googlePay + metaPay + amazonPay;
// let formattedPaycheck = paycheck.toLocaleString("en-US", {style:"currency", currency:"USD"});
// alert(formattedPaycheck);

// let scheduleConflicts = confirm(`Is schedule free?`)
// let maxClassSize = prompt(`what is the max class size?`);
// let currentClassSize = prompt(`how big is the class?`);
//
// alert(`Enroll status: ${scheduleConflicts && (currentClassSize < maxClassSize)}`);

// let minCartSize = prompt(`what is the minimum cart size?`);
// let cartSize = prompt(`how big is your cart`);
// let premiumMember = confirm(`Are you a premium member?`);
// let offerExpired = confirm(`is the offer expired?`);
//
//  alert(`Offer status: ${premiumMember || (cartSize >= minCartSize) && !offerExpired}`);
// console.log(canOfferApply);