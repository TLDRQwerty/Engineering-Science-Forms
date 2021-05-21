import React from "react";
import Button from "./ui/Button";
import CardInput from "./ui/CardInput";
import Form from "./ui/Form";
import TextInput from "./ui/TextInput";

export function HorizontalView(): JSX.Element {
	return (
		<div>
			<Form>
				<div className="flex flex-row space-x-2">
					<TextInput splitChar="-" splitIndex={4} maxLength={19} label="Card Number" numbersOnly />

					<TextInput label="Card Holder Name" />
				</div>

				<div className="flex flex-row space-x-2">
					<TextInput label="Expiration Date" maxLength={5} numbersOnly splitChar="/" splitIndex={2} />

					<TextInput label="CVC" maxLength={3} numbersOnly />
				</div>

				<Button label="Submit" type="Primary" />
			</Form>
		</div>
	);
}

export function DateDropDownView(): JSX.Element {
	return (
		<div>
			<Form>
				<TextInput splitChar="-" splitIndex={4} maxLength={19} label="Card Number" numbersOnly />

				<TextInput label="Card Holder Name" />

				<div>
					<label className="block text-sm font-medium text-gray-700" htmlFor="experation-date">
						Experation Date
					</label>
					<input
						type="month"
						id="experation-date"
						name="experation-date"
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
					/>
				</div>

				<TextInput label="CVC" maxLength={3} numbersOnly />

				<Button label="Submit" type="Primary" />
			</Form>
		</div>
	);
}

export function DashOrNoDash(): JSX.Element {
	return (
		<div>
			<Form>
				<TextInput splitChar=" " splitIndex={4} maxLength={19} label="Card Number" numbersOnly />

				<TextInput label="Card Holder Name" />

				<TextInput label="Expiration Date" maxLength={5} numbersOnly splitChar="/" splitIndex={2} />

				<TextInput label="CVC" maxLength={3} numbersOnly />

				<Button label="Submit" type="Primary" />
			</Form>
		</div>
	);
}

export function MultiBoxes(): JSX.Element {
	return (
		<div>
			<Form>
				<CardInput label="Card Number" maxLength={16} sectionMaxLength={4} />

				<TextInput label="Card Holder Name" />

				<div className="flex flex-row space-x-2 w-full">
					<div className="flex-1">
						<TextInput label="Expiration Date" maxLength={5} numbersOnly splitChar="/" splitIndex={2} />
					</div>

					<div className="flex-1">
						<TextInput label="CVC" maxLength={3} numbersOnly />
					</div>
				</div>

				<Button label="Submit" type="Primary" />
			</Form>
		</div>
	);
}

export function PlaceHolder(): JSX.Element {
	return (
		<div>
			<Form>
				<TextInput splitChar=" " splitIndex={4} maxLength={19} label="Card Number" numbersOnly />

				<TextInput label="Card Holder Name" placeHolder="Enter card holder name" />

				<TextInput label="Expiration Date" maxLength={5} numbersOnly splitChar="/" splitIndex={2} placeHolder="MM / YY"/>

				<TextInput label="CVC" maxLength={3} numbersOnly  placeHolder="3 to 4 digits"/>

				<Button label="Submit" type="Primary" />
			</Form>
		</div>
	)
}

export function ErroredInput(): JSX.Element {
	return (
		<div>
			<Form>
				<TextInput splitChar="-" splitIndex={4} maxLength={19} label="Card Number" numbersOnly allowForErroredInput />

				<TextInput label="Card Holder Name" allowForErroredInput/>

				<TextInput label="Expiration Date" maxLength={5} numbersOnly splitChar="/" splitIndex={2} placeHolder="MM / YY" allowForErroredInput/>

				<TextInput label="CVC" maxLength={3} numbersOnly allowForErroredInput/>

				<Button label="Submit" type="Primary" />
			</Form>
		</div>
	)
}
