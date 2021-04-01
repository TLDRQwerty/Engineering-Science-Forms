import React from 'react';
import Introduction from './introduction';
import Questionnaire from './Questionnaire';

import css from './App.module.css'

export default function App() {
	return (
		<div className={css.wrapper}>
			<Introduction />
			<Questionnaire />
		</div>
	)
}

