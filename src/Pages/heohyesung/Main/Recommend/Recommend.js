import React, { Component } from 'react';
import './Recommend.scss';

class Recommend extends Component {
  render() {
    return (
      <div className="Recommend">
        <img className="smallimg" src={this.props.img} alt="iuimg" />
        <p className="smalltext">{this.props.userid}</p>
        <p className="endtextblueside">팔로우</p>
      </div>
    );
  }
}

export default Recommend;