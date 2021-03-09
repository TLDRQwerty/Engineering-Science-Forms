import React from 'react';
import ReactDOM from 'react-dom';

const element = document.querySelector('#react-root');

if (!element) throw Error('Failed to find element');

function App() {
	return (
		<div>
			foobar
		</div>
	)
}

ReactDOM.render(<App />, element);
