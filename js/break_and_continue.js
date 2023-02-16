let userPrompt = 0
while(true){
    userPrompt = parseFloat(prompt('Please enter a odd number between 1 and 49.'))
    if(userPrompt % 2 !== 0 && userPrompt > 0 && userPrompt <= 50)
    break;
}
for(let i = 1; i < 50; i+=2){
    if(i === userPrompt){
        console.log(`Yikes skipping number ${i}`)
        continue
    }
    console.log(`Here is an odd number ${i}`)
}
const loop = () => {
    let num = 0
    do{
        num = parseFloat(prompt('Number to skip:'))
        break
    } while(typeof num !== 'number' || num > 50 && num > 0);

    for(let i = 1; i < 50; i+=2){

         if(num === i){
            console.log(`skipping:${num}`)
            continue
        }
        console.log(`odd number: ${i}`)

    }

}