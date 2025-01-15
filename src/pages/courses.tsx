import Subject from "../components/subject";
import Tasks from "../components/tasks";

const Courses = () => {
	return (
		<div>
			<div className="grid gap-4">
				<div>
					<span className="text-2xl font-bold">Courses</span>
				</div>
				<div>
					<div>
						<span className="text-accent text-lg">Tasks</span>
					</div>
					<Tasks pending="4" missing="0" finished="144" />
				</div>
				<div className="grid gap-2">
					<div>
						<span className="text-accent text-lg">Subjects</span>
					</div>
					<Subject
						subject="Contemporary Arts from the Regions and Others"
						teacher="Ms. Winnie Crystal Cruz"
					/>
					<Subject subject="Entrepreneurship" teacher="Ms. Elvie Ruiz" />
					<Subject
						subject="English for Academic and Professional Purposes"
						teacher="Mrs. Monica B. Cruz"
					/>
					<Subject
						subject="Practical Research 2"
						teacher="Mr. Thommas Jhon Azuma"
					/>
				</div>
			</div>
		</div>
	);
};

export default Courses;
