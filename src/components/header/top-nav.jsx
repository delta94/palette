import React from 'react';
import './top-nav.css';
import SearchBar from './search-bar';

export const TopNav = props => (
    <nav className="top-nav-container">
        <nav className="top-nav">
            <div className="logo rainbow">
                <i className="fas fa-paint-brush"></i>
                palette
            </div>
            <SearchBar handleChange={props.handleChange} />
            <div className="icons">
                <a
                    href="https://juneseong.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="far fa-folder"></i>
                </a>
                <a
                    href="https://github.com/juneseong/palette"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/juneseong"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                    href="https://angel.co/u/june-seong"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-angellist"></i>
                </a>
            </div>
        </nav>
    </nav>
)