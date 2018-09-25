import axios from 'axios';
import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
// import Greeter from '.components/Greeter';
import Footer from './components/Footer';
import * as State from './store';
// import store from '/store/store';

// where is my greetings.js page? Put the below items on that page
// class Greeter {
// constructor (dispatch) {
//      this.input = document.createElement('input');
//      this.element = document.createElement('div');

//      this.input.placeholder = "What's Your Name?";
//      this.input.addEventListener(
//          'keyup',
//          () => dispatch(
//      (state) => Object.assign(
//         state,
//         {'greeting': this.input.value}
//     )
// )
// );
//      this.element.appendChild(this.input);
//   }

// render(parent){
//     parent.appendChild(this.element);
//  }
// }
// export default Greeter;


var root = document.querySelector('#root');
var router = new Navigo(window.location.origin); // returns a router object
var newState = Object.assign({}, State);
// var greeter = new Greeter(store.dispatch.bind(store));


// store = new Store(State);

// function render(state){
// var state = store.getState();
//     root.innerHTML = `
//             ${Navigation(state[state.active])}
//             ${Header(state[state.active])}
//             ${Content(state)}
//             ${Footer()}
//         `;

function render(state){
    root.innerHTML = `
            ${Navigation(state[state.active])}  
            ${Header(state[state.active])}
            ${Content(state)}
            ${Footer(state)} 
        `;
    // delete state from footer if you get an error
    // greeter.render(root);

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


// axios // asking for weather api request & to pull info to log to console
// .get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=da263e6ce0e5a8d3848228e1371d9e2e');
// .then((response) => {
//     store.dispatch((state) => {
//         state.weather = response.data;

//         return state;
//     });
// });

axios
    .get('https://api.github.com/users/sikesk/repos', {
        'headers': {
            'Authorization': 'token 4b6083b94bcd44fc305f6b617e644635789fb302' //may need to request for new tokens
            'Authorization': 'token ${process.env.GITHUB_API_KEY}` //may need to request for new tokens
        }
    })
    .then((response) =>
        store.dispath((state) => {
            state.repos = response.data;

            return state;
    });
 });
// pulling in your github api




// function handleNavigation(activePage){
//     store.dispatch ((state) => Object.assign(state, {'active': activePage}));
// }

// axios
//     .get('https://jsonplaceholder.typicode.com/posts') // returns a promise
//     .then((response) => {
//         store.dispatch(state) => {
//             Object.assign(state, {'posts': response.data}));
// });
// store.addListeners(render);


// store.addListeners(render);
//         }
//         newState.posts = response.data;

//         render(newState);
//     });


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


