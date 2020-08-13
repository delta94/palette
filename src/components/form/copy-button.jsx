import React from 'react';

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
    
    render() {
        const { text } = this.state;

        return (
            <button onClick={this.handleCopy}>
                {text}
            </button>
        )
    }
}