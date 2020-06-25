import React from 'react';
import './search-bar.css';

export const SearchBar = props => (
    <div className="search">
        <input
            type="search"
            onChange={props.handleChange}
            placeholder="Search by color, font or text"
            spellCheck="false"
        />
    </div>
)