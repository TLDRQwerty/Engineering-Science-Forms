import React from 'react';

type Props = {
	to: string,
	label: string,
}

export default function Link({ to, label }: Props) {
	return (
		<a href={to} className="font-medium text-gray-500 hover:text-gray-900">{label}</a>
	)
}
