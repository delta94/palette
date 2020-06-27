import React from 'react';
import './App.css';
import './reset.css';
import { TopNav } from './components/header/top-nav';
import StyleList from './components/style-list/style-list';
import ColorList from './components/color-list/color-list';
import StyleForm from './components/form/style-form';

class App extends React.Component {
  state = {
    styles: [],
    colors: [],
    searchText: "",
    creating: false,
  };

  componentDidMount() {
    this.setState({ 
      styles: JSON.parse(localStorage.getItem("styles")) || [],
      colors: JSON.parse(localStorage.getItem("colors")) || []
    });
  }

  componentDidUpdate() {
    const { creating } = this.state;
    let link = document.querySelector(".google-fonts-link");

    if (creating && link && !link.href.includes("Roboto")) {
      let href = link.href;
      const splitIdx = href.indexOf("&display=swap");
      href = `${href.slice(0, splitIdx)}&family=Roboto:wght@400${href.slice(splitIdx)}`;
      link.href = href;
    }
  }

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = (type, input, styleId=null) => {
    const key = this.state[type];
    let value;
    let id = styleId !== null ? styleId : key.length;

    if (styleId === null) {
      for (let i = 0; i < key.length; i++) {
        if (key[i].id !== i) id = i;
      }
    }

    if (type === "styles") {
      const { text, font, size, weight, style, decoration, color } = input;
      value = { id, text, font, size, weight, style, decoration, color };
    } else {
      value = { id, value: input };
    }

    if (styleId !== null) {
      for (let i = 0; i < key.length; i++) {
        if (key[i].id === id) key[i] = value;
      }
    } else { 
      key.push(value);
    }

    localStorage.setItem(type, JSON.stringify(key));
    this.setState({ [type]: key });
    if (type === "styles" && styleId === null) this.closeCreateForm();
  }

  handleDelete = (id, type) => {
    const key = this.state[type];
    
    for (let i = 0; i < key.length; i++) {
      if (key[i] && key[i].id === id) delete key[i];
    }
    
    const filtered = key.filter(key => key !== null);
    this.setState({ [type]: filtered });
    localStorage.setItem(`${type}`, JSON.stringify(filtered));
  }

  closeCreateForm = () => {
    this.setState({ creating: false });
  }

  render() {
    const filteredStyles = [];
    const filteredColors = [];
    const { creating, styles, colors } = this.state;

    styles.forEach((style, id) => {
      if (style 
          && (style.text.toLowerCase().includes(this.state.searchText.toLowerCase())
          || style.font.toLowerCase().includes(this.state.searchText.toLowerCase()))) {
          filteredStyles.push({ id, style });
      }
    });

    colors.forEach((color, id) => {
      if (color && color.value.toLowerCase().includes(this.state.searchText.toLowerCase())) {
        filteredColors.push({ id, color });
      }
    });

    return (
      <>
        <TopNav handleChange={this.handleChange} />
        <div className="main-container">
          <div className="colors">
            <h1>Colors</h1>
            <ColorList 
              colors={filteredColors}
              handleSubmit={this.handleSubmit} 
              handleDelete={this.handleDelete}  
            />
          </div>
          <div className="styles">
            <h1>Fonts</h1>
            {
              creating
                ? <StyleForm
                    type="create"
                    closeCreateForm={this.closeCreateForm}
                    handleSubmit={this.handleSubmit}
                  />
                : <>
                    {
                      styles.length < 1 
                        ? <div className="empty-style">No styles to show</div>
                        : null
                    }
                    <div className="add-style-btn">
                      <button
                        onClick={() => this.setState({ creating: true })}>
                        Add
                      </button>
                    </div>
                  </>
            }
            <StyleList
              styles={filteredStyles.reverse()}
              handleDelete={this.handleDelete}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
