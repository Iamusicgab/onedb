import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Account from "./pages/account";
import Courses from "./pages/courses";
import Enrollment from "./pages/enrollment";
import Resources from "./pages/resources";
import PrivateRoute from "./components/PrivateRoute";
import UserContext from "./hooks/AuthContext";
import Announcements from "./pages/announcements";
import Grades from "./pages/grades";

function App() {
	return (
		<>
			<div className="p-6">
				<BrowserRouter>
					<UserContext>
						<Routes>
							<Route path="/login" element={<Login />} />

							<Route element={<PrivateRoute />}>
								<Route path="/" element={<Home />} />
								<Route path="/account" element={<Account />} />
								<Route path="/courses" element={<Courses />} />
								<Route path="/enrollment" element={<Enrollment />} />
								<Route path="/resources" element={<Resources />} />
								<Route path="/announcements" element={<Announcements />} />
								<Route path="/grades" element={<Grades />} />
							</Route>
						</Routes>
					</UserContext>
				</BrowserRouter>
				<div className="h-32"></div>
			</div>
		</>
	);
}

export default App;
