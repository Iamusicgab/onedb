const Subject = (props: any) => {
	return (
		<div>
			<div className="grid gap-2">
				<div className="bg-white p-4 rounded-lg border-2 border-accent shadow-md grid gap-1">
					<span className="truncate"> {props.subject}</span>
					<span className="text-sm font-light text-accent truncate">
						{" "}
						{props.teacher}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Subject;
