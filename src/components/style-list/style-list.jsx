import React from 'react';
import Style from './style';
import './style-list.css';

export default class StyleList extends React.Component {
    componentDidUpdate(prevProps) {
        const { styles }  = this.props;
       
        if (styles.length > 0) {
            if (styles !== prevProps.styles) {
                const fonts = {};
                
                for (let i = 0; i < styles.length; i++) {
                    const { style } = styles[i];
                    const font = style.font;
                    const weight = style.weight;

                    if (!fonts[font]) fonts[font] = [];
                    if (!fonts[font].includes(weight)) fonts[font].push(weight);
                    if (fonts[font].length > 1) fonts[font].sort();
                }

                let href = [`https://fonts.googleapis.com/css2?`, `&display=swap`];
                const string = [];

                Object.entries(fonts).forEach(([font, weights], i) => {
                    if (font.split(" ").length > 1) font = font.split(" ").join("+");
                    weights = weights.join(";");
                    i === 0 ? string.push(`family=${font}`) : string.push(`&family=${font}`);
                    string.push(`:wght@${weights}`);
                });

                let link = document.querySelector(".google-fonts-link");

                if (!link) {
                    link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.classList.add("google-fonts-link");
                    document.getElementsByTagName("head")[0].appendChild(link);
                }

                href = href.join(string.join(""));
                link.href = href;
            }
        }
    }

    render() {
        const { handleDelete, handleSubmit, styles } = this.props;

        return (
            <div className="style-list">
                {
                    styles.map(({ style }, i) =>
                        <Style
                            key={`style-${i}`}
                            style={style}
                            handleDelete={handleDelete}
                            handleSubmit={handleSubmit}
                        />
                    )
                }
            </div>
        )
    }
}