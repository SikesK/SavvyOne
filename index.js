import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

var state = {
    'title': 'The Black Box',
};


document
    .querySelector('#root')
    .innerHTML = `
        ${Navigation()}
        ${Header(state)}
        ${Content()}
        ${Footer()}
    `;

document
    .querySelector('#header')
    .addEventListener(
        'click',
        function changeTheTitle(event){
            event.target.textContent = 'Welcome to my Page';
        }
    );

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
