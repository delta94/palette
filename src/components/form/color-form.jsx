import React from 'react';
import './color-form.css';

export default class ColorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ""
        };

        this.textarea = React.createRef();
    }

    componentDidMount() {
        this.textarea.current.focus();
    }

    render() {
        const { handleSubmit, handleClose } = this.props;
        const { color } = this.state;

        return (
            <div className="add-color">
                <div
                    className="colored"
                    style={{ backgroundColor: `#${color}` }}>
                </div>
                <div className="add-color-form">
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
                                ? (handleSubmit("colors", color), handleClose()) 
                                : null}
                        />
                        <i
                            className="fas fa-times"
                            onClick={handleClose}>
                        </i>
                    </div>
                    <span className="color-code-instruction">Press enter to save.</span>
                </div>
            </div>
        )
    }
}