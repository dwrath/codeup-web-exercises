const getData = async () => {
    let posts = document.querySelector('#posts')
    try{
        let response = await fetch(`data/blog.json`)
        let data = await response.json()
        data.forEach((e, i) => {
            posts.innerHTML += `<tr><td>${e.title}</td><td>${e.content}</td><td>${e.categories}</td><td>${e.date}</td></tr>`
        })
    } catch(error) {
        console.log(error)
    }
}


(async()=>{
    let res = await getData()
    
})()