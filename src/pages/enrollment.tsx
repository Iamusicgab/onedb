import EnrollmentCard from "../components/enrollmentcard";
import Header from "../components/Header";
import TuitionCard from "../components/tuitioncard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getStudentData } from "../hooks/AuthContext";
import { useState } from "react";

const Enrollment = () => {
	const [student, setStudent] = useState<any>();
	const [loading, setLoading] = useState(true);
	const user = useContext(AuthContext);
	useEffect(() => {
		getStudentDatas();
	}, []);
	const getStudentDatas = async () => {
		const student = await getStudentData(user.email);
		setLoading(false);
		console.log(student);
		setStudent(student);
	};
	return loading ? (
		<>Loading</>
	) : (
		<div>
			<div className="grid gap-4">
				<Header title="Enrollment" />

				<EnrollmentCard
					status="Currently Enrolled"
					firstName={student.firstName}
					middleName={student.middleName}
					lastName={student.lastName}
					grade={student.gradeLevel}
					section={student.section}
					adviser={student.adviser}
				/>

				<TuitionCard tuition="23,555.12" due="January 25, 2025" />
			</div>
		</div>
	);
};

export default Enrollment;
