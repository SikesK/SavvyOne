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

var changeAndShout = function changeAndShout(name){
    console.log(name);
    if(name === 'Blah'){
        name = 'Alex';
    }
    else{
        name = 'Blah';
        console.log(name);
    }

    alert(name);
};

changeAndShout('hello world');