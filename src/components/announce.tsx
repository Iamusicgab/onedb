const Announce = (props: any) => {
	return (
		<div className="bg-white h-52 grid items-between justify-between p-3 rounded-lg shadow-md border-2 border-accent">
			<div className="grid gap-1">
				<span className="text-lg font-bold">No Classes!</span>
				<span className="text-sm h-24 max-h-24 line-clamp-5">
					This is where the description of the text goes. This is where the
					description of the text goes. This is where the
				</span>
				<div className="grid grid-flow-col items-center justify-start gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="-0.5 -0.5 16 16"
						fill="none"
						stroke="#000000"
						strokeLinecap="round"
						strokeLinejoin="round"
						id="Calendar--Streamline-Lucide"
						height={20}
						width={20}
					>
						<desc>{"Calendar Streamline Icon: https://streamlinehq.com"}</desc>
						<path d="M5 1.25v2.5" strokeWidth={1} />
						<path d="M10 1.25v2.5" strokeWidth={1} />
						<path
							d="M3.125 2.5h8.75s1.25 0 1.25 1.25v8.75s0 1.25 -1.25 1.25H3.125s-1.25 0 -1.25 -1.25V3.75s0 -1.25 1.25 -1.25"
							strokeWidth={1}
						/>
						<path d="M1.875 6.25h11.25" strokeWidth={1} />
					</svg>
					<span className="text-sm font-light">January 25, 2025 at 7:02PM</span>
				</div>
			</div>
		</div>
	);
};

export default Announce;
