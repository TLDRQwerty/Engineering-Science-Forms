// WIP: still doesn't handle errors properly
import React, { FormEvent, useEffect, useRef, useState } from "react";

type Props = {
	label: string;
	sectionMaxLength: number;
	maxLength: number;
};

export default function CardInput({ label, sectionMaxLength, maxLength }: Props): JSX.Element {
	const [values, setValues] = useState<{ [key: number]: string }>({});
	const refs: { [key: number]: any } = []; // eslint-disable-line
	const [errors, setErrors] = useState<string[]>([]);

	const pushNewError = (error: string) => {
		setErrors([...errors.filter((e) => e !== error), error]);
	};

	const id = label.toLowerCase().split(" ").join("-");

	const totalInputBoxes = Math.floor(maxLength / sectionMaxLength);

	const arr = [];

	for (let i = 0; i < totalInputBoxes; i++) {
		refs[i] = useRef<HTMLInputElement>(null);
		arr.push(i);
	}

	useEffect(() => {
		for (let i = 0; i < totalInputBoxes; i++) {
			setValues({ ...values, [i]: "" });
		}
	}, []);

	function handleChange(e: FormEvent<HTMLInputElement>, v: number) {
		// I feel like the norm behaviour is that this replaces the last char of
		// the current text box before moving to the next text input box
		const newValue = e.currentTarget.value;
		const newChar = newValue[newValue.length - 1];

		if (!/^[0-9]*$/.test(newChar)) {
			const errorString = "Must be a number";
			pushNewError(errorString);
			return;
		}

		setErrors([]);

		if (e.currentTarget.value.length > sectionMaxLength) {
			const i = refs[Math.floor(( v + 1 ) % ( maxLength / sectionMaxLength ))]
			if (i && i.current !== null) {
				i.current.focus();
				return;
			}
		}
		setValues({ ...values, [v]: e.currentTarget.value });
	}

	return (
		<div>
			<label className="block text-sm font-medium text-gray-700" htmlFor={id}>
				{label}
			</label>
			<div className="flex flex-row space-x-2 flex-1">
				{arr.map((v: number) => (
					<input
						className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
						type="text"
						name={id}
						id={id}
						key={`input-${v}`}
						onChange={(e) => handleChange(e, v)}
						value={values[v]}
						ref={refs[v]}
					/>
				))}
			</div>
			{errors.length > 0 && <span className="block text-sm font-medium text-red-700">{errors.join(", ")}</span>}
		</div>
	);
}
