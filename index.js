import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

var State = {
    'active': 'archive',
    'about': {
        'links': [ 'archive', 'the cache', 'robot', 'home' ],
        'title': 'The Black Box'
    },
    'archive': {
        'links': [ 'about', 'the cache', 'robot', 'home' ],
        'title': 'Welcome to my blog'
    },
    'the cache': {
        'links': [ 'about', 'archive', 'robot', 'home' ],
        'title': 'check out my projects'
    },
    'robot': {
        'links': [ 'about', 'archive', 'the cache', 'home' ],
        'title': 'contact me'
    },
    'home': {
        'links': [ 'about', 'archive', 'the cache', 'robot' ],
        'title': 'the black box'
    }
};

var root = document.querySelector('#root');

function handleNavigation(event){
    var newState = State;
    
    newState.active = event.target.textContent;

    event.preventDefault();

    render(newState); //eslint-disable-line 
}

// function render(state){
//     var i = 0;
//     var links;

function render(state){
    var links;

    console.log('state in render ->', state);

    root.innerHTML = `
            ${Navigation(state[state.active])}  
            ${Header(state[state.active])}
            ${Content()}
            ${Footer()}
        `;

    links = document.querySelectorAll('#navigation a');


    // for not a function, it's a block
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click',
            handleNavigation
        );
    }


    //     while (i < links.length){
    //         links[i].addEventListener(
    //             'click',
    //             handleNavigation
    //         );

    //         i++;
    //     }
    // }
}

render(State); // kicks everything off


// for loop

// loop
// var i = 0;

// while(i < 10){
//     console.log('the number is ${i}');
//     i++;
//     i += 2;
// }


// var i = 0;
// var testArray = [ 'red', 'blue', 'green' ];

// while(i < 3){
//     console.log(testArray[i]);
//     i++;
// }
// while(i < testArray.length){
//     console.log(testArray[i]);
//     i++;
// }

// function handleNavigation(event){
//     event.preventDefault();
//     console.log(event.target.textContent);
// }


// document
//     .querySelector('#navigation a')
//     .addEventListener(
//         'click',
//         handleNavigation
//     );

// document
//     .querySelector('#navigation li:nth-child(2) a')
//     .addEventListener(
//         'click',
//         handleNavigation
//     );

// document
//     .querySelector('#navigation li:nth-child(3) a')
//     .addEventListener(
//         'click',
//         handleNavigation
//     );


// document
//     .querySelector('#navigation a')
//     .addEventListener(
//         'click',
//         (event) => {
//             event.preventDefault();
//             console.log(event.target.textContent);
//         }
//     );


/* inline notation */
// document
//     .querySelector('#header')
//     .addEventListener(
//         'click',
//         function changeTheTitle(event){
//             event.target.textContent = 'Welcome to my Page';
//         }
//     );

//     /* arrow notation */
// document
//     .querySelector('#header')
//     .addEventListener(
//         'click' (event) => {
//             event.preventDefault ();
//             event.target.innerHTML = 'name';
//         }

// document
//     .querySelector('p')
//     .addEventListener(
//         'click'
//         .handleTitleClick;
//     );

// document
//     .querySelector('#header')
//     .addEventListener(
//         'click',
//         function changeTheTitle(event){
//             /*or*/
//             (event) => {
//             var standard = 'The Black Box';
//             var funny = 'Welcome to my Page';

//             if(event.target.textContent === standard);
//                 event.target.textContent = funny;
//             }
//             else{
//                 event.target.textContent = standard;
//             }
//         }
//     );

// document
//     .querySelector('#header')
//     .addEventListener(
//         'click',
//         function changeTheTitle(event){
//             var standard = 'The Black Box';
//             var funny = 'Welcome to my Page';

//             if(event.target.textContent === standard);
//                 event.target.textContent = funny;
//             }
//             else{
//                 event.target.textContent = standard;
//             }
//         }
//     );

//     function changeTheTitle (callback) {
//         console.log ('The Black Box')
//     }


