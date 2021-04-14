import React, { Component } from 'react';
import './Nav.scss';
 
class Nav extends Component {
    render() {
        return (
        <body id="main_layout">
            <nav className="nav_container">
                <div className="nav_container_sub">
                    <div className="nav_left">
                        <i className="fab fa-instagram"></i>
                        <span className="nav_logo">Westagram</span>
                    </div>
                    <div className="nav_center">
                        <form className="nav_center_search">
                            <input type="text" className="center_search" placeholder="검색"/>
                            <i className="fas fa-search search_icon"></i>
                            <i className="fas fa-times-circle cancle_icon"></i>
                        </form>
                    </div>
                    <div className="nav_right">
                        <i className="fas fa-home"></i>
                        <i className="far fa-paper-plane nav_right_plane"></i>
                        <i className="far fa-compass"></i>
                        <i className="far fa-heart"></i>
                        <button className="nav_bar_profile_btn">
                            <img src="/images/trunks.jpg" alt="nav_bar_profile_photo" />
                        </button>
                        <div className="drop_box_main">
                            <div className="drop_box">
                                <div className="drop_box_top">
                                    <div className="drop_box_box">
                                        <i className="far fa-user"></i>
                                        <span>프로필</span>
                                    </div>
                                    <div className="drop_box_box">
                                        <i className="far fa-bookmark"></i>
                                        <span>저장됨</span>
                                    </div>
                                    <div className="drop_box_box">
                                        <i className="fas fa-cog"></i>
                                        <span>설정</span>
                                    </div>
                                    <div className="drop_box_box">
                                        <i className="fas fa-sync"></i>
                                        <span>계정 전환</span>
                                    </div>
                                </div>
                                <div className="drop_box_bottom">
                                    <a href="login.html"><span>로그아웃</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="drop_box_diamond"></div>
                    </div>
                </div>
            </nav>
        </body>
        );
    }
}

export default Nav;