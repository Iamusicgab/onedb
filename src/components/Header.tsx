import onedb from "../assets/onedb.svg";
import Profile from "./profile";

function Header(props: any) {
	return (
		<>
			<div className="flex justify-between items-center gap-2">
				<img src={onedb} alt="OneDB" className="h-8" />
				<Profile />
			</div>
			<div>
				<span className="text-2xl font-bold">{props.title}</span>
			</div>
		</>
	);
}

export default Header;
