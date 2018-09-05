export default function footer(){
    return `
    <div id='footer'>
        <div class="home-footer">
                <div class="social-footer">
                    <div>
                        <h2 class="boxed-bottom">The Black Box</h2>
                    </div>
                    <div class="follow-us-box">
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
                    </div>
                    <div>
                        <ul id="in-touch-footer">
                            <li>
                                <h2 id="stay-in-touch" class="open-sans">Stay In Touch</h2>
                            </li>
                            <li>
                                <input id="email-address" type="email" placeholder="Email Address"><h4 id="submit-footer">  Submit</h4>
                            </li>
                        </ul>
                    </div>
                </div>           
                <div id="grey-footer">
                    <ul>
                        <li class="open-sans">
                            <p class="ideas"><a>Post Ideas?</a>  Drop us an email at ideas@theblackbox.com.</p>
                        </li>
                        <li>
                            <h4 class="rights" class="open-sans"><i class="far fa-copyright"></i> The Black Box, All Rights Reserved</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}