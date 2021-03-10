import React, { FormEvent, useState } from 'react';

type Props = {
	splitChar?: string,
	splitIndex?: number,
	maxLength?: number,
	label: string,
	numbersOnly?: boolean,
}

export default function TextInput({ splitChar, splitIndex, maxLength, label, numbersOnly }: Props) {
	const [value, setValue] = useState('');
	const [errors, setErrors] = useState<string[]>([]);

	const pushNewError = (error: string) => {
		setErrors([...errors.filter(e => e !== error), error])
	}

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		const newChar = newValue[newValue.length - 1];

		if (numbersOnly && !(/^[0-9]*$/.test(newChar))) {
			const errorString = 'Must be a number'
			pushNewError(errorString);
			return;
		}

		if (maxLength && newValue.length > maxLength) {
			const errorString = `Can not exceed max length of ${maxLength}`;
			pushNewError(errorString);
			return;
		} 

		setErrors([])

		if (splitChar && splitIndex) {
			const s = newValue.split(splitChar);
			const lastElement = s[s.length - 1];
			if (lastElement.length % splitIndex === 0 && lastElement.length !== 0) {
				setValue(newValue + splitChar);
			} else {
				setValue(newValue);
			}
		} else {
			setValue(e.currentTarget.value);
		}

	}

	return (
		<label>
			{label}
			<input type='text' onChange={handleChange} value={value} />
			{errors.length > 0 && <label>{errors}</label>}
		</label>
	)
}
