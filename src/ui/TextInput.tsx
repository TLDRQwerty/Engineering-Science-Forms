import React, { FormEvent, useState } from "react";

type Props = {
	splitChar?: string;
	splitIndex?: number;
	maxLength?: number;
	label: string;
	numbersOnly?: boolean;
	placeHolder?: string;
	allowForErroredInput?: boolean;
};

export default function TextInput({
	splitChar,
	splitIndex,
	maxLength,
	label,
	numbersOnly,
	placeHolder,
	allowForErroredInput,
}: Props): JSX.Element {
	const [value, setValue] = useState("");
	const [errors, setErrors] = useState<string[]>([]);

	const pushNewError = (error: string) => {
		setErrors([...errors.filter((e) => e !== error), error]);
	};

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		const newChar = newValue[newValue.length - 1];

		if (newValue.length < value.length) {
			setValue(newValue);
			if (!allowForErroredInput) return;
		}

		if (numbersOnly && !/^[0-9]*$/.test(newChar)) {
			const errorString = "Must be a number";
			pushNewError(errorString);
			if (!allowForErroredInput) return;
		}

		if (maxLength && newValue.length > maxLength) {
			const errorString = `Can not exceed max length of ${maxLength - (maxLength % (splitIndex || 1))}`;
			pushNewError(errorString);
			if (!allowForErroredInput) return;
		}

		setErrors([]);

		if (splitChar && splitIndex) {
			const s = newValue.split(splitChar);
			const lastElements = s[s.length - 1];
			if (lastElements.length % splitIndex === 0 && lastElements.length !== 0 && newValue.length !== maxLength) {
				setValue(newValue + splitChar);
			} else {
				setValue(newValue);
			}
		} else {
			setValue(e.currentTarget.value);
		}
	};

	const id = label.toLowerCase().split(" ").join("-");

	return (
		<div>
			<label className="block text-sm font-medium text-gray-700" htmlFor={id}>
				{label}
			</label>
			<input
				className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
				type="text"
				onChange={handleChange}
				value={value}
				name={id}
				id={id}
				placeholder={placeHolder}
			/>
			{errors.length > 0 && <span className="block text-sm font-medium text-red-700">{errors.join(", ")}</span>}
		</div>
	);
}
