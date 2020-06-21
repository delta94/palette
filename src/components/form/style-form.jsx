import React from 'react';
import "./style-form.css";

export default class StyleForm extends React.Component {
    constructor(props) {
        super(props);

        const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

        this.state = {
            text: props.type === "create" ? defaultText : props.style.text,
            font: "Open Sans",
            size: "14px",
            weight: "400",
            style: "none",
            decoration: "none",
            color: "",
            css: false
        };

        this.textarea = React.createRef();
    }

    componentDidMount() {
        this.textarea.current.focus();
    }

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    render() {
        const { type, handleClose, handleSubmit, closeForm } = this.props;
        const { text, font, size, weight, style, decoration, color, css } = this.state;

        return (
            <div className="form-container">
                <div className="form-header">
                    <ul>
                        <li 
                            className={!css ? "active" : ""}
                            onClick={() => this.setState({ css: false })}>
                            {type === "create" ? "Add Style" : "Edit Style"}
                        </li>
                        <li className={css ? "active" : ""}
                            onClick={() => this.setState({ css: true })}>
                            Code
                        </li>
                        <li></li>
                    </ul>
                </div>
                <form>
                    <div className="form-style">
                        <select value={font}>
                            <option>Arial</option>
                            <option>Arial Black</option>
                            <option>Open Sans</option>
                            <option>Palatino</option>
                            <option>Sans Serif</option>
                            <option>Verdana</option>
                        </select>
                        <input 
                            value={size}
                            type="text" 
                            maxLength="5"
                            spellCheck="false"
                        />
                        <i className="fas fa-bold"></i>
                        <select value={weight}>
                            <option>100</option>
                            <option>200</option>
                            <option>300</option>
                            <option>400</option>
                            <option>500</option>
                            <option>600</option>
                            <option>700</option>
                            <option>800</option>
                            <option>900</option>
                        </select>
                        <i className="fas fa-italic"></i>
                        <i className="fas fa-underline"></i>
                        <i className="fas fa-strikethrough"></i>
                        <div className="color-input-form">
                            <i className="fas fa-palette"></i>
                            #
                            <input 
                                className="color-input" 
                                type="text" 
                                placeholder="000000" 
                                maxLength="6"
                                spellCheck="false"
                                value={color}
                            />
                        </div>
                    </div>
                    <textarea
                        ref={this.textarea}
                        placeholder="Add text"
                        value={text}
                        onChange={e => this.handleChange(e, "text")}
                        spellCheck="false"
                        style={{ 
                            fontFamily: font,
                            fontSize: size,
                            fontWeight: weight,
                            fontStyle: style,
                            textDecoration: decoration,
                            color: color
                        }}
                    />
                    <div className="cancel-save-btn">
                        {
                            type === "create"
                                ? 
                                    <button onClick={handleClose}>
                                        Cancel
                                    </button>
                                : 
                                    <button onClick={closeForm}>
                                        Cancel
                                    </button>
                        }
                        <button onClick={() => handleSubmit("styles", text)}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}