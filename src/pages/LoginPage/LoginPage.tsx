import { Component } from "../../types/Util"

import { Link } from "react-router-dom"
import Button from "../../components/Button"
import FormPage from "../../components/FormPage"
import Page from "../../components/Page"
import Header from "../../components/Header"

import "./LoginPage.css"

import EmailIcon from "../../svg/icons/email-outline.svg"
import PasswordIcon from "../../svg/icons/lock-outline.svg"
import Form from "../../components/Form"

import FormInput from "../../components/FormInput"
import { errorToString, useLoginRequest } from "../../util"
import { AuthContext } from "../../context/AuthContext"
import { AlertContext } from "../../context/AlertContext"
import { useContext } from "react"

const LoginPage: Component = () => {
	const authContext = useContext(AuthContext)
	const alertContext = useContext(AlertContext)
	const loginRequest = useLoginRequest()
	

	const initialValues = {
		email: "",
		password: "",
	}

	const onSubmit = (values: Record<string, any>) => {
		loginRequest.sendRequest(
			values.email,
			values.password
		).then((res) => {
			authContext.login(res.data.user, res.data.tokens)
			alertContext.addAlert({
				type: "success",
				label: "Successfully logged in",
				duration: 4000
			})
		}).catch((err) => {
			alertContext.addAlert({
				type: "error",
				label: errorToString(err, "Error while logging in")
			})
		})
	}

	return (
		<div>
		<Header />
		<Page path="/login" title="Login" onlyLoggedOut>
			<FormPage title="Sign in" background={"/image/background/background.png"}>
				<Form
					initialValues={initialValues}
					onSubmit={onSubmit}
				>
					<FormInput
						field="email"
						icon={EmailIcon}
						placeholder="Email"
						autoCapitalize="off"
						autoComplete="email"
					/>
					<FormInput
						field="password"
						icon={PasswordIcon}
						placeholder="Password"
						visibilityToggle
						autoCapitalize="off"
						autoComplete="current-password"
					/>
					<Link to="/forgot-password" className="inline-block mb-4 text-right forgot-pass">Forgot password</Link>
					<div className="login-footer flex-gap-y-4 flex flex-col <xs:mt-8">
						<Button className="login-btn" loading={loginRequest.fetching}>
							Sign in
						</Button>
						<span>
						<p>Don't have an account?</p> <Link to="/register" className="link">Sign up</Link>
						</span>
					</div>
				</Form>
			</FormPage>
		</Page>
		</div>
	)
}

export default LoginPage