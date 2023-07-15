import React, { Component } from 'react';
import '../../style.css';

class Searchbar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.props.onFormSub} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.props.inputValue}
            onChange={this.props.onTextHandler}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
