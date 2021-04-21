import React, { ReactNode } from "react";
import Introduction from "./introduction";
import useStorage from "./hooks/useStorage";
import { DateDropDownView, HorizontalView, DashOrNoDash, MultiBoxes, PlaceHolder, ErroredInput } from "./Questions";
import Button from "./ui/Button";
import SplitLayout from "./ui/SplitLayout";
import DefaultView from "./DefaultView";

export default function Questionnaire(): JSX.Element {
	const [current, setCurrent] = useStorage("current-question", "1");

	const getQuestion = (): [ReactNode, ReactNode] => {
		switch (current && parseInt(current)) {
			case 1:
				return [<DefaultView key="default" />, <HorizontalView key="horizontal" />];
			case 2:
				return [<DefaultView key="default" />, <DateDropDownView key="date-dropdown" />];
			case 3:
				return [<DefaultView key="default" />, <DashOrNoDash key="dash-or-no-dash" />];
			case 4:
				return [<DefaultView key="default" />, <MultiBoxes key="multibox" />];
			case 5:
				return [<DefaultView key="default" />, <PlaceHolder key="placeholder" />];
			case 6:
				return [<DefaultView key="default" />, <ErroredInput key="errored-input" />];
			default:
				return [<div key="foo">foobar</div>, <div key="bar">bar</div>];
		}
	};

	const handleNext = () => {
		setCurrent((parseInt(current) + 1).toString());
	};

	const handleBack = () => {
		setCurrent((parseInt(current) - 1).toString());
	};

	const questions = getQuestion();

	const totalQuestions = 6;
	const atLastQuestion = parseInt(current) >= totalQuestions;
	const atFirstQuestion = parseInt(current) <= 1;

	return (
		<div className="h-full grid grid-flow-row content-between justify-items-center mx-auto">
			<div className="rounded border border-black bg-white px-14 py-6">
				<Introduction />
			</div>
			<SplitLayout left={questions[0]} right={questions[1]} />
			<div className="rounded border border-black bg-white px-10 py-6 space-x-5">
				<Button type="Secondary" label="Back" onClick={handleBack} disabled={atFirstQuestion}/>
				<span>{current}/{totalQuestions}</span>
				<Button type="Secondary" label="Next" onClick={handleNext} disabled={atLastQuestion} />
			</div>
		</div>
	);
}
