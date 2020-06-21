import React from 'react';
import './search-bar.css';

export const SearchBar = props => (
    <div className="search">
        <input
            type="search"
            onChange={props.handleChange}
            placeholder="Search by font, color or text"
            spellCheck="false"
        />
    </div>
)