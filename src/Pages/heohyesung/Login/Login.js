import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginHeo extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      backgroundcolor: false,
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  //로그인
  goToMain = (e) => {
    e.preventDefault();
    fetch("http://10.58.1.56:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          localStorage.setItem("token", result.token);
          this.props.history.push("/main");
        } else {
          alert("실패");
        }
      });
  };

  //회원가입
  goToMain = () => {
    fetch("10.58.1.56:8000/user", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) =>
        result.message === "SUCCESS"
          ? this.props.history.push("/")
          : alert("회원가입실패")
      );
  };

  render() {
    const { id, pw } = this.state;
    return (
      <div className="Login">
        <section className="logincontainer">
          <p>Westagram</p>
          <form className="loginbox">
            <input
              onChange={this.handleInput}
              className="loginId"
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleInput}
              className="loginPw"
              type="password"
              name="pw"
              placeholder="비밀번호"
            />
            <button
              onClick={this.goToMain}
              className={
                id.includes("@") && pw.length >= 5 ? "tureColor" : "falseColor"
              }
            >
              로그인
            </button>
          </form>
          <h6 className="linestyle">또는</h6>
          <div className="bottomtext">
            <div className="facebook">
              <i className="fab fa-facebook-square"></i>
              <span>Facebook으로 로그인</span>
            </div>
            <h6>비밀번호를 잊으셨나요?</h6>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginHeo);
