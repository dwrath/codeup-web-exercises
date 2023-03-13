class Poster{
    constructor(data, target) {
        this.image = data.image;
        this.edition = data.edition;
        this.name = data.name;
        this.element = this.render(target)
    }
    render(target){
        let posterNode = document.createElement('div');
        posterNode.classList.add('poster-card');

        let html = `<div class="image-wrapper">
                        <img src="${this.image}"/>
                    </div>
                    <div class="card-bottom">
                    <p>${this.name}</p>
                        <p>${this.edition}</p>
                    </div>`
        posterNode.innerHTML = html;
        target.appendChild(posterNode);

        return posterNode;
    }
}

export default Poster;