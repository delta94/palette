import React from 'react';
import './style-form.css';
import Textarea from './textarea';

export default class StyleForm extends React.Component {
    state = { code: false, formClass: "" };
    
    componentDidMount() {
        this.setState({ formClass: "active" });
    }

    render() {
        const { type, handleSubmit, closeCreateForm, closeEditForm, style } = this.props;
        const { code, formClass } = this.state;

        return (
            <div className={`form-container ${formClass}`}>
                <div className="form-header">
                    <ul>
                        <li 
                            className={!code ? "active" : ""}
                            onClick={() => this.setState({ code: false })}>
                            {type === "create" ? "Add" : "Edit"}
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