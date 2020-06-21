import React from 'react';
import './App.css';
import './reset.css';
import { TopNav } from './components/header/top-nav';
import { SearchBar } from './components/header/search-bar';
import StyleForm from './components/form/style-form';
import { StyleList } from './components/style-list/style-list';
import ColorList from './components/color-list/color-list';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      styles: [],
      colors: [],
      searchText: "",
      creating: false,
    };
  }

  componentDidMount() {
    this.setState({ 
      styles: JSON.parse(localStorage.getItem("styles")) || [],
      colors: JSON.parse(localStorage.getItem("colors")) || []
    });
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = (type, input) => {
    const key = this.state[type];
    let id = key.length;
    let value;

    for (let i = 0; i < key.length; i++) {
      if (key[i].id !== i) id = i;
    }

    value = type === "styles" 
      ? { id, text: input } 
      : { id, value: input };

    key.push(value);
    localStorage.setItem(type, JSON.stringify(key));
    this.setState({ [type]: key });
    if (type === "styles") this.handleClose();
  }

  handleClose = () => {
    this.setState({ creating: false });
  }

  delete = id => {
    const styles = this.state.styles;

    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].id === id) delete styles[i];
    }
    
    const filteredStyles = styles.filter(style => {
      return style !== null;
    });

    this.setState({ styles: filteredStyles });
    localStorage.setItem("styles", JSON.stringify(filteredStyles));
  }

  render() {
    const filteredStyles = [];
    const filteredColors = [];
    const { creating, styles, colors } = this.state;

    styles.forEach((style, id) => {
      if (style) {
        if (style.text.toLowerCase().includes(this.state.searchText.toLowerCase())) {
          filteredStyles.push({ id, style });
        }
      }
    });

    colors.forEach((color, id) => {
      if (color) {
        if (color.value.toLowerCase().includes(this.state.searchText.toLowerCase())) {
          filteredColors.push({ id, color });
        }
      }
    });

    return (
      <div className="main-container">
        <TopNav />
        <SearchBar handleChange={this.handleChange} />
        <div className="colors">
          <h1>Colors</h1>
          <ColorList 
            colors={filteredColors}
            handleSubmit={this.handleSubmit} />
        </div>
        <div className="styles">
          <h1>Fonts</h1>
          {
            !creating && styles.length < 1
              ? <div className="empty-style">No styles to show</div>
              : null
          }
          {
            creating
              ? 
                <StyleForm
                  type="create"
                  handleClose={this.handleClose}
                  handleSubmit={this.handleSubmit}
                />
              :
                <div className="add-style-btn">
                  <button
                    onClick={() => this.setState({ creating: true })}>
                    Add
                  </button>
                </div>
          }
          <StyleList
            styles={filteredStyles.reverse()}
            remove={this.delete}
          />
        </div>
      </div>
    );
  }
}

export default App;
