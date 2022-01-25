import React from 'react';
import "../styles/about.scss"
import pic from "../images/about.png"

const AboutUs = () => {
    return (
        <section className={"about"}>
            <div className="about__left">
                <h2>About Us</h2>
                <p>The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.</p>
            </div>
            <div className="about__right">
                <img src={pic} alt="about"/>
            </div>
        </section>
    );
};

export default AboutUs;