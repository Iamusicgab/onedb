const EnrollmentCard = (props: any) => {
	return (
		<div className="grid gap-4">
			<div className="grid gap-3 bg-white p-4 rounded-lg border-2 border-accent shadow-md">
				<div className="grid gap-1">
					<span className="font-light text-sm">Enrollment Status</span>
					<span className="font-bold">{props.status}</span>
				</div>
				<div className="grid gap-1">
					<span className="font-light text-sm">Strand</span>
					<span className="font-bold">{props.strand}</span>
				</div>
				<div className="grid gap-1">
					<span className="font-light text-sm">Grade Level</span>
					<span className="font-bold">{props.grade}</span>
				</div>
				<div className="grid gap-1">
					<span className="font-light text-sm">Section</span>
					<span className="font-bold">{props.section}</span>
				</div>
				<div className="grid gap-1">
					<span className="font-light text-sm">Adviser</span>
					<span className="font-bold">{props.adviser}</span>
				</div>
				<div className="grid gap-1">
					<span className="font-light text-sm">Payment Plan</span>
					<span className="font-bold">{props.payment}</span>
				</div>
			</div>
		</div>
	);
};

export default EnrollmentCard;
