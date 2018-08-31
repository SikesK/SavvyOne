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
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;

document
    .querySelector('h1')
    .addEventListener(
        'click',
        function changeTheTitle(event){
            event.target.textContent = 'Welcome to my Page';
        }
    );
