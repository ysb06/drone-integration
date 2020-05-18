import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './PageHeader.css';

class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/"><img src="/image/logo.png" alt="Logo" /></Link>
                <img src="/image/prototype/login.png" alt="로그인 임시"/>
            </header>
        );  //추후 Link를 홈페이지 주소로 변경
    }
}

export default Header;