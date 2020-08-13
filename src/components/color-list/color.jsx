import React from 'react';
import './color.css';

export default class Color extends React.Component {
    state = { show: false, copy: "Copy" };

    copy = () => {
        this.setState({ copy: "Copied!" });

        const input = document.createElement("input");
        input.setAttribute("value", this.props.color.value);
        document.body.appendChild(input);
        input.select();
        const result = document.execCommand("copy");
        document.body.removeChild(input);
        return result;
    };

    handleDelete = e => {
        const { color, handleDelete } = this.props;
        e.stopPropagation();
        handleDelete(color.id, "colors");
    }

    render() {
        const { show, copy } = this.state;
        const { color } = this.props;

        return (
            <div>
                <div 
                    className="colored"
                    style={{ backgroundColor: `#${color.value}` }}
                    onMouseEnter={() => this.setState({ show: true })}
                    onMouseLeave={() => this.setState({ show: false, copy: "Copy" })}>
                    {
                        show 
                        ? <div 
                            className="colored-dark"
                            onClick={this.copy}>
                            <i 
                                className="fas fa-times"
                                onClick={e => this.handleDelete(e)}>
                            </i>
                            <div className="color-copy">
                                <p>{copy}</p>
                            </div>
                        </div> 
                        : null
                    }
                </div>
                <div>
                    <p className="color-name">{color.name}</p>
                </div>
            </div>
        )
    }
}