import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };
  onModal = e => {
    this.setState({
      modal: !this.state.modal,
    });
    console.log(e);
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props.itemData;
    return (
      <>
        <li key={id} onClick={this.onModal} className="ImageGalleryItem">
          <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
        </li>
        {this.state.modal ? (
          <Modal onClose={this.onModal} image={largeImageURL} />
        ) : null}
      </>
    );
  }
}

export default ImageGalleryItem;
