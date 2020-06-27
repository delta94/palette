import React from 'react';

export default class CopyButton extends React.Component {
    state = { text: "Copy" };

    handleCopy = () => {
        this.setState({ text: "Copied!" });

        const code = this.props.type === "html" 
            ? document.querySelector("#html-code").innerText
            : document.querySelector("#css-code").innerText;

        const input = document.createElement("input");
        input.setAttribute("value", code);
        document.body.appendChild(input);
        input.select();
        const result = document.execCommand("copy");
        document.body.removeChild(input);

        setTimeout(this.returnText, 2500);
        return result;
    }

    returnText = () => {
        this.setState({ text: "Copy" });
    }    
    
    render() {
        const { text } = this.state;

        return (
            <button onClick={this.handleCopy}>
                {text}
            </button>
        )
    }
}