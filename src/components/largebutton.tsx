import { useNavigate } from "react-router-dom";

const LargeButton = (props: any) => {
	const nav = useNavigate();
	return (
		<a href={props.redirectLink}>
			<button
				className="bg-accent text-white w-full h-24 rounded-lg shadow-md border-2 border-accent"
				onClick={() => nav(props.link)}
			>
				<span className="text-lg font-bold">{props.title}</span>
			</button>
		</a>
	);
};

export default LargeButton;
