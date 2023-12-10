import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='FooterContainer'>
            <div className='FooterUpper'>
                <div className='Footerdiv'>
                    <h6>Class Categories</h6>
                    <p>Language</p>
                    <p>Cooking</p>
                    <p>Music</p>
                    <p>Art & Craft</p>
                    <p>Yoga</p>
                    <p>Academic</p>
                    <p>Back to Roots</p>
                    <p>Funtresting</p>
                </div>
                <div className='Footerdiv'>
                    <h6>Company</h6>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Term & Condition</p>
                    <p>Refund Policy</p>
                </div>
                <div className='Footerdiv'>
                    <h6>Learn</h6>
                    <p>All Classes</p>
                </div>
                <div className='Footerdiv'>
                    <h6>Teach</h6>
                    <p>Become A Teacher</p>
                </div>
                <div className='Footerdiv'>
                    <div className='FooterImaged'>
                        <img src='https://www.finplus.co.in/wp-content/uploads/2017/05/Sell-products-online-why-should-I-start-selling-online.jpg' alt='FooterImaged' />
                        <h5>sell your products with us</h5>
                    </div>
                </div>
            </div><hr />
            <div className='FooterSocial'>
                <div>
                    <p>&copy;Project 2021. All rights reserved.</p>
                </div>
                <div>
                    <p>Made with &#x1F493; by SimplePlan</p>
                </div>
                <div className='SocialIcon'>
                    <a href="/#" className="fa fa-facebook">.</a>
                    <a href="/#" className="fa fa-twitter">.</a>
                    <a href="/#" className="fa fa-linkedin">.</a>
                    <a href="/#" className="fa fa-instagram">.</a>
                    <a href="/#" className="fa fa-youtube">.</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
