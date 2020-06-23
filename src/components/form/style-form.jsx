import React from 'react';
import './style-form.css';
import Textarea from './textarea';

export default class StyleForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: false
        };
    }

    toggleCode() {
        this.setState({ code: !this.state.code });
    }
    
    render() {
        const { type, handleSubmit, closeCreateForm, closeEditForm, style } = this.props;
        const { code } = this.state;

        return (
            <div className="form-container">
                <div className="form-header">
                    <ul>
                        <li 
                            className={!code ? "active" : ""}
                            onClick={() => this.setState({ code: false })}>
                            {type === "create" ? "Add Style" : "Edit Style"}
                        </li>
                        <li className={code ? "active" : ""}
                            onClick={() => this.setState({ code: true })}>
                            Code
                        </li>
                        <li></li>
                    </ul>
                </div>
                <Textarea 
                    handleSubmit={handleSubmit}
                    closeCreateForm={closeCreateForm}
                    closeEditForm={closeEditForm}
                    type={type}
                    style={style}
                    code={code}
                />
            </div>
        )
    }
}