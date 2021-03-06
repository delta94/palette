import React from 'react';
import './color-list.css';
import ColorForm from '../form/color-form';
import Color from './color';

export default class ColorList extends React.Component {
    state = { adding: false };

    componentDidMount() {
        window.addEventListener("click", e => {
            if (!e.target.closest(`[id=color-form]`) && !e.target.closest(`[id=add-color]`)) {
                this.setState({ adding: false });
            }
        });
    }

    handleClose = () => {
        this.setState({ adding: false });
    }

    render() {
        const { colors, handleDelete, handleSubmit } = this.props;

        return (
            <div className="color-list">
                {
                    colors.map(({ color }, i) =>
                        <Color
                            key={`color-${i}`}
                            color={color}
                            handleDelete={handleDelete}
                        />
                    )
                }
                {
                    this.state.adding
                        ? <ColorForm 
                            handleClose={this.handleClose}
                            handleSubmit={handleSubmit}
                        />
                        : <div 
                            className="add-color"
                            onClick={() => this.setState({ adding: true })}
                            id="add-color">
                            <i className="fas fa-plus"></i>
                        </div> 
                }
            </div>
        )
    }
}