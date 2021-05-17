import React from "react";
import Link from "./ui/Link";

export default function Introduction(): JSX.Element {
	return (
		<div className="prose">
			In this test you will need to fill out the form and complete the
			questionnaire.  Please use the Google Form Link below:
			<br/>
			<Link to="https://forms.gle/hvDF3ULaVuwBSbGB8" label="Google Form Link" />
			<section className="px-16 mt-4 select-none">
				<div className="flex justify-between">
					<span>Card Holder name</span><span>John Smith</span>
				</div>
				<div className="flex justify-between">
					<span>Card number</span><span>4242 4242 4242 4242</span>
				</div>
				<div className="flex justify-between">
					<span>Expiration Date</span><span>06/2020</span>
				</div>
				<div className="flex justify-between">
					<span>CVC</span><span>321</span>
				</div>
			</section>
			<div className="text-red-400 font-bold uppercase">
				Do not use your real card information!
			</div>
		</div>
	);
}
