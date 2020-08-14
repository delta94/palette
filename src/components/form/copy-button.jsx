import React from "react";

import "./copy-button.css";

export default class CopyButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = { text: "Copy" };
    }

    componentWillUnmount() {
        this.setState({ text: "Copy" });
    }

    handleCopy = () => {
        this.setState({ text: "Copied!" });

        const code = this.props.type === "html" 
            ? document.querySelector("#html-code").innerText
            : document.querySelector("#css-code").innerText;

        const input = document.createElement("textarea");
        input.value = code;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    } 

    resetText = () => {
        const self = this;

        setTimeout(function() {
            self.setState({ text: "Copy" });
        }, 350);
    };
    
    render() {
        const { text } = this.state;

        return (
            <div 
                className="copy-button-background" 
                onClick={this.handleCopy}
                onMouseLeave={this.resetText}>
                <div className="copy-button">
                    {text}
                </div>
            </div>
        )
    }
}