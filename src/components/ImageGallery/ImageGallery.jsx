import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.props.data
            ? this.props.data.map(item => {
                return <ImageGalleryItem key={item.id} itemData={item} />;
              })
            : null}
        </ul>
        {this.props.data.length >= 12 ? (
          <button onClick={this.props.onLoad} className="Button">
            Load more
          </button>
        ) : null}
      </>
    );
  }
}

export default ImageGallery;
