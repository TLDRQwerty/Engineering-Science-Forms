import React from "react";
import TextInput from "./ui/TextInput";
import Form from "./ui/Form";
import Button from "./ui/Button";

type Props = {
	className?: string;
};

export default function DefaultLayout({ className }: Props): JSX.Element {
	return (
		<div>
			<Form className={className}>
				<TextInput splitChar="-" splitIndex={4} maxLength={19} label="Card Number" numbersOnly />

				<TextInput label="Card Holder Name" />

				<TextInput label="Expiration Date" maxLength={4} numbersOnly splitChar="/" splitIndex={2} />

				<TextInput label="CVC" maxLength={3} numbersOnly />

				<Button type="Primary" label="Submit" />
			</Form>
		</div>
	);
}
