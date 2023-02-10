 //1.For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.
 // let a = 1
 // let b = a++
 // let c = ++a
 //
 // console.log(a)
 // console.log(b)
 // console.log(c)

 // a=3
 // b=1
 // a=3


 // let d ='hello'
 // let e = false
 //
 // d++
 // e++
 // console.log(d) NaN
 // console.log(e) 1


 // let perplexed;
 // perplexed + 2;
 //
 // console.log(perplexed +2)NaN

 // let price = 2.7;
 // price.toFixed(2);
 // console.log(price)2.70
 //
 //
 // let price = "2.7";
 // price.toFixed(2);
 // console.log(price)runtime error

 // isNaN(0) false
 //
 // isNaN(1) false
 //
 // isNaN("")false
 //
 // isNaN("string")true
 //
 // isNaN("0")false
 //
 // isNaN("1")false
 //
 // isNaN("3.145")false
 //
 // isNaN(Number.MAX_VALUE)false
 //
 // isNaN(Infinity)false
 //
 // isNaN("true")true
 //
 // isNaN(true)false
 //
 // isNaN("false")true
 //
 // isNaN(false)false
 //
 // // to illustrate why the isNaN() function is needed:
 // console.log(NaN == NaN)false

//3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
// let days = 9
//  let price = 3.00
//  let amount =
//      (days*price).toFixed(2)
//  console.log(amount)
 //Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// let fb = 400
//  let goog = 380
//  let amz = 350
//
//  let totalfb = fb*10
//  let totalGoog = goog*6
//  let totalAmz = amz*4
//
//  console.log(totalAmz)
//  console.log(totalGoog)
//  console.log(totalfb)
// let classroom = 'empty'
//  let schedule = 'free'
//  if(classroom ===  'empty'&& schedule === 'free'){
//    console.log('scheduled')
//  }else{
//   console.log('scheduling conflict')
//  }
//  let person = premium
//  let items = 0
//  let expired = false
//
//  if(items >= 2 && expired == false){
//      if(person == 'premium'){
//          console.log('offer applied')
//      }else{
//          console.log('offer not applied')
//      }
//      console.log('offer applied')
//  }else{
//      console.log('offer not applied')
//  }

//4.
//  var username = 'codeup';
//  var password = 'notastrongpassword';
//
//  if(password.length >=5){
//   console.log('password too short')
//  }else {
//   console.log('good password')
//  }
//  if(username.length <20){
//   console.log('too big')
//  }else {
//   console.log('Good')
//  }
//
//  if(password.contains(username)){
//   console.log('contains username')
//  }
// password.trim()
//  username.trim()
