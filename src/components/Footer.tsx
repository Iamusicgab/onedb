import accountIcon from "../assets/account.svg";
import homeIcon from "../assets/dashboard.svg";
import coursesIcon from "../assets/courses.svg";
import enrollmentIcon from "../assets/enrollment.svg";
import resourcesIcon from "../assets/resources.svg";

import { useNavigate } from "react-router";
import { useLocation } from "react-router";

function Footer() {
	const nav = useNavigate();
	const location = useLocation();
	return (
		<div className="fixed bottom-0 left-0 w-full h-28 p-4">
			<div className="flex flex-col items-center">
				<div className="border border-gray-200/80 py-3 px-2 flex md:gap-2 shadow-lg rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
					<button
						className="group relative px-3 cursor-pointer"
						onClick={() => nav("/")}
					>
						<div
							className={
								"flex h-8 w-8 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300" +
								(location.pathname === "/" ? " bg-blue-50 text-blue-600" : "")
							}
						>
							<img src={homeIcon} className="h-5" alt="Home Icon" />
						</div>
						<span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
							Home
						</span>
					</button>
					<button
						className="group relative px-3 cursor-pointer"
						onClick={() => nav("/resources")}
					>
						<div
							className={
								"flex h-8 w-8 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300" +
								(location.pathname === "/resources"
									? " bg-blue-50 text-blue-600"
									: "")
							}
						>
							<img src={resourcesIcon} className="h-5" alt="Resources Icon" />
						</div>
						<span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
							Resources
						</span>
					</button>
					<button
						className="group relative px-3 cursor-pointer"
						onClick={() => nav("/enrollment")}
					>
						<div
							className={
								"flex h-8 w-8 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300" +
								(location.pathname === "/enrollment"
									? " bg-blue-50 text-blue-600"
									: "")
							}
						>
							<img src={enrollmentIcon} className="h-5" alt="Enrollment Icon" />
						</div>
						<span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
							Enrollment
						</span>
					</button>
					<button
						className="group relative px-3 cursor-pointer"
						onClick={() => nav("/courses")}
					>
						<div
							className={
								"flex h-8 w-8 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300" +
								(location.pathname === "/courses"
									? " bg-blue-50 text-blue-600"
									: "")
							}
						>
							<img src={coursesIcon} className="h-5" alt="Courses Icon" />
						</div>
						<span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
							Courses
						</span>
					</button>
					<button
						className="group relative px-3 cursor-pointer"
						onClick={() => nav("/account")}
					>
						<div
							className={
								"flex h-8 w-8 items-center justify-center rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300" +
								(location.pathname === "/account"
									? " bg-blue-50 text-blue-600"
									: "")
							}
						>
							<img src={accountIcon} className="h-5" alt="Account Icon" />
						</div>
						<span className="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white">
							Account
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
