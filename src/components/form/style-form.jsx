import React from 'react';
import "./style-form.css";

export default class StyleForm extends React.Component {
    constructor(props) {
        super(props);

        const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor arcu, luctus ut consequat in, maximus vitae orci.";

        this.state = {
            text: props.type === "create" ? defaultText : props.style.text,
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
        const { text, css } = this.state;

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
                        <select>
                            <option>Calibri</option>
                            <option>Lato</option>
                            <option>Open Sans</option>
                            <option>Sans Serif</option>
                            <option>Serif</option>
                            <option>Times New Roman</option>
                            <option>Verdana</option>
                        </select>
                        <input type="number" />
                        <i className="fas fa-bold"></i>
                        <i className="fas fa-italic"></i>
                        <i className="fas fa-underline"></i>
                        <i className="fas fa-palette"></i>
                        <input type="text" placeholder="#000000" />
                    </div>
                    <textarea
                        ref={this.textarea}
                        placeholder="Add text"
                        value={text}
                        onChange={e => this.handleChange(e, "text")}
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