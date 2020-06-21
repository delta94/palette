import React from 'react';
import './color.css';

export default class Color extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { color } = this.props;
        return (
            <div 
                className="colored"
                style={{ backgroundColor: `#${color.value}` }}>
            </div>
        )
    }
}