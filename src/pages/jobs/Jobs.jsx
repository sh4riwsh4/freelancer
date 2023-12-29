import React from "react"
import "./Jobs.scss"
import { Link, useLocation } from 'react-router-dom';

const Jobs = () => {
    return (
        <div className="Jobs">
            <div className="top">
                <Link className='link' to="/">Sana Özel</Link>
                <Link className='link' to="/">Son Paylaşılan</Link>
                <Link className='link' to="/">Hızlı İşler</Link>
                <Link className='link' to="/">Favoriler</Link>
            </div>
            <div className="bot">
                <div className="job">
                    <div className="left">
                        <div className="time"></div>
                        <div className="name"></div>
                        <div className="description"></div>
                        <div className="needed-skills"></div>
                    </div>
                    <div className="right">
                        <button className="favorite"></button>
                        <div className="price"></div>
                        <div className="deadline"></div>
                        <div className="location"></div>
                        <div className="user-review"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs