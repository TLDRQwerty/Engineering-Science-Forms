import React from 'react';
import Introduction from './introduction';
import useStorage from './hooks/useStorage'
import { One, Two } from './Questions'
import Button from './ui/Button';

import css from './Questionnaire.module.css';

export default function() {
	const [current, setCurrent] = useStorage('current-question', '1');

	const getQuestion = () => {
		switch(current && parseInt(current)) {
			case 1:
				return <One />
			case 2:
				return <Two />
			default:
				return (
					<div>foobar</div>
				)
		}
	}

	const handleNext = () => {
		setCurrent((parseInt(current) + 1).toString());
	}

	const handleBack = () => {
		setCurrent((parseInt(current) - 1).toString());
	}

	return (
		<div className={css.wrapper}>
			<Introduction />
			{getQuestion()}
			<div>
				<Button label="Back" onClick={handleBack}/>
				<span>{current}/TBD</span>
				<Button label="Next" onClick={handleNext}/>
			</div>
		</div>
	)
}

