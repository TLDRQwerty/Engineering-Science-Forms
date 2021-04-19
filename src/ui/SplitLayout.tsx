import React, { ReactNode } from "react";

type Props = {
	left: ReactNode;
	right: ReactNode;
};

export default function SplitLayout({ left, right }: Props): JSX.Element {
	return (
		<div className="flex flex-row space-x-4">
			<div className="flex-col">
				<h1 className="text-center text-3xl font-bold text-gray-900">A</h1>
				<div className="rounded border border-black bg-white px-14 py-10">{left}</div>
			</div>
			<div className="flex-col">
				<h1 className="text-center text-3xl font-bold text-gray-900">B</h1>
				<div className="rounded border border-black bg-white px-14 py-10">{right}</div>
			</div>
		</div>
	);
}
