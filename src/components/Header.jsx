import React from 'react';
import "../styles/header.scss"

const Header = () => {
    return (
        <header className={"header"}>
            <p className={"header__logo header-logo"}>
                Brit<span>lex</span>
            </p>
            <div className="header__links">
                <a href="#">Home</a>
                <a href="#">Skills</a>
                <a href="#">About Us</a>
                <a href="#">Pricing</a>
                <a href="#">Contacts</a>
            </div>
            <button className={"header__button"}>Let's Talk</button>
        </header>
    );
};

export default Header;