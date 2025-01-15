

import Announce from "../components/announce";

import LargeButton from "../components/largebutton";

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
						<Announce />
						<Announce />
						<Announce />
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
