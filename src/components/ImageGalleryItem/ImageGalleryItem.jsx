import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props.itemData;
    return (
        <li className="ImageGalleryItem">
          <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
        </li>
    );
  }
}

export default ImageGalleryItem;
