import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: "Contact"
        }
    }
    render() {

        return(
            <div className='Contact'>Contact</div>
        )
    }
}

export default Contact;