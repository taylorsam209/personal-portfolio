import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css';


const Contact = () => {
        return (
            <div className='Contact'>
            <h1>Contact</h1>
            <h2>Want to Work Together?</h2>
            <h3>I'm always open to discussing new opportunities. Shoot me an email at taylorsam209@gmail.com</h3>
            <h4> Have a look at my profiles below:</h4>
            <ul>
                <a href="https://www.linkedin.com/in/taylor-sam/" target="blank" style={{textDecoration: "none", color: "white"}} >
                <li><i class="fab fa-linkedin"></i> LinkedIn</li></a>
                <a href="https://www.linkedin.com/in/taylor-sam/" target="blank" style={{textDecoration: "none", color: "white"}} >
                <li><i class="fab fa-github"></i> GitHub</li></a>
                <a href="https://codepen.io/taylorsam209/" target="blank" style={{textDecoration: "none", color: "white"}} >
                <li><i class="fab fa-codepen"></i> Code Pen</li></a>
            </ul>
            </div>
        );
    
};

export default Contact;