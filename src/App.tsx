import { BrowserRouter, Routes, Route } from "react-router-dom"
import BuyPage from "./components/BuyPage"
import ForgotPasswordPage from "./components/ForgotPasswordPage"
import Layout from "./components/Layout"
import ReferralsPage from "./components/ReferralsPage"
import ResetPasswordPage from "./components/ResetPasswordPage"
import { GlobalContextWrapper } from "./context/GlobalContext"
import AccountPage from "./pages/AccountPage"

import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import RegisterPage from "./pages/RegisterPage"
import TermsConditionsPage from "./pages/TermsConditionsPage"
import VerifyEmailPage from "./pages/VerifyEmailPage"
import TransactionPage from "./pages/TransactionPage"


const App = () => {
	return (
		<BrowserRouter>
			<GlobalContextWrapper>
				<Layout>
					<Routes>
						<Route path="/" element={<DashboardPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/forgot-password" element={<ForgotPasswordPage />} />
						<Route path="/reset-password" element={<ResetPasswordPage />} />
						<Route path="/verify-email" element={<VerifyEmailPage />} />
						<Route path="/account" element={<AccountPage />} />
						<Route path="/buy" element={<BuyPage />} />
						<Route path="/referrals" element={<ReferralsPage />} />
						<Route path="/transaction" element={<TransactionPage />} />
						<Route path="/terms" element={<TermsConditionsPage />} />
						<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
					</Routes>
				</Layout>
			</GlobalContextWrapper>
		</BrowserRouter>
	)
}

export default App
