import Movie from './components/Movie.js'

const carousel = document.querySelector('.carousel');
const rightButton = document.querySelector('#left');
const leftButton = document.querySelector('#right');
const addMovie = document.querySelector('#add-movie')
let selectedIndex = 0;
let cellCount = 9;

function rotateCarousel() {
    let angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
}
rightButton.addEventListener('click', () => {
    selectedIndex--;
    rotateCarousel();
});

leftButton.addEventListener('click', () => {
    selectedIndex++;
    rotateCarousel();

});
addMovie.addEventListener('click', ()=>{
    document.querySelector('.overlay').classList.toggle('show');
})
document.querySelector('.cancel').addEventListener('click', function(event) {
    document.querySelector('.overlay').classList.toggle('show');
});

    async function getMovies(){
    try{
        let response = await fetch( `https://codeup-json-server.glitch.me/movies`)
        let data = await response.json()
        return data
    }catch (e) {
        console.log(e)
    }

}

(async ()=>{
    let movieArray = await getMovies();
    console.log(movieArray)
    document.querySelector('.content').style = 'display: flex'
    document.querySelector('#loading-icon').style = 'display:none'
    movieArray.forEach(function(movie){
        let movieList = document.querySelector('.content');
        new Movie(movie, movieList);
    });
})()


