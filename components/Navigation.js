

// function Link(link){ // link should be blog, projects, home, etc. in the event link is home, skip it
//     var href = '';

//     if(link !== 'home'){
//         href = link;
//     }
    
//     return `
//         <li>
//             <a href="/${href}" data-navigo>${link}</a>
//         </li>
//     `;
// }


// export default function Navigation(state){
//     var links = state
//         .links
//         .map(Link)
//         .join('');


//     return `
//         <div id="navigation">
//             <ul class="nav-container">
//                 ${links}
//             </ul>
//         </div>
//     `;
// }

export default function Navigation(state){
    return `
    <div id="navigation"> 
        <ul class="nav-container">
            <li class="nav-categories">
                <a class="boxed-top" href="/">The Black Box</a>
            </li>
            <li class="nav-categories">
                <a class="about" href="/about">about</a>
            </li>
            <li class="nav-categories">
                <a href="/archive">archive</a>
            </li>
            <li class="nav-categories">
                <a href="/thecache">the cache</a>
            </li>
            <li class="nav-categories">
                <a href="/support">support</a>
            </li>
        </ul>
        <ul class="social-top">
            <li>
                <i class="fab fa-twitter" fa-3x></i>
            </li>
            <li>
                <i class="fab fa-facebook" fa-3x></i> 
            </li>
            <li>
                <i class="fab fa-instagram" fa-3x></i>
            </li>
            <li>
                <i class="fab fa-youtube" fa-3x></i>
            </li>  
        </ul>
    </div> 
   `;
}