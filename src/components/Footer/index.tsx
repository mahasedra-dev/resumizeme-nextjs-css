import React from 'react';
import './footer.css'
const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p><a>Get in touch with our support team</a> if you have any question or want to leave some feedback. We’ll be happy to hear from you.</p>
            <div className='menu-container'>
                <div className='menu'>
                    Terms & Conditions
                </div>
                <div className='menu'>
                    Privacy Policy
                </div>
                <div className='menu'>
                    FAQ
                </div>
                <div className='menu'>
                    Contact Us
                </div>
            </div>
        </footer>
    );
}
export default Footer;