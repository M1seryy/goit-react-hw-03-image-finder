import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('click', this.onOverlayClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
    window.removeEventListener('click', this.onOverlayClick);
  }

  onOverlayClick = e => {
    if (e.target.nodeName !== 'IMG') {
      this.props.onClose();
    }
  };

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div class="Overlay">
        <div class="Modal">
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}
