const even = (num) => {
let i = 2
    while(i < num){
        let result = i*2
        i = result
        console.log(result)
    }

}

const seller = () => {
    let allCones = (Math.random() * (100 - 50) + 50).toFixed();
    do{
        let randNum = (Math.random() * (5-1)+1).toFixed()
        let conesSoldToCust = randNum
        let conesLeft = allCones
        if(allCones >= conesLeft){
            allCones -= conesSoldToCust
            console.log(`${randNum} cones sold...`)
        }else if(allCones < conesSoldToCust){
            console.log(`I cant sell ${randNum} i only have ${allCones}`)
            break;
        }else if(allCones == 0){
            console.log('Yay all cones sold')
        }

    }while(allCones !== 0)
}