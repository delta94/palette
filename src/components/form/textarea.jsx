import React from 'react';
import './textarea.css';
import { Code } from './code';

export default class Textarea extends React.Component {
    constructor(props) {
        super(props);

        let text, font, size, weight, style, decoration, color;

        if (props.type === "create") {
            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
            font = "Roboto";
            size = "14px";
            weight = "400";
            style = "normal";
            decoration = "none";
            color = "";
        } else {
            text = props.style.text;
            font = props.style.font;
            size = props.style.size;
            weight = props.style.weight;
            style = props.style.style;
            decoration = props.style.decoration;
            color = props.style.color;
        }

        this.state = { text, font, size, weight, style, decoration, color, fonts: null };
        this.textarea = React.createRef();
    }

    componentDidMount() {
        const fonts = [];

        this.textarea.current.focus();
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(googleFonts => {                
                for (let i = 0; i < 30; i++) {
                    fonts.push(googleFonts.items[i].family);
                }

                this.setState({ fonts: fonts }); 

                let href = [`https://fonts.googleapis.com/css2?`, `&display=swap`];
                let string = "";

                for (let i = 0; i < fonts.length; i++) {
                    let font = fonts[i];

                    if (font.split(" ").length > 1) font = font.split(" ").join("+");
                    
                    i === 0 ? string += `family=${font}` : string += `&family=${font}`;
                }

                href = href.join(string);

                let link = document.createElement("link");
                link.href = href;
                link.rel = "stylesheet";
                document.getElementsByTagName("head")[0].appendChild(link);
            });
    }

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    handleSubmit = (e, input) => {
        e.preventDefault();
        const { handleSubmit, style, closeEditForm } = this.props;
        handleSubmit("styles", input, style.id);
        closeEditForm();
    }

    render() {
        const { type, handleSubmit, closeCreateForm, closeEditForm, code } = this.props;
        const { text, font, size, weight, style, decoration, color, fonts } = this.state;

        if (code) {
            return <Code style={this.state} />
        } else {
            return (
                <form>
                    <div className="form-style">
                        <div>
                            <i className="fas fa-font"></i>
                            <select
                                className="font-select" value={font}
                                onChange={e => this.setState({ font: e.target.value })}>
                                {
                                    fonts
                                    ? 
                                        fonts.map((font, i) => (
                                            <option key={`font-option-${i}`}>
                                                {font}
                                            </option>
                                        ))
                                    : null
                                }
                            </select>
                        </div>
                        <div>
                            <span className="material-icons">
                                format_size
                            </span>
                            <input
                                className="size-input"
                                value={size}
                                onChange={e => this.setState({ size: e.target.value })}
                                type="text"
                                maxLength="4"
                                spellCheck="false"
                            />
                        </div>
                        <div>
                            <i className="fas fa-bold"></i>
                            <select
                                value={weight}
                                onChange={e => this.setState({ weight: e.target.value })}>
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
                        </div>
                        <div className="font-style-icon">
                            <i
                                className="fas fa-italic"
                                style={{ color: style === "italic" ? "#0081ff" : "" }}
                                onClick={() => this.setState({ style: style === "normal" ? "italic" : "normal" })}>
                            </i>
                            <i
                                className="fas fa-underline"
                                style={{ color: decoration === "underline" ? "#0081ff" : "" }}
                                onClick={() => this.setState({ decoration: decoration === "underline" ? "none" : "underline" })}>
                            </i>
                        </div>
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
                                onChange={e => this.setState({ color: e.target.value })}
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
                            color: "#" + color
                        }}
                    />
                    {
                        type === "create"
                            ?
                                <div className="cancel-save-btn">
                                    <button onClick={closeCreateForm}>
                                        Cancel
                                    </button>
                                    <button onClick={() => handleSubmit("styles", this.state)}>
                                        Save
                                    </button>
                                </div>
                            :
                                <div className="cancel-save-btn">
                                    <button onClick={closeEditForm}>
                                        Cancel
                                    </button>
                                    <button onClick={e => this.handleSubmit(e, this.state)}>
                                        Save
                                    </button>
                                </div>
                    }
                </form>
            )
        }
    }
}