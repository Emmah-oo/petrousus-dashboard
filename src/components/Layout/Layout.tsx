import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import CSSBaseline from "../../styles/CSSBaseline"
import { Component } from "../../types/Util"
import Alerts from "../Alerts"
import Sidebar from "../Sidebar"

import clsx from "clsx"

import "./Layout.css"
import { StageContext } from "../../context/StageContext"
import { getTimeLeftLimitedSignupBonus, getTimeString, limitedSignupBonusValid } from "../../util"



const Layout: Component = ({ children }) => {
	const { loggedIn } = useContext(AuthContext)

	return (
		<>
			<CSSBaseline />
			<Alerts />
			{loggedIn && (
				<Sidebar />
			)}
			<div className={clsx("page-container", {"logged-in": loggedIn})}>
				{loggedIn}
				{children}
			</div>
		</>
	)
}

export default Layout