export function displayGreeting() {
    const username = localStorage.getItem('username');
    if(username){
        $('#container').html(`<h4 id="user-greeting">Hello ${username}, please use the menu above to see your todos and events.</h4>`);
    } else {
        $('#container').html(`<h4 id="user-greeting">Hello User, please log in see your todos and events.</h4>`);

    }
}
