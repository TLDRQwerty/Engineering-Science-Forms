import React from 'react';

export default function App() {
	return (
		<>
			<form className="bg-gray-400">
				<label>
					Card Number
					<input type="text" id="card-number" name="card-number" />
				</label>

				<label>
					Cardholder Name
					<input type="text" id="cardholder-name" name="cardholder-name" />
				</label>

				<label>
					Expiration Date
					<input type="text" id="expiration-date" name="expiration-date" />
				</label>

				<label>
					CVC
					<input type="text" id="cvc" name="cvc" />
				</label>

				<button>Submit</button>
			</form>
		</>
	)
}

