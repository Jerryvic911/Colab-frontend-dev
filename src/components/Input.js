import React from "react";

export function Input({
	label,
	placeholder,
	type = "text",
	name,
	handleChange,
}) {
	return (
		<div>
			<div className="py-2">
				<label className="text-lg capitalize font-semibold">{label}</label>
			</div>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				onChange={handleChange}
				className="h-[56px] w-full px-5 border-2 border-gray-300 rounded-md outline-none"
			/>
		</div>
	);
}
