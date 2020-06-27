import React from 'react';
import './code.css';
import CopyButton from './copy-button';

export const Code = ({ ...props }) => {
    const { font, size, weight, style, decoration, color, category } = props.style;

    return (
        <div className="code-container">
            <div className="code-instruction-code">
                <div className="code-instruction">
                    <CopyButton type="html" /> and paste the code into the {"<head>"} of your html.
                </div>
                <div className="code" id="html-code">
                    {`<link href="https://fonts.googleapis.com/css2?family=`}
                    <span>{font.split(" ").join("+") + `:wght@` + weight}</span>
                    {`&display=swap" rel="stylesheet">`}
                </div>
            </div>
            <div className="code-instruction-code">
                <div className="code-instruction">
                    <CopyButton type="css" /> and paste the code into your CSS file.
                </div>
                <div className="code" id="css-code">
                    <p>{font ? `font-family: '${font}', ${category};` : null}</p>
                    <p>{size ? `font-size: ${size};` : null}</p>
                    <p>{weight ? `font-weight: ${weight};` : null}</p>
                    <p>{style !== "normal" ? `font-style: ${style};` : null}</p>
                    <p>{decoration !== "none" ? `text-decoration: ${decoration};` : null}</p>
                    <p>{color ? `color: #${color};` : null}</p>
                </div>
            </div>
        </div>
    )
};