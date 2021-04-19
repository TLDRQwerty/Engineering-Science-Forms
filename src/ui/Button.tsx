import React, { FormEvent } from "react";

type Props = {
	label: string;
	onClick?: (e: FormEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	type?: "Primary" | "Secondary";
};

export default function Button({ label, onClick, disabled, type }: Props): JSX.Element {
	const style = {
		Primary:
			"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
		Secondary:
			"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
	};
	return (
		<button className={style[type || "Primary"]} disabled={disabled} onClick={onClick}>
			{label}
		</button>
	);
}
