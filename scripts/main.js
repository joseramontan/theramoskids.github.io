/*
    JavaScript
        - is a full-pledge programming language used for providing interactivity to webpages.
        - is also an event-driven language where it can monitor user's activity and execute a set of code when a user behaved in a certain way.
    
    Interactivity in the context of web development means having the capability to respond on user's activity/behavior.
    
    A variable is possible to hold values with different data type:
        - String
        - Number
        - Boolean
        - Array
        - Object
*/

window.onload = function() {
    if(localStorage.getItem('name') == null) {
        setName();
    }
    else {
        document.querySelector("#greeting").textContent = "Hi, " + localStorage.getItem('name') + "!";
    }
};

function promptUser() {
    let name = null;
    while((name = prompt('Enter your name.').trim()) == null || name.length < 1);
    return name;
}

function setName() {
    localStorage.setItem('name', promptUser());
    document.querySelector("#greeting").textContent = "Hi, " + localStorage.getItem('name') + "!";
}

document.querySelector("button").onclick = function() {
    setName();
};