import React from 'react';
import './search-bar.css';

export default class SearchBar extends React.Component {
    state = { color: "" };

    render() {
        const { handleChange } = this.props;
        const { color } = this.state;

        return (
            <div className="search">
                <input
                    type="search"
                    onChange={handleChange}
                    placeholder="Search by color, font or text"
                    spellCheck="false"
                    onFocus={() => this.setState({ color: "0081ff" })}
                    onBlur={() => this.setState({ color: "e6e6e6" })}
                    style={{ border: `1px solid #${color}` }}
                />
            </div>
        )
    }
}