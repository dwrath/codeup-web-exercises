import MovieCard from './components/MovieCard.js'
import Poster from './components/Poster.js'

function getMovies() {
    let movieArray = [
        {
            title: 'Black Panther',
            img: 'https://via.placeholder.com/150x300?',
            year: '2013'
        },
        {
            title: 'Captain America',
            img: 'https://via.placeholder.com/150x300?',
            year: '2008'
        }
    ];
    return movieArray;
}

let movieArray = getMovies();
movieArray.forEach(function(movie){
    let movieList = document.querySelector('#movieList');
    new MovieCard(movie, movieList);
});

function getPosters(){
    let posters = [
        {
            name: 'Black Panther',
            image: 'https://via.placeholder.com/200x400?',
            edition: 'limited'
        },
        {
            name: 'Captain America',
            image: 'https://via.placeholder.com/200x400?',
            edition: 'general'
        }
    ]
    return posters;
}
let postersArray = getPosters()

postersArray.forEach(poster =>{
    let posters = document.querySelector('#posters')
    new Poster(poster, posters);
})