export default function Header(state){
    console.log('state in header -> ', state);
    
    return `
        <div id="header"
            <div class="header">   
                <h2 class="boxed">${state.title}</h2>
            </div>
        </div>
    `;
}