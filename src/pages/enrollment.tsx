import EnrollmentCard from "../components/enrollmentcard";
import TuitionCard from "../components/tuitioncard";

const Enrollment = () => {
	return (
		<div>
			<div className="grid gap-4">
				<div className="">
					<span className="text-2xl font-bold">Enrollment</span>
				</div>

				<EnrollmentCard
					status="Currently Enrolled"
					strand="STEM"
					grade="12"
					section="Blessed Alberto Marvelli"
					adviser="Mrs. Monica B. Cruz"
					payment="Quarterly"
				/>

				<TuitionCard tuition="23,555.12" due="January 25, 2025" />
			</div>
		</div>
	);
};

export default Enrollment;
