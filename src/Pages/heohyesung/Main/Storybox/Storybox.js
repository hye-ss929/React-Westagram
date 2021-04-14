import React, { Component } from 'react';
import './Storybox.scss';

class Storybox extends Component {
  render() {
    return (
      <div className="Storybox">
        <img className="imgstory" alt="feedimg" src={this.props.img} />
        <p className="textstory">{this.props.name}</p>
      </div>
    );
  }
}

export default Storybox;