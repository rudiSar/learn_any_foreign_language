import React from 'react';
import "../styles/footer.scss"

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className="footer__left">
                <p className={"logo"}>
                    Brit<span>lex</span>
                </p>
            </div>
            <div className="footer__right">
                <a href="#">Terms and Conditions</a>
                <span> • </span>
                <a href="#">Privacy Policy</a>
                <span> • </span>
                <a href="#">Cookie Policy</a>
            </div>
        </footer>
    );
};

export default Footer;