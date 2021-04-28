import React from "react";
import Link from "./ui/Link";

export default function Introduction(): JSX.Element {
	return (
		<div className="prose">
			In this test you will need to fill out the form and complete the
			questionnaire.  Please use the Google Form Link below:
			<br/>
			<Link to="https://forms.gle/hvDF3ULaVuwBSbGB8" label="Google Form Link" />
		</div>
	);
}
