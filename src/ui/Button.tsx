import React, { FormEvent } from "react";

type Props = {
	label: string;
	onClick: (e: FormEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, onClick }: Props): JSX.Element {
	return <button className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onClick}>{label}</button>;
}
