import React from 'react';
import './code.css';

export const Code = ({ ...props }) => {
    const { font, size, weight, style, decoration, color, category } = props.style;

    return (
        <div className="code-container">
            <div className="code-instruction">
                <button>Copy</button> and paste the code into your CSS file.
            </div>
            <div className="code">
                <p>{font ? `font-family: '${font}', ${category};` : null}</p>
                <p>{size ? `font-size: ${size};` : null}</p>
                <p>{weight ? `font-weight: ${weight};` : null}</p>
                <p>{style !== "normal" ? `font-style: ${style};` : null}</p>
                <p>{decoration !== "none" ? `text-decoration: ${decoration};` : null}</p>
                <p>{color ? `color: #${color};` : null}</p>
            </div>
        </div>
    )
};