var welcomeUser = function welcomeUser(){
    var userName = prompt("What's your name?");

    if(userName === ''){
        welcomeUser();
    }
    else{
        alert('Enter the Black Box ' + userName);
    }
};

welcomeUser();

export default function welcomeUser(){
    var welcomeUser = function welcomeUser(){
        var userName = prompt('What is you\'re Designation User?');

        if(UserName === ''){
            welcomeUser();
        }
        else{
            // alert ('Welcome to my page, ' + userName);
            document.querySelector('#greeting').innerHTML = '<h3>Welcome to my test page, $(userName)</h3>';
        }
    };

    welcomeUser();
}


