import React from 'react';
import "../styles/start.scss"
import picGirl from "../images/pic_start.png"
import picLamp from "../images/icons/lamp.png"
import Button from "./ui_elements/Button";


const Start = () => {
    return (
        <section className={"start"}>
            <div className="start__left start-left">
                <div className="start-left__first-line">
                    <h1>Learn<br/>Any Foreign<br/>Language</h1>
                    <img src={picLamp} alt="lamp"/>
                </div>
                <p className={"start-left__second-line"}>With our teachers who write a program for
                    <br/>each student, you will be able to make your
                    <br/>first sketch after the first lesson.
                </p>
                <Button content={"Get started"} width={438} height={118} fontSize={36}/>
            </div>
            <div className="start__right">
                <img src={picGirl} alt="start"/>
            </div>
        </section>
    );
};

export default Start;