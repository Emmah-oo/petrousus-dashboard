import React, { useContext } from "react"
import { Loadable, LoadableParagraph, Loader } from "../../components/Loader"
import Page from "../../components/Page"
import { AuthContext } from "../../context/AuthContext"
import { ProjectContext } from "../../context/ProjectContext"
import { Component } from "../../types/Util"
import TransactionList from "../../components/TransactionList"

import "./TransactionPage.css"

const TransactionPage: Component = () => {
	const { currentProject, currProjectRequest } = useContext(ProjectContext)

	const name = currentProject?.name

	return (
		<Page path="/Transaction" title="Transactions">
			<div className="dashboard-card">
                <div className="card-header">
                    Recent Transactions
                </div>
                <TransactionList />
            </div>
		</Page>
	)
}

export default TransactionPage