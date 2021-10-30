const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    const date = new Date();
    const hours = date.getHours();
    if(hours>=4&hours<12){
        greeting.innerText = `Good Morning, ${username}`;
    }else if(hours>=12&hours<17){
        greeting.innerText = `Good Afternoon, ${username}`;
    }else if(hours>=17&hours<21){
        greeting.innerText = `Good Evening, ${username}`;
    }else{
        greeting.innerText = `Good Night, ${username}`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings();
}