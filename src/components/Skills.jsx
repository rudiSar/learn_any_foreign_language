import React from 'react';
import "../styles/skills.scss"
import listen from "../images/listen.png"
import write from "../images/write.png"
import speak from "../images/speak.png"
import read from "../images/read.png"
import Button from "./ui_elements/Button";

const Skills = () => {
    return (
        <section className={"skills"}>
            <h2 className={"skills__title"}>Skills</h2>
            <div className="skills__grid skills-grid">
                <div className="skills-grid__speaking">
                    <img src={speak} alt="speak"/>
                    <h3>Speaking</h3>
                    <p>Improve your English skills and confidence.
                        Live classes and interactive lessons online.
                        20% extra free for a limited time only.
                        <br/><br/>
                        Learn English online and improve your
                        skills through our high-quality courses
                        and resources – all designed for adult language learners.
                    </p>
                    <Button content={"Learn more"} width={230} height={60} fontSize={18} borderRadius={5}/>
                </div>
                <div className="skills-grid__writing">
                    <img src={write} alt="write"/>
                    <h3>Writing</h3>
                    <p>One of the most important and extensive
                        areas of natural science, the science that
                        studies substances, also their composition.
                    </p>
                    <Button content={"Learn more"} width={230} height={60} fontSize={18} borderRadius={5}/>
                </div>
                <div className="skills-grid__reading">
                    <img src={read} alt="read"/>
                    <h3>Reading</h3>
                    <p>Perception and response actions of the user
                        resulting from the use and/or upcoming use
                        of the product, system or service.
                    </p>
                    <Button content={"Learn more"} width={230} height={60} fontSize={18} borderRadius={5}/>
                </div>
                <div className="skills-grid__listening listening">
                    <div className="listening__left">
                        <h3>Listening</h3>
                        <p>Here you can find activities to practise
                            your listening skills. Listening will help you
                            to improve your understanding
                        </p>
                        <Button content={"Learn more"} width={230} height={60} fontSize={18} borderRadius={5}/>
                    </div>
                    <div className="listening__right">
                        <img src={listen} alt="listen"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;