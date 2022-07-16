import React, { useContext } from "react"
import Page from "../../components/Page"
import { ProjectContext } from "../../context/ProjectContext"
import { Component } from "../../types/Util"
import TransactionList from "../../components/TransactionList"
import Globe from '../../svg/icons/globe.png';
import LoggedInHeader from "../../components/LoggedInHeader"


import "./TransactionPage.css"
import FakeTransactionList from '../../components/TransactionList/FakeTransactionList'

const TransactionPage: Component = () => {
	const { currentProject, currProjectRequest } = useContext(ProjectContext)

	const name = currentProject?.name

	return (
		<Page path="/Transaction" title="Transactions">
			<div className="transaction-card">
            <LoggedInHeader />
                <div className="card-header">
                    Transactions
                </div>
                <FakeTransactionList />
            </div>
		</Page>
	)
}

export default TransactionPage