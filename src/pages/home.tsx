import Announce from "../components/announce";

import LargeButton from "../components/largebutton";
import { db } from "../components/firebase";
import {
	collection,
	getDocs,
	query,
	orderBy,
	doc,
	getDoc,
	limit,
} from "firebase/firestore";

const q = query(
	collection(db, "announcements"),
	orderBy("date", "desc"),
	limit(3)
);
const announcementsQuery = await getDocs(q);

const Home = () => {
	return (
		<div>
			<div className="grid gap-4">
				<div className="">
					<span className="text-2xl font-bold">Good day, Gabriel!</span>
				</div>
				<div>
					<div>
						<span className="text-accent text-lg">Announcements</span>
					</div>
					<div className="grid gap-2">
						{announcementsQuery.docs.map((doc) => {
							const data = doc.data();
							return (
								<Announce
									title={data.title}
									description={data.description}
									date={
										data.date.toDate().toLocaleString("default", {
											month: "long",
											day: "numeric",
											year: "numeric",
										}) +
										" at " +
										data.date.toDate().toLocaleTimeString()
									}
								/>
							);
						})}
						<a href="/resources" className="text-accent">
							View More {">"}
						</a>
					</div>
				</div>
				<div>
					<div>
						<span className="text-accent text-lg">Quick Access</span>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<LargeButton title="Grades" link="/" />
						<LargeButton title="Schedule" link="/" />
						<LargeButton title="Tuition" link="/" />
						<LargeButton title="Pending Tasks" link="/" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
