const getMovie = async (id) => {
    try{
        let response = await fetch(`https://swapi.dev/api/people/${id}`)
        let data = await response.json()
        return data;
    } catch(error) {
        console.log(error)
    }
}

(async()=>{
    let luke = await getMovie(1)
    let num2 =await getMovie(2)
    console.log(luke)
    console.log(num2)
})()