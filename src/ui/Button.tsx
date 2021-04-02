import React, { FormEvent } from "react";

type Props = {
	label: string;
	onClick: (e: FormEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, onClick }: Props): JSX.Element {
	return <button onClick={onClick}>{label}</button>;
}
