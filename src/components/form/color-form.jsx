import React from 'react';
import './color-form.css';

export default class ColorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            color: "", 
            message: "Press enter to save.",
            messageColor: ""
        };

        this.textarea = React.createRef();
    }

    componentDidMount() {
        this.textarea.current.focus();
    }

    handleSubmit() {
        const { handleSubmit, handleClose } = this.props;
        const { color } = this.state;

        if (color.length === 3 || color.length === 6) {
            handleSubmit("colors", color);
            handleClose();
        } else {
            this.setState({ 
                message: "Invalid color",
                messageColor: "#ff0000" 
            });
        }
    }

    render() {
        const { handleClose } = this.props;
        const { color, message, messageColor } = this.state;

        return (
            <div className="add-color">
                <div
                    className="colored"
                    style={{ backgroundColor: `#${color}` }}>
                </div>
                <div id="color-form" className="add-color-form">
                    <div className="color-code">
                        #
                        <input
                            ref={this.textarea}
                            type="text"
                            spellCheck="false"
                            placeholder="000000"
                            maxLength="6"
                            onChange={e => this.setState({ color: e.target.value })}
                            value={color}
                            onKeyDown={e => e.key === "Enter" 
                                ? this.handleSubmit()
                                : null}
                        />
                        <i
                            className="fas fa-times"
                            onClick={handleClose}>
                        </i>
                    </div>
                    <span 
                        className="color-code-instruction"
                        style={{ color: messageColor }}>
                        {message}
                    </span>
                </div>
            </div>
        )
    }
}