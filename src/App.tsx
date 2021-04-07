import React from "react";
import Questionnaire from "./Questionnaire";

import css from "./App.module.css";

export default function App(): JSX.Element {
	return (
		<div className="bg-gray-400">
			<div className={css.wrapper}>
				<Questionnaire />
			</div>
		</div>
	);
}
