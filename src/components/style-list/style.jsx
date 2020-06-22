import React from 'react';
import './style.css';
import StyleForm from '../form/style-form';

export default class Style extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    closeEditForm = () => {
        this.setState({ editing: false });
    }

    render() {

        const { style, remove, handleSubmit } = this.props;

        return (
            <>
                {
                    this.state.editing
                        ?
                            <StyleForm 
                                type="edit" 
                                style={style} 
                                closeEditForm={this.closeEditForm} 
                                handleSubmit={handleSubmit}
                            />
                        :
                            <div className="style">
                                <div className="edit-delete-style">
                                    <button onClick={() => this.setState({ editing: true })}>
                                        Edit
                                    </button>
                                    <button onClick={() => remove(style.id)}>
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
                            </div>
                }
            </>
        )
    }
}