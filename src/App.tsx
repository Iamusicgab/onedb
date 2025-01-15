import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Account from "./pages/account";
import Courses from "./pages/courses";
import Enrollment from "./pages/enrollment";
import Resources from "./pages/resources";

import accountIcon from "./assets/account.svg";
import homeIcon from "./assets/dashboard.svg";
import coursesIcon from "./assets/courses.svg";
import enrollmentIcon from "./assets/enrollment.svg";
import resourcesIcon from "./assets/resources.svg";

import onedb from "./assets/onedb.svg";
import Profile from "./components/profile";

function App() {
	return (
		<>
			<div className="p-6">
				<div className="flex justify-between items-center gap-2">
					<img src={onedb} alt="OneDB" className="h-8" />
					<Profile />
				</div>
				<BrowserRouter>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Home />} />
						<Route path="/account" element={<Account />} />
						<Route path="/courses" element={<Courses />} />
						<Route path="/enrollment" element={<Enrollment />} />
						<Route path="/resources" element={<Resources />} />
					</Routes>
				</BrowserRouter>
				<div className="h-32"></div>
				<div className="fixed bottom-0 left-0 w-full h-28 p-4">
					<div className="bg-white border-4 h-full rounded-full shadow-2xl p-2 px-8 grid grid-flow-col gap-2 items-center justify-between">
						<a href="/">
							<img src={homeIcon} alt="Home" className="h-6" />
						</a>
						<a href="/resources">
							<img src={resourcesIcon} alt="Resources" className="h-6" />
						</a>
						<a href="/enrollment">
							<img src={enrollmentIcon} alt="Enrollment" className="h-6" />
						</a>
						<a href="/courses">
							<img src={coursesIcon} alt="Courses" className="h-6" />
						</a>
						<a href="/account">
							<img src={accountIcon} alt="Account" className="h-6" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
