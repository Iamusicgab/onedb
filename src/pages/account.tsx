import AccountCard from "../components/accountcard";

import Header from "../components/Header";
import LargeButton from "../components/largebutton";
import { useContext } from "react";
import { AuthContext, logout } from "../hooks/AuthContext";

const Account = () => {
	const user = useContext(AuthContext);
	return (
		<div>
			<div className="grid gap-4">
				<Header title="Account" />
				<AccountCard
					name={user.displayName}
					uid={user.uid}
					email={user.email}
				/>
				<button onClick={logout} title="Signout">
					<LargeButton title="Logout" link="/" />
				</button>
			</div>
		</div>
	);
};

export default Account;
