import onedb from "../assets/onedb.svg";
import { signInWithGoogle, AuthContext } from "../hooks/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
	const nav = useNavigate();
	const user = useContext(AuthContext);
	useEffect(() => {
		if (user) {
			nav("/");
		}
	}, []);
	const handleLogin = async () => {
		await signInWithGoogle();
	};
	return (
		<div className=" h-[70vh] flex justify-center items-center">
			<div className="flex flex-col gap-4 justify-center items-center">
				<div className="flex justify-between items-center gap-2">
					<img src={onedb} alt="OneDB" className="h-12 md:h-16" />
				</div>
				<button className="btn bg-white text-black border-[#e5e5e5] flex justify-center items-center">
					<svg
						aria-label="Google logo"
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<g>
							<path d="m0 0H512V512H0" fill="#fff"></path>
							<path
								fill="#34a853"
								d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
							></path>
							<path
								fill="#4285f4"
								d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
							></path>
							<path
								fill="#fbbc02"
								d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
							></path>
							<path
								fill="#ea4335"
								d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
							></path>
						</g>
					</svg>
					<span className="md:text-lg" onClick={handleLogin}>
						Login with One-Bosco Account
					</span>
				</button>
			</div>
		</div>
	);
}

export default Login;
