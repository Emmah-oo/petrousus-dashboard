import React, { useContext, useEffect, useState } from "react"
import Card, { CardBody, CardTitle } from "../../components/Card"
import Form from "../../components/Form"
import FormInput from "../../components/FormInput"
import Page from "../../components/Page"
import LoggedInHeader from "../../components/LoggedInHeader"
import { AlertContext } from "../../context/AlertContext"
import { AuthContext } from "../../context/AuthContext"
import { Component } from "../../types/Util"
import { errorToString, getCountryCodeFromDialCode, getDialCodeFromCountryCode, pick, splitPhoneNumber, useEditUserRequest, userUpdateSchema, useSendVerificationEmailRequest, walletAddressSchema } from "../../util"

import * as Yup from "yup"

import "./AccountPage.css"

import Globe from "../../svg/icons/globe.png"
import Cube from "../../svg/icons/cube.png"
import EmailIcon from "../../svg/icons/email-outline.svg"
import NameIcon from "../../svg/icons/account-circle-outline.svg"
import Input from "../../components/Input"
import NationalityInput from "../../components/NationalityInput"
import Button from "../../components/Button"
import PhoneInput from "../../components/PhoneInput"

import VerifiedIcon from "../../svg/icons/verified.svg"
import UnverifiedIcon from "../../svg/icons/unverified.svg"
import WalletIcon from "../../svg/icons/payments.svg"
import { ProjectContext } from "../../context/ProjectContext"
import { Loadable, Loader } from "../../components/Loader"

const AccountPage: Component = () => {
	
	return (
		<Page path="/account" userRestricted>
			<div className="account-page">
				<div className="gap-wrapper gap-4 !m-0">
					<ProfileCard />
					<WalletCard />
				</div>
			</div>
		</Page>
	)
}

export const WalletCard: Component = () => {
	const [ changed, setChanged ] = useState(false)
	const authContext = useContext(AuthContext)
	const alertContext = useContext(AlertContext)

	const { currentProject, currProjectRequest } = useContext(ProjectContext)

	const editUserRequest = useEditUserRequest()

	const initialValues = {
		wallet: authContext.user?.wallet || ""
	}

	const onSubmit = (values: any) => {
		if (!authContext.user) return;
		editUserRequest.sendRequest(authContext.user?.id, {wallet: values.wallet})
			.then(() => alertContext.addAlert({type: "success", label: "Successfully saved wallet address"}))
			.catch((err) => alertContext.addAlert({type: "error", label: errorToString(err, "Error saving wallet address")}))
	}

	return (
		<div className="main-body">
			<LoggedInHeader />
				<Card className="wallet-card">
					<CardBody className="wallet-body">
						<div className="wallet-title">
							<img src= {Cube} alt="" />
							<h1 className="header">My Wallet</h1>
						</div>
						<Loader loading={currProjectRequest.fetching}>
							<Loadable component="p" className="mb-2">
								{/* Make sure you use an <span className="font-semibold">{currentProject?.wallet?.type}</span> wallet address. */}
							</Loadable>
						</Loader>
						<Form
							initialValues={initialValues}
							validationSchema={Yup.object().shape({wallet: walletAddressSchema})}
							onSubmit={onSubmit}
							onUpdate={() => !changed && setChanged(true)}
						>
							<FormInput
								
								field="wallet"
								icon={WalletIcon}
								placeholder="Wallet Address"
								autoCapitalize="off"
							/>
							<Button
								color="primary"
								className="mt-4"
								disabled={!changed || currProjectRequest.fetching}
								loading={editUserRequest.fetching}
							>
								Save Changes
							</Button>
						</Form>
					</CardBody>
				</Card>
			</div>

	)
}


