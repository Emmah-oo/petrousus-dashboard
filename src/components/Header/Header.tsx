import React from "react"
import { Component } from "../../types/Util"
import "./Header.css"
import Globe from "../../svg/icons/globe.png"
import Logo from "../../svg/icons/logo.png"


const Header: Component = () => {
	return (
		<div className="header">
			<nav className="nav">
                <div className="logo">
                    <img src= {Logo} alt="Petrousus" />
                </div>
                
                <div className="language-main">
                    <img src={Globe} alt="Globe" />
                    <select name="select" className="language-select">
                        <option value="eng">English</option>
                        <option value="esp">Spanish</option>
                        <option value="ita">Italian</option>
                        <option value="ger">German</option>
                        <option value="frn">French</option>
                    </select>
                </div>
            </nav>
		</div>
	)
}

export default Header