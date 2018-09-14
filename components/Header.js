export default function Header(state){
    return `
        <div id="header">
            <h2 class="boxed">${state.title}</h2>
        </div>
   `;
}

// fetch('https://jsonplaceholder.typicode.com/todo/1')
//     .then((response) => response.json())
//     .then((todo) => document.querySelector('h2').textContent = todo.title);