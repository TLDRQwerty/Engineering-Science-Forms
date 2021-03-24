import React from 'react';
import useStorage from './hooks/useStorage'
import { One } from './Questions'
import Button from './ui/Button';

export default function() {
	const [current, setCurrent] = useStorage('current-question', '1');

	const getQuestion = () => {
		switch(current && parseInt(current)) {
			case 1:
				return (
					<One />
				)
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
		<div>
			{getQuestion()}
			<div>
				<Button label="Back" onClick={handleBack}/>
				<span>{current}/TBD</span>
				<Button label="Next" onClick={handleNext}/>
			</div>
		</div>
	)

}

