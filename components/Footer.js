// if messed up take out state
export default function footer(state){
    return `
        <div id="footer"> 
            <div class="black-footer">        
                <ul class="social-footer">
                    <li>
                        <h2 class="boxed-bottom">The Black Box</h2>
                    </li>
                </ul>
                <ul class="footer-buttons">
                    <li>
                        <h4 class="follow-us" class="open-sans">Follow Us</h4>
                    </li>
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
                <ul class="email-footer">
                    <li>
                        <h2 class="open-sans">Stay In Touch</h2>
                    </li>
                    <li>
                        <input class="email-address" type="email" placeholder="Email Address">
                    </li>
                    <li>
                        <h4 class="open-sans" class="submit-footer">  Submit</h4>
                    </li>
                </ul> 
            <div> 
            </div>    
                <div class="grey-footer">
                    <ul class="open-sans" class="grey-footer-text">
                        <li>
                            <p class="ideas"><a>Post Ideas?</a>  Drop us an email at ideas@theblackbox.com.</p>
                        </li>
                    </ul>
                    <ul class="open-sans" class="grey-footer-text">
                        <li>
                            <h4 class="rights"><i class="far fa-copyright"></i> The Black Box, All Rights Reserved</h4>
                        </li>
                    </ul>
                </div> 
            </div>  
        </div> 

    `;
}

// import weather from './weather';

// export default function footer(state){
//     return `
//     <div id = "footer">
//         <div class="container">
//             this is the bottom of my page
//             ${weather(state.weather)}
//         </div>
//     </div>
//  `;
// }
