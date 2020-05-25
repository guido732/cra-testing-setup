/**
 * Tests MyComponent Component
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
import MyComponent from "/MyComponent";

// Eliminar comentario para ver watch mode!
describe("MyComponent", () => {
	it("renders without crashing & matches snapshot", () => {
		const { asFragment } = render(<MyComponent />);
		expect(asFragment()).toMatchSnapshot();
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent).toBeInTheDocument();
	});

	it("accepts an input and shows it", () => {
		render(<MyComponent />);
		const myText = "this is a demo text";
		const MyComponent = screen.getByRole("textbox");
		userEvent.type(MyComponent, myText);
		expect(MyComponent).toHaveValue(myText);
	});

	describe("state value", () => {
		it("is error and shows an icon", () => {
			render(<MyComponent error label="title" helperText="helper text" />);
			const MyComponent = screen.getByRole("textbox");
			const MyComponentTitle = screen.getByText("title");
			const MyComponentHelperText = screen.getByText("helper text");
			expect(MyComponent.parentElement).toHaveClass("Mui-error");
			expect(MyComponent).toHaveClass("MuiOutlinedInput-inputAdornedEnd");
			expect(MyComponent.nextSibling.firstChild).toHaveClass("error-icon");
			expect(MyComponent.parentElement).not.toHaveClass("Mui-success");
			expect(MyComponentTitle).toHaveClass("Mui-error");
			expect(MyComponentHelperText).toHaveClass("Mui-error");
		});

		it("is success state and shows an icon", () => {
			render(<MyComponent success label="title" helperText="helper text" />);
			const MyComponent = screen.getByRole("textbox");
			expect(MyComponent.nextSibling.firstChild).toHaveClass("success-icon");
			expect(MyComponent.parentElement.parentElement).toHaveClass("Mui-success");
			expect(MyComponent).toHaveClass("MuiOutlinedInput-inputAdornedEnd");
			expect(MyComponent.parentElement).not.toHaveClass("Mui-error");
		});

		it("is disabled", () => {
			render(<MyComponent disabled label="title" helperText="helper text" />);
			const MyComponent = screen.getByRole("textbox");
			const MyComponentTitle = screen.getByText("title");
			expect(MyComponent).toBeDisabled();
			expect(MyComponent.parentElement).toHaveClass("Mui-disabled");
			expect(MyComponentTitle).toHaveClass("Mui-disabled");
		});
	});

	it("has a noborder variant that adds custom class", () => {
		render(<MyComponent noBorder />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent.parentElement.parentElement).toHaveClass("no-border");
	});

	it("has a multiline variant that adds custom class", () => {
		render(<MyComponent multiline />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent).toHaveClass("MuiOutlinedInput-inputMultiline");
		expect(MyComponent.parentElement).toHaveClass("MuiOutlinedInput-multiline");
	});

	it("renders as a medium size (default/explicit)", () => {
		render(
			<>
				<MyComponent id="my-input-field-1" label="input Field 1" />
				<MyComponent id="my-input-field-2" label="input Field 2" size="md" />
			</>
		);
		const MyComponent1 = screen.getByLabelText("input Field 1");
		const MyComponent2 = screen.getByLabelText("input Field 2");
		expect(MyComponent1.parentElement.parentElement).toHaveAttribute("style", "width: 320px;");
		expect(MyComponent2.parentElement.parentElement).toHaveAttribute("style", "width: 320px;");
	});

	it("renders as fullwidth", () => {
		render(<MyComponent fullWidth />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent.parentElement.parentElement).toHaveAttribute("style", "width: 100%;");
	});

	it("renders as small", () => {
		render(<MyComponent size="sm" />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent.parentElement.parentElement).toHaveAttribute("style", "width: 128px;");
	});

	it("has a placeholder text visible", () => {
		const myText = "This is a placeholder text";
		render(<MyComponent placeholder={myText} />);
		const MyComponent = screen.getByPlaceholderText(myText);
		expect(MyComponent).toBeInTheDocument();
	});

	it("doesn't have a placeholder text visible", () => {
		render(<MyComponent />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent.placeholder).toBe("");
	});

	it("has a label visible", () => {
		const myText = "Demo label";
		render(<MyComponent label={myText} id="my-input-field" />);
		const MyComponent = screen.getByLabelText(myText);
		expect(MyComponent).toBeInTheDocument();
	});

	it("has a helper text visible", () => {
		const myText = "Demo Helper Text";
		render(<MyComponent helperText={myText} helperTextId="my-helper-text" id="my-input-field" />);
		const MyComponent = screen.getByText(myText);
		expect(MyComponent).toBeInTheDocument();
	});

	it("has a valid ID", () => {
		const myId = "my-input-field";
		render(<MyComponent id={myId} />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent).toHaveProperty("id", myId);
	});

	it("is an input of type Number", () => {
		render(<MyComponent type="number" />);
		const MyComponent = screen.getByRole("spinbutton");
		expect(MyComponent).toHaveProperty("type", "number");
	});

	it("is an input of type Text", () => {
		render(<MyComponent type="text" />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent).toHaveProperty("type", "text");
	});

	it("receives a className passed by props", () => {
		render(<MyComponent inputClassName="demo-classname" />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent.parentElement.parentElement).toHaveClass("demo-classname");
	});

	it("receives a defaultValue", () => {
		render(<MyComponent defaultValue="demo value" />);
		const MyComponent = screen.getByRole("textbox");
		expect(MyComponent).toHaveValue("demo value");
	});
});
