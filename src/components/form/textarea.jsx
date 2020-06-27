import React from 'react';
import './textarea.css';
import { Code } from './code';

export default class Textarea extends React.Component {
    constructor(props) {
        super(props);

        let text, font, size, weight, style, decoration, color;

        if (props.type === "create") {
            text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a diam eleifend mauris porta posuere a eu lectus. Suspendisse pellentesque diam tempor enim rutrum pretium.";
            font = "Roboto";
            size = "15px";
            weight = "400";
            style = "normal";
            decoration = "none";
            color = "000000";
        } else {
            text = props.style.text;
            font = props.style.font;
            size = props.style.size;
            weight = props.style.weight;
            style = props.style.style;
            decoration = props.style.decoration;
            color = props.style.color;
        }

        this.state = { text, font, size, weight, style, decoration, color, 
            fonts: null, 
            weights: null,
            category: null,
            sizeClass: "",
            colorClass: ""
        };

        this.textarea = React.createRef();
    }

    componentDidMount() {
        this.textarea.current.focus();

        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(googleFonts => {           
                const fonts = [];
                for (let i = 0; i < 40; i++) fonts.push(googleFonts.items[i]);
                this.setState({ fonts }); 

                for (let i = 0; i < fonts.length; i++) {
                    const font = fonts[i];
                    let { family, variants } = font;

                    if (family === this.state.font) {
                        const weights = variants.filter(weight => weight.length < 4 || weight === "regular");
                        const regularIdx = weights.indexOf("regular");
                        if (regularIdx !== null) weights[regularIdx] = "400";

                        const { category } = font;
                        this.setState({ category, weights });

                        break;
                    }
                }
        });

        let link = document.querySelector(".google-fonts-link");

        if (!link) {
            const href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
            link = document.createElement("link");
            link.rel = "stylesheet";
            link.classList.add("google-fonts-link");
            document.getElementsByTagName("head")[0].appendChild(link);
            link.href = href;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let { font, weight } = this.state;

        if (prevState.font !== font || prevState.weight !== weight) {
            const link = document.querySelector(".google-fonts-link");
            let href = link.href;
            if (font.split(" ").length > 1) font = font.split(" ").join("+");
            const splitIdx = href.indexOf("&display=swap");
            href = `${href.slice(0, splitIdx)}&family=${font}:wght@${weight}${href.slice(splitIdx)}`;
            link.href = href;
        }
    }

    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    }

    handleSubmit = (e, input) => {
        e.preventDefault();

        if (this.isValid()) {
            const { handleSubmit, style, closeEditForm } = this.props;
            handleSubmit("styles", input, style.id);
            closeEditForm();
        }
    }

    handleBlur = () => {
        const { size } = this.state;

        if ((size.length === 1 || size.length === 2)
            && (parseInt(size) > 0 || parseInt(size) < 100)) {
            this.setState({ size: size + "px" });
        }

        this.setState({ sizeClass: "" });
    }

    isValid = () => {
        const { color, size } = this.state;
        const px = size.slice(size.length - 2);
        const num = size.slice(0, size.length - 2);
        
        if (px !== "px" || num !== parseInt(num).toString()) {
            this.setState({ sizeClass: "error" });
            return false;
        } else if (!(color.length === 3 || color.length === 6)) {
            this.setState({ colorClass: "error" });
            return false;
        }
        
        return true;
    }

    render() {
        const { type, handleSubmit, closeCreateForm, closeEditForm, code } = this.props;
        const { text, font, size, weight, style, decoration, color, fonts, weights, sizeClass, colorClass } = this.state;

        return (
            <>
                {
                    code 
                        ? <Code style={this.state} />
                        : <form>
                            <div className="form-style">
                                <div>
                                    <i className="fas fa-font"></i>
                                    <select
                                        className="font-select" value={font}
                                        onChange={e => this.setState({ font: e.target.value })}>
                                        {
                                            fonts
                                                ? fonts.map((font, i) => (
                                                    <option key={`font-option-${i}`}>
                                                        {font.family}
                                                    </option>
                                                )) : null
                                        }
                                    </select>
                                </div>
                                <div>
                                    <span className="material-icons">
                                        format_size
                                    </span>
                                    <input
                                        className={`size-input ${sizeClass}`}
                                        value={size}
                                        onChange={e => this.setState({ size: e.target.value })}
                                        type="text"
                                        maxLength="4"
                                        spellCheck="false"
                                        onFocus={() => this.setState({ sizeClass: "focused" })}
                                        onBlur={this.handleBlur}
                                    />
                                </div>
                                <div>
                                    <i className="fas fa-bold"></i>
                                    <select
                                        value={weight}
                                        onChange={e => this.setState({ weight: e.target.value })}>
                                        {
                                            weights
                                                ? this.state.weights.map((weight, i) => (
                                                    <option key={`weight-option-${i}`}>
                                                        {weight}
                                                    </option>
                                                )) : null
                                        }
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
                                <div className={`color-input-form ${colorClass}`}>
                                    <i className="fas fa-palette"></i>
                                    #
                                    <input
                                        className="color-input"
                                        type="text"
                                        maxLength="6"
                                        spellCheck="false"
                                        value={color}
                                        onChange={e => this.setState({ color: e.target.value })}
                                        onFocus={() => this.setState({ colorClass: "focused" })}
                                        onBlur={() => this.setState({ colorClass: "" })}
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
                        </form>
                }
                {
                    type === "create"
                        ? <div className="cancel-save-btn">
                            <button onClick={closeCreateForm}>
                                Cancel
                            </button>
                            <button onClick={() => this.isValid() ? handleSubmit("styles", this.state) : null}>
                                Save
                            </button>
                        </div>
                        : <div className="cancel-save-btn">
                            <button onClick={closeEditForm}>
                                Cancel
                            </button>
                            <button onClick={e => this.handleSubmit(e, this.state)}>
                                Save
                            </button>
                        </div>
                }
            </>
        )
    }
}