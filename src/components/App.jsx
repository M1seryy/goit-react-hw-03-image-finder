import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { getImagesBySearch } from 'api/images';

class App extends Component {
  state = {
    response: [],
    inputText: '',
    isLoading: false,
    nextPage: 2,
  };

  onFormSubmit = async e => {
    e.preventDefault();
    const page = 1;
    this.getImages(this.state.inputText, page);
  };
  onInputHandler = e => {
    this.setState({
      inputText: e.target.value,
    });
    console.log(this.state.inputText);
  };

  getImages = async (search, page) => {
    this.setState({ isLoading: true });
    const data = await getImagesBySearch(search, page);
    this.setState({
      response: data.hits,
      isLoading: false,
    });
  };
  onLoadMoreHandler = async () => {
    this.setState(prevState => ({
      nextPage: prevState.nextPage + 1,
    }));
    const data = await getImagesBySearch(
      this.state.inputText,
      this.state.nextPage
    );
    console.log(this.state.response.hits);
    this.setState(prevState => ({
      response: [...prevState.response, ...data.hits],
    }));
    console.log('work');
  };

  render() {
    return (
      <div>
        <Searchbar
          onTextHandler={this.onInputHandler}
          inputValue={this.state.inputText}
          onFormSub={this.onFormSubmit}
        />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            data={this.state.response}
            q={this.state.inputText}
            onLoad={this.onLoadMoreHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
