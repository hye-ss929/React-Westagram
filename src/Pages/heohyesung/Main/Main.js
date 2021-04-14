import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Storybox from "../Main/Storybox/Storybox";
import Feedbox from "../Main/Feed/Feed";
import Recommend from "../Main/Recommend/Recommend";
import "./Main.scss";

class MainHeo extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      commentArr: [],
      btnColor: "rgb(192, 208, 253)",
      storyBox: [],
      feedBox: [],
      recommendBox: [],
    };
  }

  componentDidMount() {
    fetch("/data/storyFeedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          storyBox: data,
        });
      });

    fetch("/data/feedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedBox: data,
        });
      });

    fetch("/data/recommendData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          recommendBox: data,
        });
      });
  }

  render() {
    const { feedBox, storyBox, recommendBox } = this.state;
    return (
      <div className="Main">
        <Nav />
        <main className="mainbigbox">
          <section className="leftbox">
            <div className="storyboxContainer">
              {storyBox.map((story) => {
                return (
                  <Storybox
                    key={story.id}
                    name={story.userName}
                    img={story.img}
                  />
                );
              })}
            </div>
            <div className="totalFeedBox">
              {feedBox.map((feed) => {
                return (
                  <Feedbox
                    key={feed.id}
                    userimg={feed.userimg}
                    userid={feed.userid}
                    feedimg={feed.feedimg}
                    countlike={feed.countLike}
                    username={feed.userName}
                    text={feed.text}
                  />
                );
              })}
            </div>
          </section>
          <aside className="rightbox">
            <section className="side">
              <img
                className="imgsideuser"
                src="/images/heohyesung/mainuser.png"
                alt="profile-img"
              />
              <span className="sideuserid">2929_9999</span>
              <p className="endtextblue">전환</p>
            </section>
            <p className="sidetext">회원님을 위한 추천</p>
            <p className="endtext">모두보기</p>
            {recommendBox.map((recommend) => {
              return (
                <Recommend
                  key={recommend.id}
                  img={recommend.img}
                  userid={recommend.userId}
                />
              );
            })}
          </aside>
        </main>
      </div>
    );
  }
}

export default MainHeo;
