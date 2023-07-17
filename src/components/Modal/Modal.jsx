import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

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
