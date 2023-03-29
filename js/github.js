import keys from "./keys.js";
export const getUserLastCommit = async (username)=>{
    try{
        let response = await fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `${keys.github_token}`}})
        let data = await response.json()
        let date = data[0].created_at
        return date
    }catch(error){
        console.log(error)
    }
}
export const wait = (num)=>{
    return new Promise((resolve, reject) => {
            setTimeout(resolve, num);
    });
}

