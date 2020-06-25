import React from 'react';
import './color-list.css';
import ColorForm from '../form/color-form';
import Color from './color';

export default class ColorList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            adding: false
        };
    }

    handleClose = () => {
        this.setState({ adding: false });
    }

    render() {
        const { colors, handleDelete } = this.props;

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
                        ? 
                            <ColorForm 
                                handleClose={this.handleClose}
                                handleSubmit={this.props.handleSubmit}
                            />
                        :
                            <div className="add-color"
                                onClick={() => this.setState({ adding: true })}>
                                <i className="fas fa-plus"></i>
                            </div> 
                }
            </div>
        )
    }
}