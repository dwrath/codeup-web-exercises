import keys from "./keys.js";
export const getUserLastCommit = async (username)=>{
    try{
        let response = await fetch(`https://api.github.com/users/${username}/events/public`,
            {headers: {'Authorization': `${keys.github_token}`}})
        let data = await response.json()
        // let date = data[0].created_at
        return data[0]
    }catch(error){
        console.log(error)
    }
}
export const getCommitDate = async (owner, repo)=>{
    try{
        let response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`,
            {headers: {'Authorization': `${keys.github_token}`}})
        let data = await response.json
        return data
    }catch(error){
        console.log(error)
    }

}
export const wait = (num)=>{
    return new Promise((resolve, reject) => {
            setTimeout(resolve, num);
    });
}

export const renderGithubUser = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `
        <div class="img-wrapper">
            <img src="${user.actor.avatar_url}" alt="User image" class="avatar">
        </div>
        <h2>${user.actor.display_login}</h2>
        <a href="${user.actor.url}" target="_blank">Go to Profile</a>
        <button>Remove</button>
    `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove();
    });
    parent.appendChild(element);
}