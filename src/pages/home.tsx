import Announce from "../components/announce";
import Header from "../components/Header";

import LargeButton from "../components/largebutton";
import { getAnnouncements3 } from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

const announcementsQuery = await getAnnouncements3();

const Home = () => {
	const nav = useNavigate();
	return (
		<div>
			<div className="grid gap-4">
				<Header title="Dashboard" />
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
						<button
							className="text-accent"
							onClick={() => {
								nav("/announcements");
							}}
						>
							View More {">"}
						</button>
					</div>
				</div>
				<div>
					<div>
						<span className="text-accent text-lg">Quick Access</span>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<LargeButton title="Grades" link="/grades" />
						<LargeButton title="Tuition" link="/enrollment" />
						<LargeButton title="Pending Tasks" link="/courses" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
