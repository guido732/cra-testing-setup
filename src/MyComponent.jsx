// React
import React, { useState, useEffect } from "react";

export const MyComponent = ({
	error = false,
	success = false,
	disabled = false,
	size = "",
	fullWidth = false,
	value,
	id = "",
	name = "",
	label = "",
	type = "text",
	className = "",
	placeholder = "",
	onChange = () => {},
}) => {
	const [outputSize, setOutputSize] = useState("");
	const setSize = () =>
		fullWidth ? setOutputSize("100%") : size === "sm" ? setOutputSize("200px") : setOutputSize("400px");
	useEffect(setSize, []);

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				disabled={disabled}
				onChange={onChange}
				placeholder={placeholder}
				style={{ width: `${outputSize}` }}
				className={`${disabled && "disabled"} ${error && "error"} ${success && "success"} ${className}`}
			/>
		</>
	);
};
