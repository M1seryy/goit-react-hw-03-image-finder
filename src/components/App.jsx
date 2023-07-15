import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    response: [],
    inputText: '',
  };

  onFormSubmit = async e => {
    e.preventDefault();
    const API_KEY = `36745882-9a469cd98fdea02c7a63719ef`;
    const API_REQUEST = `https://pixabay.com/api/?q=${this.state.inputText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const res = await axios.get(API_REQUEST);
    this.setState({
      response: res.data,
    });
    console.log(res);
  };
  onInputHandler = e => {
    this.setState({
      inputText: e.target.value,
    });
    console.log(this.state.inputText);
  };
  onLoadMoreHandler = async () => {
    const page = 2;
    const API_KEY = `36745882-9a469cd98fdea02c7a63719ef`;
    const NEW_REQUEST = `https://pixabay.com/api/?q=${this.state.inputText}&page=2&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const res = await axios.get(NEW_REQUEST);
    console.log(res);
    this.setState(({ prev }) => ({
      response: [...prev.response, res.data],
    }));
  };

  render() {
    return (
      <div>
        <Searchbar
          onTextHandler={this.onInputHandler}
          inputValue={this.state.inputText}
          onFormSub={this.onFormSubmit}
        />
        <ImageGallery
          data={this.state.response}
          q={this.state.inputText}
          onLoad={this.onLoadMoreHandler}
        />
      </div>
    );
  }
}

export default App;
