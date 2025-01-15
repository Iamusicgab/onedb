const Tasks = (props: any) => {
	return (
		<div className="grid gap-2">
			<div className="bg-white p-4 rounded-lg border-2 border-accent shadow-md">
				{props.pending} Pending tasks
			</div>
			<div className="bg-white p-4 rounded-lg border-2 border-accent shadow-md">
				{props.missing} Missing tasks
			</div>
			<div className="bg-white p-4 rounded-lg border-2 border-accent shadow-md">
				{props.finished} Finished Tasks
			</div>
		</div>
	);
};

export default Tasks;
