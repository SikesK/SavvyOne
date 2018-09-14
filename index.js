import axios from 'axios';
import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import * as State from './store';


var root = document.querySelector('#root');
var router = new Navigo(window.location.origin); // returns a router object
var newState = Object.assign({}, State);


function render(state){
    root.innerHTML = `
            ${Navigation(state[state.active])}  
            ${Header(state[state.active])}
            ${Content(state)}
            ${Footer()}
        `;

    router.updatePageLinks();
}

function handleNavigation(activePage){
    newState.active = activePage;
        
    render(newState); //eslint-disable-line 
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();

axios
    .get('https://jsonplaceholder.typicode.com/posts') // returns a promise
    .then((response) => {
        newState.posts = response.data;
        render(newState);
    });


// event.preventDefault();
// links = document.querySelectorAll('#navigation a');


// for not a function, it's a block
//     for(let i = 0; i < links.length; i++){
//         links[i].addEventListener(
//             'click',
//             handleNavigation
//         );
//     }
// }

//     while (i < links.length){
//         links[i].addEventListener(
//             'click',
//             handleNavigation
//         );

//         i++;
//     }
// }


// function render(state){
//     var i = 0;
//     var links;

// render(State); // kicks everything off

// router
//     .on('/', () => console.log('this is America' / 'the Home Page'))
    
    
//     .on('/', () => console.log('this is America' / 'the Home Page'))
//     .on('/archive', () => console.log('this is my blog'))
//     .on('/:archive', (stuff) => console.log('stuff'->, stuff))
//     .resolve();

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

// function handleNavigation(event){
//     var newState = State;

// var newState = Object.assign({}, State); // to get page shifting again
    
// newState.active = event.target.textContent;

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

// var State = {
//     'active': 'archive',
// 'about': {
//     'links': [ 'archive', 'the cache', 'robot', 'home' ],
//     'title': 'The Black Box'
// },
// 'archive': {
//     'links': [ 'about', 'the cache', 'robot', 'home' ],
//     'title': 'Welcome to my blog'
// },
// 'the cache': {
//     'links': [ 'about', 'archive', 'robot', 'home' ],
//     'title': 'check out my projects'
// },
// 'robot': {
//     'links': [ 'about', 'archive', 'the cache', 'home' ],
//     'title': 'contact me'
// },
// 'home': {
//     'links': [ 'about', 'archive', 'the cache', 'robot' ],
//     'title': 'the black box'
// }
// };


