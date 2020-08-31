import React, { Component } from 'react';
import './company-info.css';

class CompanyInfo extends Component {
    render() {
        return (
            <div className="company-info">
                <div className="content">
                    <div className="company-name">에이치디아이랩</div>
                    <hr />
                    <div className="company-details">
                        Tel: 031-290-7619<br />
                        Address: 경기도 수원시 장안구 일월로 40 (성균관대학교) 제 2공학관 4층 26411호<br />
                        Mail: sangminkim06@gmail.com
                    </div>
                    <hr />
                </div>
                <div className="language-selector">
                    Language: 
                    <form>
                        <select>
                            <option>English</option>
                            <option>한국어</option>
                        </select>
                    </form>
                </div>
            </div>
        );
    }
}

export default CompanyInfo;