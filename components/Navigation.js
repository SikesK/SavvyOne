

function Link(link){ // link should be blog, projects, home, etc. in the event link is home, skip it
    var href = '';

    if(link !== 'home'){ // should be not equal to sign here !== or alt =
        href = link;
    }
    
    return `
        <li>
            <a href="/${href}" data-navigo>${link}</a>
        </li>
    `;
}


export default function Navigation(state){
    var links = state
        .links
        .map(Link)
        .join('');

    // or .reduce(acc, link) => acc += Link(link), ''

    return `
        <div id="navigation"> 
            <ul class="nav-container">
                ${links}
            </ul>
        </div>
    `;
}


// for(let i = 0; i < state.links.length; i++){
//     links += Link(state.links[i]);
// }


// return `
// <div id="navigation">
//         <ul class="nav-container">
//             <li>
//                 <i class="material-icons" href="/">home</i>
//             </li>
//             <li>
//                 <a class="about" href="/">about</a>
//                     <ul>
//                         <li class="open-sans" class="about-drop">team</li>
//                         <li class="open-sans" class="about-drop">faq</li>
//                         <li class="open-sans" class="about-drop">contact</li>
//                     </ul>
//             </li>
//             <li>
//                 <a href="/projects">archive</a>
//             </li>
//             <li>
//                 <a href="">the cache</a>
//             </li>
//             <li>
//                 <a href="/">robot</a>
//             </li>
//             <li>
//                 <a href="/support">support</a>
//             </li>
//             <li>
//                 <input type="text" placeholder="Search">
//             </li>
//         </ul>
//     </div>
// `;
// }