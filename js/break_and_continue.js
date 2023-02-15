
const loop = () => {
    let num = 0
    do{
        num = parseFloat(prompt('Number to skip:'))

    } while(typeof num !== 'number');

    for(let i = 1; i < 50; i+=2){

         if(num === i){
            console.log(`skipping:${num}`)
            continue
        }
        console.log(`odd number: ${i}`)

    }

}