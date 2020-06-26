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
            size = "16px";
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

        this.state = { text, font, size, weight, style, decoration, color, 
            fonts: null, 
            weights: ["100", "300", "400", "500", "700", "900"],
            category: null,
            sizeClass: "",
            colorClass: ""
        };

        this.textarea = React.createRef();
    }

    componentDidMount() {
        const fonts = [];

        this.textarea.current.focus();
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(googleFonts => {                
                for (let i = 0; i < 40; i++) fonts.push(googleFonts.items[i]);
                this.setState({ fonts }); 
                
                let href = [`https://fonts.googleapis.com/css2?`, `&display=swap`];
                let string = "";

                for (let i = 0; i < fonts.length; i++) {
                    const font = fonts[i];
                    let family = font.family;

                    if (family === this.state.font) {
                        const { category } = font;
                        this.setState({ category });

                        const variants = font.variants.filter(weight => weight.length < 4 || weight === "regular");
                        const regularIdx = variants.indexOf("regular");
                        if (regularIdx !== null) variants[regularIdx] = "400";
                        if (family.split(" ").length > 1) family = family.split(" ").join("+");
                        i === 0 ? string += `family=${family}` : string += `&family=${family}`;
                        string += `:wght@${variants.join(";")}`;
                    }
                }

                const link = document.createElement("link");
                href = href.join(string);
                link.href = href;
                link.rel = "stylesheet";
                link.classList.add("google-fonts-link");
                document.getElementsByTagName("head")[0].appendChild(link);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { font, fonts } = this.state;

        if (prevState.font !== font) {
            let weights;
            let newHref = [`https://fonts.googleapis.com/css2?`, `&display=swap`];
            let string = "";

            for (let i = 0; i < fonts.length; i++) {
                let family = fonts[i].family;
                if (family === font) {
                    const { category } = fonts[i];
                    this.setState({ weights, category });

                    const variants = fonts[i].variants;
                    weights = variants.filter(weight => weight.length < 4 || weight === "regular");
                    const regularIdx = weights.indexOf("regular");
                    if (regularIdx !== null) weights[regularIdx] = "400";
                    if (family.split(" ").length > 1) family = family.split(" ").join("+");
                    i === 0 ? string += `family=${family}` : string += `&family=${family}`;
                    string += `:wght@${weights.join(";")}`;

                    break;
                }
            }

            newHref = newHref.join(string);
            const oldLink = document.querySelector(".google-fonts-link");
            oldLink.href = newHref;
        }
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
                                        onBlur={() => this.setState({ sizeClass: "" })}
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
                                        placeholder="000000"
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
                            <button onClick={() => handleSubmit("styles", this.state)}>
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