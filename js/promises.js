import{getUserLastCommit, wait, renderGithubUser, getCommitDate} from "./github.js";

(async ()=>{
    const user = await getUserLastCommit('dwrath')
    const usersGrid = document.querySelector('#userGrid');
    renderGithubUser(user, usersGrid)
    const commit = await getCommitDate('dwrath', 'codeup-web-exercises')
    // users.forEach(function(user){
    //     renderGithubUser(user, usersGrid);
    // });
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})()

