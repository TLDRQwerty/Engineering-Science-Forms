import React, { ReactNode } from "react";
import Introduction from "./introduction";
import useStorage from "./hooks/useStorage";
import { DateDropDownView, HorizontalView, DashOrNoDash, MultiBoxes, PlaceHolder, ErroredInput } from "./Questions";
import Button from "./ui/Button";
import DefaultView from "./DefaultView";

export default function Questionnaire(): JSX.Element {
	const [current, setCurrent] = useStorage("current-question", "1");

	const getQuestion = (): ReactNode => {
		switch (current && parseInt(current)) {
			case 1:
				return <HorizontalView key="horizontal" />;
			case 2:
				return <DateDropDownView key="date-dropdown" />;
			case 3:
				return <DashOrNoDash key="dash-or-no-dash" />;
			case 4:
				return <MultiBoxes key="multibox" />
			case 5:
				return <PlaceHolder key="placeholder" />;
			case 6:
				return <ErroredInput key="errored-input" />;
			default:
				return <div key="bar">bar</div>;
		}
	};

	const handleNext = () => {
		setCurrent((parseInt(current) + 1).toString());
	};

	const handleBack = () => {
		setCurrent((parseInt(current) - 1).toString());
	};

	const question = getQuestion();

	const totalQuestions = 6;
	const atLastQuestion = parseInt(current) >= totalQuestions;
	const atFirstQuestion = parseInt(current) <= 1;

	return (
		<div className="h-full grid grid-flow-row content-between justify-items-center mx-auto">
			<div className="rounded border border-black bg-white px-14 py-6">
				<Introduction />
			</div>
		<div className="flex flex-row space-x-4">
			<div className="flex-col">
				<h1 className="text-center text-3xl font-bold text-gray-900">{current}</h1>
				<div className="rounded border border-black bg-white px-14 py-10">{question}</div>
			</div>
			</div>
			<div className="rounded border border-black bg-white px-10 py-6 space-x-5">
				<Button type="Secondary" label="Back" onClick={handleBack} disabled={atFirstQuestion}/>
				<span>{current}/{totalQuestions}</span>
				<Button type="Secondary" label="Next" onClick={handleNext} disabled={atLastQuestion} />
			</div>
		</div>
	);
}
