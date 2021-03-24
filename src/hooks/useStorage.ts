import { useState, useEffect } from 'react';

export default function useStorage(key: string, initialValue?: string): [string, (value: string) => void] {
	const storageValue = window.localStorage.getItem(key);

	if (!initialValue && !storageValue) {
		initialValue = window.localStorage.getItem(key) || undefined;
	}

	if (storageValue) {
		initialValue = storageValue;
	}
	const [current, setCurrent] = useState(initialValue);
	useEffect(() => {
		if (current) {
			window.localStorage.setItem(key, current);
		}
	}, [initialValue, current]);
	return [current || '1', setCurrent];
}
