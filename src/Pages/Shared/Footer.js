import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'cover' }} className=" bg-neutral text-black-content py-10 mb-20">
            <div className='footer p-10'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover" href="http://localhost:3000">Branding</a>
                    <a className="link link-hover" href="http://localhost:3000" >Marketing</a>
                    <a className="link link-hover" href="http://localhost:3000" >Design</a>
                    <a className="link link-hover" href="http://localhost:3000" >Advertisement</a>
                </div>
                <div>
                    <span className="footer-title" href="http://localhost:3000" >Company</span>
                    <a className="link link-hover" href="http://localhost:3000">About us</a>
                    <a className="link link-hover" href="http://localhost:3000">Contact</a>
                    <a className="link link-hover" href="http://localhost:3000">Jobs</a>
                    <a className="link link-hover" href="http://localhost:3000">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover" href="http://localhost:3000">Terms of use</a>
                    <a className="link link-hover" href="http://localhost:3000">Privacy policy</a>
                    <a className="link link-hover" href="http://localhost:3000">Cookie policy</a>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <p>Copyright © 2022 - All right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;