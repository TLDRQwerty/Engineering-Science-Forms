import React from "react";
import Introduction from "./introduction";
import useStorage from "./hooks/useStorage";
import { One, Two } from "./Questions";
import Button from "./ui/Button";
import SplitLayout from "./ui/SplitLayout";

export default function Questionnaire(): JSX.Element {
	const [current, setCurrent] = useStorage("current-question", "1");

	const getQuestion = () => {
		switch (current && parseInt(current)) {
			case 1:
				return <One />;
			case 2:
				return <Two />;
			default:
				return <div>foobar</div>;
		}
	};

	const handleNext = () => {
		setCurrent((parseInt(current) + 1).toString());
	};

	const handleBack = () => {
		setCurrent((parseInt(current) - 1).toString());
	};

	return (
		<div className="h-full grid grid-flow-row content-between justify-items-center mx-auto">
			<div className="rounded border border-black bg-white px-14 py-6">
				<Introduction />
			</div>
			<SplitLayout>
				<div className="">{getQuestion()}</div>
			</SplitLayout>
			<div className="rounded border border-black bg-white px-10 py-6 space-x-5">
				<Button label="Back" onClick={handleBack} />
				<span>{current}/TBD</span>
				<Button label="Next" onClick={handleNext} />
			</div>
		</div>
	);
}
