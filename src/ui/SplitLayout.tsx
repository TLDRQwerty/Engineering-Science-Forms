import React from "react";
import DefaultLayout from "../DefaultView";

type Props = {
	children: React.ReactNode;
};

export default function SplitLayout({ children }: Props): JSX.Element {
	return (
		<div className="flex flex-row space-x-4">
			<div className="rounded border border-black bg-white px-14 py-10">
				<DefaultLayout />
			</div>
			<div className="rounded border border-black bg-white px-14 py-10">{children}</div>
		</div>
	);
}
