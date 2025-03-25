import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { gradesGrade, getGrades } from "../hooks/AuthContext";

function Grades() {
	const user = useContext(AuthContext);
	const [gradeLevel, setGradeLevel] = useState<any>();
	const [grades, setGrades] = useState<any>();
	const [selectedGrade, setSelectedGrade] = useState<any>("Grade");
	const [loading, setLoading] = useState(true);
	const getCurrentGradeLevel = async () => {
		const grade = await gradesGrade(user.email);
		setGradeLevel(grade);
		setLoading(false);
		console.log(gradeLevel);
	};
	useEffect(() => {
		getCurrentGradeLevel();
	}, []);

	const getYourGrades = async (e: any) => {
		setSelectedGrade(e.target.value);
		setLoading(true);
		console.log(e.target.value);
		const grade = await getGrades(user.email, e.target.value);
		setGrades(grade);
		setLoading(false);
	};

	return loading ? (
		<>Loading</>
	) : (
		<div className="grid gap-4">
			<Header title="Grades" />
			<div className="flex flex-col gap-2">
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Grade</legend>
					<select
						className="select"
						title="Grades Selector"
						onChange={getYourGrades}
						value={selectedGrade}
					>
						<option disabled={true}>Grade</option>
						{gradeLevel.map((doc: any, index: any) => {
							return <option value={index}>{doc.gradelevel}</option>;
						})}
					</select>
				</fieldset>
			</div>
			<div className="overflow-x-auto">
				{/* head */}

				{selectedGrade == "Grade" ? (
					<td>Math</td>
				) : (
					grades.semesters.map((doc: any) => {
						return (
							<>
								<span className="bg-yellow-50 w-full font-bold">
									Term {doc.semester}
								</span>
								<table className="table">
									<thead>
										<tr>
											<th>Subject</th>
											<th>Grade</th>
										</tr>
									</thead>
									<tbody>
										{doc.subjects.map((doc: any) => {
											return (
												<tr>
													<td>{doc.subjectName}</td>
													<td>{doc.grade}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</>
						);
					})
				)}
			</div>
		</div>
	);
}

export default Grades;
