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

    closeForm = () => {
        this.setState({ editing: false });
    }

    render() {

        const { style, remove } = this.props;

        if (this.state.editing) {
            return <StyleForm type="edit" style={style} closeForm={this.closeForm} />;
        } else {
            return (
                <div className="style">
                    <div className="edit-delete-style">
                        <button onClick={() => this.setState({ editing: true })}>
                            edit
                        </button>
                        <button onClick={() => remove(style.id)}>
                            delete
                        </button>
                    </div>
                    {style.text}
                </div>
            )
        }
    }
}