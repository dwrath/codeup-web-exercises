class MovieCard {
    constructor(data, target){
        this.title = data.title;
        this.img = data.img;
        this.year = data.year;
        this.element = this.render(target);
    }
    render(target){
        let movieNode = document.createElement('div');
        movieNode.classList.add('movie-card');
        let html = `
              <div class="img-wrapper">
                <img src="${this.img}" />
              </div>
              <div class="card-bottom">
                <h2>${this.title}</h2>
                <p>${this.year}</p>
              </div>
        `;
        movieNode.innerHTML = html;
        target.appendChild(movieNode);
        return movieNode;
    }
    movieClick(){

    }
}

export default MovieCard;