import Movie from './components/Movie.js'

//const carousel = document.querySelectorAll('.c1,.c2,.c3,.c4,.c5,.c6,.c7,.c8,.c9');
const carousel = document.querySelector('.carousel');
let cellCount = 9;
const rightButton = document.querySelector('#left');
const leftButton = document.querySelector('#right');
let selectedIndex = 0;
let currentAngle = 0;
const numSlides = carousel.length;
const minAngle = 0;
const maxAngle = (9 - 1) * 60;

function updateButtonStates() {
    rightButton.disabled = (currentAngle >= maxAngle);
    leftButton.disabled = (currentAngle <= minAngle);
}
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


