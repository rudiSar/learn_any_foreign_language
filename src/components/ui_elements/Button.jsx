import React from 'react';
import "./button.scss"

const Button = ({content, width, height, fontSize, borderRadius}) => {
    return (
        <button
            style={{
                width: `${width}px`,
                height: `${height}px`,
                fontSize: `${fontSize}px`,
                borderRadius:`${borderRadius}px`
            }}
            className={"simple-button"}
        >
            {content}
        </button>
    );
};

export default Button;