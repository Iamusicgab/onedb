const TuitionCard = (props: any) => {
	return (
		<div className="grid gap-4">
			<div className="grid gap-3 bg-white p-4 rounded-lg border-2 border-accent shadow-md">
				<div className="grid gap-1">
					<div className="grid">
						<span className="font-light text-sm">Tuition Fee</span>
						<span className="font-bold">PHP {props.tuition}</span>
					</div>

					<div className="grid grid-flow-col justify-between">
						<div className="grid grid-flow-col items-center justify-start gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="-0.5 -0.5 16 16"
								fill="none"
								stroke="#000000"
								strokeLinecap="round"
								strokeLinejoin="round"
								id="Calendar--Streamline-Lucide"
								height={16}
								width={16}
							>
								<desc>
									{"Calendar Streamline Icon: https://streamlinehq.com"}
								</desc>
								<path d="M5 1.25v2.5" strokeWidth={1} />
								<path d="M10 1.25v2.5" strokeWidth={1} />
								<path
									d="M3.125 2.5h8.75s1.25 0 1.25 1.25v8.75s0 1.25 -1.25 1.25H3.125s-1.25 0 -1.25 -1.25V3.75s0 -1.25 1.25 -1.25"
									strokeWidth={1}
								/>
								<path d="M1.875 6.25h11.25" strokeWidth={1} />
							</svg>
							<span className="text-xs font-light">Due at {props.due}</span>
						</div>
						<div>
							<a href="/pay">
								<button className="bg-primary px-2 py-1 rounded-lg shadow-md border-2 border-accent">
									<span className="text-sm font-bold">Pay Now</span>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TuitionCard;
