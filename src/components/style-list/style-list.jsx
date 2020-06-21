import React from 'react';
import Style from './style';
import './style-list.css';

export const StyleList = props => (
    <div className="style-list">
        {
            props.styles.map(({ style }, i) =>
                <Style
                    key={`style-${i}`}
                    style={style}
                    remove={props.remove}
                />
            )
        }
    </div>
)