export const ProfileCard: Component = () => {
	const authContext = useContext(AuthContext)
	const alertContext = useContext(AlertContext)
	const [ changed, setChanged ] = useState(false)

	const editUserRequest = useEditUserRequest()

	const phoneNumberSplit = splitPhoneNumber(authContext.user?.mobile || "")

	const initialValues = {
		...pick(authContext.user || {}, [
			"first_name",
			"last_name",
			"nationality",
		]),
		phone_number: phoneNumberSplit.number,
		country_code: getCountryCodeFromDialCode(phoneNumberSplit.dial_code)
	}

	const onSubmit = (values: Record<string, any>) => {
		if (!authContext.user) return;
		
		const dialCode = getDialCodeFromCountryCode(values.country_code)
		const mobile = `${dialCode} ${values.phone_number}`
		
		editUserRequest.sendRequest(authContext.user.id, {
			first_name: values.first_name,
			last_name: values.last_name,
			nationality: values.nationality,
			mobile
		})
			.then((res) => {
				authContext.updateUser(res.data)
				alertContext.addAlert({
					type: "success", label: "Successfully updated user"
				})
				setChanged(false)
			})
			.catch((err) => {
				alertContext.addAlert({
					type: "error", label: errorToString(err, "Error updating user")
				})
			})
	}

	const sendVerificationEmailRequest = useSendVerificationEmailRequest()
	
	const [ timeLeft, setTimeLeft ] = useState(0)

	useEffect(() => {
		if (!sendVerificationEmailRequest.fetchedAt) return;
		setTimeLeft(60)
		let interval = setInterval(() => {
			if (timeLeft - 1 === 0) clearInterval(interval)
			setTimeLeft((timeLeft) => Math.max(timeLeft - 1, 0))
		}, 1000)
		return () => clearInterval(interval)
	}, [sendVerificationEmailRequest.fetchedAt])

	return (
		<Card className="profile-card">
			<div className="profile-title">
					<img src= {Cube} alt="" />
					<h1 className="header">Profile</h1>
				</div>
			<CardBody className="flex flex-col">
				<Form
					initialValues={initialValues}
					validationSchema={userUpdateSchema}
					onSubmit={onSubmit}
					onUpdate={() => !changed && setChanged(true)}
				>
					<label htmlFor="FirstName">First Name</label>
					<FormInput
						field="first_name"
						icon={NameIcon}
						placeholder="First Name"
						autoComplete="given-name"
						autoCapitalize="words"
					/>
					<label htmlFor="LastName">Last Name</label>
					<FormInput
						field="last_name"
						icon={NameIcon}
						placeholder="Last Name"
						autoComplete="family-name"
						autoCapitalize="words"
					/>
					<label htmlFor="Email">Email</label>
					<Input
						disabled
						icon={EmailIcon}
						value={authContext.user?.email}
						placeholder="Email"
						autoCapitalize="off"
						autoComplete="email"
					/>
					
					<Input
						disabled
						icon={authContext.user?.is_email_verified === false ? UnverifiedIcon : VerifiedIcon}
						value={authContext.user?.is_email_verified === false ? "Email not verified" : "Email is verified"}
						placeholder="Verified"
						autoCapitalize="off"
						autoComplete="email"
					/>
					<label htmlFor="Number">Phone Number</label>
					<PhoneInput
						numberField="phone_number"
						codeField="country_code"
					/>
					<label htmlFor="Nationality">Nationality</label>
					<NationalityInput field="nationality" />
					<Button
						color="primary"
						className="mt-4"
						disabled={!changed}
						loading={editUserRequest.fetching}
					>
						Save Changes
					</Button>
				</Form>
				{authContext.user?.is_email_verified === false && (
					<Button
						color="primary"
						buttonStyle="outlined"
						className="mt-4"
						loading={sendVerificationEmailRequest.fetching}
						disabled={timeLeft > 0}
						onClick={
							() => sendVerificationEmailRequest.sendRequest()
								.then(() => alertContext.addAlert({type: "success", label: "Successfully sent verification email"}))
								.catch((err) => alertContext.addAlert({type: "error", label: errorToString(err, "Error sending verification email")}))
						}
					>
						Resend Verification Email{timeLeft > 0 && ` (${timeLeft})`}
					</Button>
				)}
				<Button
					color="primary"
					buttonStyle="outlined"
					className="mt-4"
					onClick={() => authContext.logout()}
				>
					Logout
				</Button>
			</CardBody>
		</Card>
	)
}

export default AccountPage