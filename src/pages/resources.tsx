import LargeButton from "../components/largebutton";

const Resources = () => {
	return (
		<div>
			<div className="grid gap-4">
				<div className="">
					<span className="text-2xl font-bold">Resources</span>
				</div>
				<div className="grid gap-2">
					<LargeButton title="View Grades" link="/grades" />
					<LargeButton title="Previous Announcements" link="/announcements" />
					<LargeButton
						title="Student Handbook"
						redirectLink="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=1376453f9a&attid=0.1&permmsgid=msg-f:1779885673239026153&th=18b36c96ee3819e9&view=att&disp=inline&realattid=f_lnsee9u80&zw&saddbat=ANGjdJ-KtQjE_rtBtC0qWK1L90LcVm884HdO_EHC1-hk4ISyyvmqAkGKiiXRePv6dbyGriCniS5trLqukNuo3HHTSa-EbqUM57zU2zutgkGDkwmuCncKO_bXdPzHkeWdpWnFj-04W4beV4o-BVWtKxnFZINmQZ2vGeDnHfy-o6fL3Z_BRrw0AbzvPUVqsOerJEMzfxj-nakTmxJrxFo3j_LuK8n-Q6REEHfYqnX5HL8hV2VCX4nU2Wl7ULnfZuMOqBKUBYDocjyEH1rK0D3S_XquKUZQJQvG0YeuQ2tCHLP1JsixFY4fwZes7v1DE6IVuq-3bSVtHZxZfrguVwhmlQX88U9sOxF3s--nj5fJbxNBBDDgP4aeNSjyK7gvuGdwPMJHPlrlCJa0it71CKbtBlek4n6iaWkNAkLfZLLwQVjKVWvSEb0iGCS6qkM73jEt2nwJk8J4NCsIR8jrZoiywKAlTChB_9suEgMiDkACv7wI43wC-UJHp2xgrDQ0hObpO2yHz7U_DYqBNjWcJmcOkvy08pn6u2yJaRuGx1IrdH-av2WVlAfrsSfAtXb3ZD5snDYR4DJPG1zb6hMV1OsaaO-SI8Jrkq9KZVnIBVHU78bsxX2Zq6cbNVbtKgsgeOW6uQnwThs-uVsy9aDoiyVEHXMIhCdaywmVJiRZixzHUoW9As-SsN51EYDqMmt9r3fZ8rIGY4UfITMyQk0vKHwaUAkMhQmxq5tmhR1pRtG2tETeMM6ee6dO5DOj2eSbiURes6LCbglxZ4eDQaNb7-oq8rDtiv4YdRQPFGfrFC7TFad--UxINnsPe8IWjEVTVEWNS5mKepxYAiqTvN1elrNmxyJ6GtcM_piHLDpTS0vBeWQqwca0NXV_mBS_gnyCrkWq_754xPQGcYDxjphqvNgEa4KOx59EIcUPrnM7nx7FM-5ZryRscaPTRRlJcnFVS3ng8FofFqf3BL9ZIap6YZQ5Lb1lTttkrMKJ1jtQJao7Q2ZeMnhTKIktQf1HTLieNudBjYmz-MQZ3XYWxxLxpDgO"
					/>
					<LargeButton
						title="Brainee BED"
						redirectLink="https://dbti-makati.braineeph.com/"
					/>
					<LargeButton
						title="Brainee SHS"
						redirectLink="https://dbtishs-edu.braineeph.com/"
					/>
					<LargeButton
						title="LLRC"
						redirectLink="https://library.donboscomakati.edu.ph/"
					/>
				</div>
			</div>
		</div>
	);
};

export default Resources;
