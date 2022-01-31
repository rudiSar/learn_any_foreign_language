import React from 'react';
import "../styles/about.scss"
import pic from "../images/about.png"

const AboutUs = () => {
    return (
        <section className={"about"}>
            <div className="about__left about-left">
                <h2 className={"about-left__title"}>About Us</h2>
                <p>The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.</p>
                <div className="about-left__stats stats">
                    <div className="stats__pupils stat">
                        <h3>800</h3>
                        <p>Pupils</p>
                    </div>
                    <div className="stats__teachers stat">
                        <h3>18</h3>
                        <p>Teachers</p>
                    </div>
                    <div className="stats__languages stat">
                        <h3>6</h3>
                        <p>Foreign languages</p>
                    </div>
                </div>
            </div>
            <div className="about__right">
                <img src={pic} alt="about"/>
            </div>
        </section>
    );
};

export default AboutUs;