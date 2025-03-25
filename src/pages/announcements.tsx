import Announce from "../components/announce";
import Header from "../components/Header";
import { getAnnouncements } from "../hooks/AuthContext";
const announcementsQuery = await getAnnouncements();

function announcements() {
	return (
		<>
			<div className="grid gap-4">
				<Header title="Announcements" />
				<div className="flex flex-col gap-2">
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
				</div>
			</div>
		</>
	);
}

export default announcements;
