const AccountCard = (props: any) => {
	return (
		<div className="grid gap-4">
			<div className="grid gap-3 bg-white p-4 rounded-lg border-2 border-accent shadow-md">
				<div className="grid gap-1">
					<span className="font-light text-sm">Name</span>
					<span className="font-bold truncate">{props.name}</span>
				</div>
				<div className="grid gap-1">
					<span className="font-light text-sm">UID</span>
					<span className="font-bold truncate">{props.uid}</span>
				</div>
				<div className="grid gap-1">
					<span className="font-light text-sm">Email Address</span>
					<span className="font-bold truncate">{props.email}</span>
				</div>
			</div>
		</div>
	);
};

export default AccountCard;
