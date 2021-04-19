import clsx from "clsx";
import React, { FormEvent, ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

export default function Form({ className, children }: Props): JSX.Element {
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<form className={clsx(className, "space-y-1.5")} onSubmit={handleSubmit}>
			{children}
		</form>
	);
}
