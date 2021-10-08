import React from 'react';
import ReactDOM from 'react-dom';
import img from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <div className="bg-dark text-light font-monospace m-0 p-5">
            <div>
                <img className="Dev-Mentors-Logo" style={{width: '75px'}} src={img} alt="" />
                <h3 className="text-white-50">Dev Mentors'</h3>
                <div class="mx-5 px-5 d-flex justify-content-center">
                    <div class="row px-5 mx-5 gx-0 w-50">
                        <div class="col p-0 mx-auto w-50">
                        <SocialIcon url="https://www.facebook.com/tonmoytalukder2000" />
                        </div>
                    </div>
                </div>
                <h6 className="my-5"> &#169; 2021, All copyrights reserved by Tonmoy Talukder</h6>
            </div>
        </div>
    );
};

export default Footer;