const getData = async () => {
    let products = document.querySelector('#insertProducts')
    try{
        products.innerHTML = ''
        let response = await fetch(`data/inventory.json`)
        let data = await response.json()
        data.forEach((e, i) => {
            products.innerHTML += `<tr><td>${e.title}</td><td>${e.quantity}</td><td>${e.price}</td><td>${e.categories}</td></tr>`
        })
        return data;
    } catch(error) {
        console.log(error)
    }
}


(async()=>{
    let res = await getData()
    document.querySelector('.refresh').addEventListener('click', async function(){
        await getData()
    })
    console.log(res)
})()