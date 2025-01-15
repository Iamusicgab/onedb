import EnrollmentCard from "../components/enrollmentcard";
import LargeButton from "../components/largebutton";

const Account = () => {
	return (
		<div>
			<div className="grid gap-4">
				<div>
					<span className="text-2xl font-bold">Account</span>
				</div>
				<EnrollmentCard
					status="Currently Enrolled"
					strand="STEM"
					grade="12"
					section="Blessed Alberto Marvelli"
					adviser="Mrs. Monica B. Cruz"
					payment="Quarterly"
				/>
				<LargeButton title="Logout" link="/" />
			</div>
		</div>
	);
};

export default Account;
