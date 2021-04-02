import React from "react";
import TextInput from "./ui/TextInput";

export function One(): JSX.Element {
	return (
		<div>
			<form className="flex flex-col">
				<TextInput splitChar="-" splitIndex={4} maxLength={19} label="Card Number" numbersOnly />

				<label>
					Cardholder Name
					<input type="text" id="cardholder-name" name="cardholder-name" />
				</label>

				<TextInput label="Expiration Date" maxLength={4} numbersOnly splitChar="/" splitIndex={2} />

				<TextInput label="CVC" maxLength={3} numbersOnly />

				<button>Submit</button>
			</form>
		</div>
	);
}

export function Two(): JSX.Element {
	return (
		<div>
			<form>
				<TextInput splitChar="-" splitIndex={4} maxLength={19} label="Card Number" numbersOnly />

				<label>
					Cardholder Name
					<input type="text" id="cardholder-name" name="cardholder-name" />
				</label>

				<TextInput label="Expiration Date" maxLength={4} numbersOnly splitChar="/" splitIndex={2} />

				<TextInput label="CVC" maxLength={3} numbersOnly />

				<button>Submit</button>
			</form>
		</div>
	);
}
