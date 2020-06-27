import React from 'react';
import './style.css';
import StyleForm from '../form/style-form';

export default class Style extends React.Component {
    state = { editing: false };

    closeEditForm = () => {
        this.setState({ editing: false });
    }

    render() {
        const { style, handleDelete, handleSubmit } = this.props;
        const { editing } = this.state;

        return (
            <>
                {
                    editing
                        ? <StyleForm 
                            type="edit" 
                            style={style} 
                            closeEditForm={this.closeEditForm} 
                            handleSubmit={handleSubmit}
                        />
                        : <div className="style">
                            <div className="edit-delete-style">
                                <button onClick={() => this.setState({ editing: true })}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(style.id, "styles")}>
                                    Delete
                                </button>
                            </div>
                            <span
                                style={{
                                    fontFamily: style.font,
                                    fontSize: style.size,
                                    fontWeight: style.weight,
                                    fontStyle: style.style,
                                    textDecoration: style.decoration,
                                    color: "#" + style.color
                                }}>
                                {style.text}
                            </span>
                            <div className="style-label">
                                {`${style.font} — ${style.size}, #${style.color}`}
                            </div>
                        </div>
                }
            </>
        )
    }
}