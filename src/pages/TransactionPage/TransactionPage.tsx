import React, { useContext } from "react"
import Page from "../../components/Page"
import { ProjectContext } from "../../context/ProjectContext"
import { Component } from "../../types/Util"
import TransactionList from "../../components/TransactionList"
import Globe from '../../svg/icons/globe.png';


import "./TransactionPage.css"

const TransactionPage: Component = () => {
	const { currentProject, currProjectRequest } = useContext(ProjectContext)

	const name = currentProject?.name

	return (
		<Page path="/Transaction" title="Transactions">
			<div className="transaction-card">
                <div className='language'>
                    <img src={Globe} alt='Globe' />
                    <select name='select' className='language-select'>
                    <option value='eng'>English</option>
                    <option value='esp'>Spanish</option>
                    <option value='ita'>Italian</option>
                    <option value='ger'>German</option>
                    <option value='frn'>French</option>
                    </select>
                </div>
                <div className="card-header py-6 px-10 text-2xl font-bold">
                    Transactions
                </div>
                <TransactionList />
            </div>
		</Page>
	)
}

export default TransactionPage