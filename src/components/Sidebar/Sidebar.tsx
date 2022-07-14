import type { Component } from "../../types/Util"
import Card, { CardBody, CardTitle } from "../Card"
import "./Sidebar.css"

import DashboardIcon from "../../svg/icons/dashboard-outline.svg"
import BuyTokenIcon from '../../svg/icons/buy-token.svg'
import TransactionIcon from '../../svg/icons/transaction.svg'
import ProfileIcon from '../../svg/icons/profile.svg'
import AccountIcon from "../../svg/icons/account-circle-outline.svg"
import SettingsIcon from "../../svg/icons/settings-outline.svg"
import LogoutIcon from "../../svg/icons/logout.svg"
import Button from "../Button"
import { Link, NavLink, useLocation } from "react-router-dom"
import { getURL, routeMatchesExact, useGetCurrentProject } from "../../util"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

import BuyIcon from "../../svg/icons/shopping-cart.svg"
import TransactionsIcon from "../../svg/icons/payments.svg"
import ReferralsIcon from "../../svg/icons/paid.svg"
import HomeIcon from "../../svg/icons/home.svg"
import Logo from "../../svg/icons/logo.png"

import { ProjectContext } from "../../context/ProjectContext"

const navList = [
	{label: "Dashboard", path: "/", icon: DashboardIcon},
	{label: "Buy Token", path: "/buy", icon: BuyTokenIcon},
	{label: "Transaction", path: "/transaction", icon: TransactionIcon},
	{label: "Profile", path: "/account", icon: ProfileIcon},
]

const bottomList = [
	{label: "Logout", onClick: ({ logout }: {logout: () => void;}) => {
		logout()
	}, icon: LogoutIcon},
]

const Sidebar: Component = () => {
	const { currentProject } = useContext(ProjectContext)
	const authContext = useContext(AuthContext)

	const location = useLocation()

	return (
		<Card className="sidebar dashboard-sb">
			<CardTitle center>
				<div className="logo ml-4">
                    <img src= {Logo} alt="Petrousus" />
                </div>
			</CardTitle>
			<CardBody>
				<div className="nav-list list +md:flex-gap-y-2">
					{navList.map((navItem) => {
						const matches = () => routeMatchesExact(navItem.path, location.pathname)
						const path = navItem.path.replace("%MAIN_URL%", getURL(currentProject?.main_site_url || ""))
						return (
							<Button
								key={navItem.label}
								component={path.startsWith("http") ? "a" : NavLink}
								{...(path.startsWith("http") ? {href: path} : {to: path})}
								target={path.startsWith("http") ? "_blank" : undefined}
								
								className="!justify-start sidebar-btn"
								icon={navItem.icon}
							>
								{navItem.label}
							</Button>
						)
					})}
				</div>
				<div className="separator">
					<div className="divider" />
				</div>
				<div className="bottom-list list flex-end">
					{bottomList.map((navItem) => (
						<Button
							key={navItem.label}
							color="transparent"
							className="!justify-start"
							icon={navItem.icon}
							onClick={() => navItem.onClick?.({ logout: authContext.logout })}
						>
							{navItem.label}
						</Button>
					))}
				</div>
			</CardBody>
		</Card>
	)
}

export default Sidebar