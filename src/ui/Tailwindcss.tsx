import React, { ReactNode } from 'react';
import '../style.css';

type Props = {
	children: ReactNode,
}

export default function TailwindCSS({ children }: Props) {
	return (
		<>
			{children}
		</>
	);
}
