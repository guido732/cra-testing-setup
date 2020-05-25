/**
 * Tests InputField Component
 *
 * @group demo5
 * @group demo
 */

// React
import React from "react";
// Testing Libs
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Component to Test
import InputField from "components/_shared/InputField";

// Eliminar comentario para ver watch mode!
describe("InputField", () => {
	it("renders without crashing & matches snapshot", () => {
		const { asFragment } = render(<InputField />);
		expect(asFragment()).toMatchSnapshot();
		const inputField = screen.getByRole("textbox");
		expect(inputField).toBeInTheDocument();
	});

	it("accepts an input and shows it", () => {
		render(<InputField />);
		const myText = "this is a demo text";
		const inputField = screen.getByRole("textbox");
		userEvent.type(inputField, myText);
		expect(inputField).toHaveValue(myText);
	});

	describe("state value", () => {
		it("is error and shows an icon", () => {
			render(<InputField error label="title" helperText="helper text" />);
			const inputField = screen.getByRole("textbox");
			const inputFieldTitle = screen.getByText("title");
			const inputFieldHelperText = screen.getByText("helper text");
			expect(inputField.parentElement).toHaveClass("Mui-error");
			expect(inputField).toHaveClass("MuiOutlinedInput-inputAdornedEnd");
			expect(inputField.nextSibling.firstChild).toHaveClass("error-icon");
			expect(inputField.parentElement).not.toHaveClass("Mui-success");
			expect(inputFieldTitle).toHaveClass("Mui-error");
			expect(inputFieldHelperText).toHaveClass("Mui-error");
		});

		it("is success state and shows an icon", () => {
			render(<InputField success label="title" helperText="helper text" />);
			const inputField = screen.getByRole("textbox");
			expect(inputField.nextSibling.firstChild).toHaveClass("success-icon");
			expect(inputField.parentElement.parentElement).toHaveClass("Mui-success");
			expect(inputField).toHaveClass("MuiOutlinedInput-inputAdornedEnd");
			expect(inputField.parentElement).not.toHaveClass("Mui-error");
		});

		it("is disabled", () => {
			render(<InputField disabled label="title" helperText="helper text" />);
			const inputField = screen.getByRole("textbox");
			const inputFieldTitle = screen.getByText("title");
			expect(inputField).toBeDisabled();
			expect(inputField.parentElement).toHaveClass("Mui-disabled");
			expect(inputFieldTitle).toHaveClass("Mui-disabled");
		});
	});

	it("has a noborder variant that adds custom class", () => {
		render(<InputField noBorder />);
		const inputField = screen.getByRole("textbox");
		expect(inputField.parentElement.parentElement).toHaveClass("no-border");
	});

	it("has a multiline variant that adds custom class", () => {
		render(<InputField multiline />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveClass("MuiOutlinedInput-inputMultiline");
		expect(inputField.parentElement).toHaveClass("MuiOutlinedInput-multiline");
	});

	it("renders as a medium size (default/explicit)", () => {
		render(
			<>
				<InputField id="my-input-field-1" label="input Field 1" />
				<InputField id="my-input-field-2" label="input Field 2" size="md" />
			</>,
		);
		const inputField1 = screen.getByLabelText("input Field 1");
		const inputField2 = screen.getByLabelText("input Field 2");
		expect(inputField1.parentElement.parentElement).toHaveAttribute(
			"style",
			"width: 320px;",
		);
		expect(inputField2.parentElement.parentElement).toHaveAttribute(
			"style",
			"width: 320px;",
		);
	});

	it("renders as fullwidth", () => {
		render(<InputField fullWidth />);
		const inputField = screen.getByRole("textbox");
		expect(inputField.parentElement.parentElement).toHaveAttribute(
			"style",
			"width: 100%;",
		);
	});

	it("renders as small", () => {
		render(<InputField size="sm" />);
		const inputField = screen.getByRole("textbox");
		expect(inputField.parentElement.parentElement).toHaveAttribute(
			"style",
			"width: 128px;",
		);
	});

	it("has a placeholder text visible", () => {
		const myText = "This is a placeholder text";
		render(<InputField placeholder={myText} />);
		const inputField = screen.getByPlaceholderText(myText);
		expect(inputField).toBeInTheDocument();
	});

	it("doesn't have a placeholder text visible", () => {
		render(<InputField />);
		const inputField = screen.getByRole("textbox");
		expect(inputField.placeholder).toBe("");
	});

	it("has a label visible", () => {
		const myText = "Demo label";
		render(<InputField label={myText} id="my-input-field" />);
		const inputField = screen.getByLabelText(myText);
		expect(inputField).toBeInTheDocument();
	});

	it("has a helper text visible", () => {
		const myText = "Demo Helper Text";
		render(
			<InputField
				helperText={myText}
				helperTextId="my-helper-text"
				id="my-input-field"
			/>,
		);
		const inputField = screen.getByText(myText);
		expect(inputField).toBeInTheDocument();
	});

	it("has a valid ID", () => {
		const myId = "my-input-field";
		render(<InputField id={myId} />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveProperty("id", myId);
	});

	it("is an input of type Number", () => {
		render(<InputField type="number" />);
		const inputField = screen.getByRole("spinbutton");
		expect(inputField).toHaveProperty("type", "number");
	});

	it("is an input of type Text", () => {
		render(<InputField type="text" />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveProperty("type", "text");
	});

	it("receives a className passed by props", () => {
		render(<InputField inputClassName="demo-classname" />);
		const inputField = screen.getByRole("textbox");
		expect(inputField.parentElement.parentElement).toHaveClass("demo-classname");
	});

	it("receives a defaultValue", () => {
		render(<InputField defaultValue="demo value" />);
		const inputField = screen.getByRole("textbox");
		expect(inputField).toHaveValue("demo value");
	});
});
