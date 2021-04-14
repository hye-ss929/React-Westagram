import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <div>
        <span className="feeduser">{this.props.name}</span>
        <span>{this.props.comment}</span>
      </div>
    );
  }
}

export default Comment;