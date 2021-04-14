import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./Feed.scss";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      commentArr: [],
      btnColor: "rgb(192, 208, 253)",
    };
  }

  componentDidMount() {
    fetch("/data/commentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          commentArr: data,
        });
      });
  }

  commentInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  btnColorChange = () => {
    if (this.state.comment.length > 0) {
      this.setState({
        btnColor: "rgb(8, 150, 247)",
      });
    } else {
      this.setState({
        btnColor: "rgb(192, 208, 253)",
      });
    }
  };

  handleAddComment = (e) => {
    e.preventDefault();
    if (this.state.comment) {
      this.setState({
        commentArr: [
          ...this.state.commentArr,
          { userName: "2929_9999", comment: this.state.comment },
        ],
        comment: "",
      });
    }
  };

  render() {
    return (
      <div className="Feed">
        <div className="navfeedbox">
          <img className="imguser" src={this.props.userimg} alt="profile-img" />
          <p className="userid">{this.props.userid}</p>
        </div>
        <div className="feedbox">
          <img className="imgfeed" src={this.props.feedimg} alt="jeju-img" />
        </div>
        <div className="commentfirstbox">
          <ul className="commenticons">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
            <p className="like">{this.props.countlike}</p>
          </ul>
        </div>
        <div className="commentBox">
          <p className="feeduser">{this.props.username}</p>
          <span>{this.props.text}</span>
          <div>
            {this.state.commentArr.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  name={comment.userName}
                  comment={comment.comment}
                />
              );
            })}
          </div>
          <form
            onSubmit={this.handleAddComment}
            className="addcomment"
            autocomplete="off"
          >
            <input
              onKeyUp={this.btnColorChange}
              onChange={this.commentInput}
              value={this.state.comment}
              name="comment"
              className="commentline"
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              style={{ color: this.state.btnColor }}
              className="submitbox"
              type="submit"
            >
              게시
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Feed;
