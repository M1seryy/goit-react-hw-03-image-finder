import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';

class ImageGallery extends Component {
  render() {
    console.log(this.props.data.hits);
    return (
      <>
        <ul class="ImageGallery">
          {this.props.q !== '' ? (
            this.props.data.hits ? (
              this.props.data.hits.map(item => {
                return <ImageGalleryItem itemData={item} />;
              })
            ) : (
              <Loader />
            )
          ) : null}
        </ul>
        {this.props.data.hits ? (
          <button onClick={this.props.onLoad} className="Button">Load more</button>
        ) : null}
      </>
    );
  }
}

export default ImageGallery;
