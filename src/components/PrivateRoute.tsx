import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import Footer from "./Footer";
function PrivateRoute() {
	const user = useContext(AuthContext);
	return user == undefined ? (
		<Navigate to="/login" />
	) : (
		<>
			<Outlet />
			<Footer />
		</>
	);
}

export default PrivateRoute;
