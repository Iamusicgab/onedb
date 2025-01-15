import LargeButton from "../components/largebutton";

const Resources = () => {
	return (
		<div>
			<div className="grid gap-4">
				<div className="">
					<span className="text-2xl font-bold">Resources</span>
				</div>
				<div className="grid gap-2">
					<LargeButton title="Previous Announcements" link="/" />
					<LargeButton title="Companion of Youth" link="/" />
					<LargeButton title="Student Handbook" link="/" />
					<LargeButton title="LLRC" link="/" />
				</div>
			</div>
		</div>
	);
};

export default Resources;
