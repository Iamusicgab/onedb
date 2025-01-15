const LargeButton = (props: any) => {
	return (
		<a href="/grades">
			<button className="bg-primary w-full h-24 rounded-lg shadow-md border-2 border-accent">
				<span className="text-lg font-bold">{props.title}</span>
			</button>
		</a>
	);
};

export default LargeButton;
