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
import { MyComponent } from "../MyComponent";

// Eliminar comentario para ver watch mode!
describe("MyComponent", () => {
	it("renders without crashing & matches snapshot", () => {
		const { asFragment } = render(<MyComponent label="demo-input" id="my-demo-input" />);
		expect(asFragment()).toMatchSnapshot();
		const mySelectedComponent = screen.getByRole("textbox", { name: /demo-input/i });
		expect(mySelectedComponent).toBeInTheDocument();
	});

	it("accepts an input and shows it", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" />);
		const myText = "this is a demo text";
		const mySelectedComponent = screen.getByRole("textbox", { name: /demo-input/i });
		userEvent.type(mySelectedComponent, myText);
		expect(mySelectedComponent).toHaveValue(myText);
	});

	describe("state value", () => {
		it("is error", () => {
			render(<MyComponent label="demo-input" id="my-demo-input" error />);
			const mySelectedComponent = screen.getByRole("textbox", { name: /demo-input/i });
			expect(mySelectedComponent).toHaveClass("error");
			expect(mySelectedComponent).not.toHaveClass("success");
		});

		it("is success state", () => {
			render(<MyComponent label="demo-input" id="my-demo-input" success />);
			const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
			expect(myComponent).toHaveClass("success");
			expect(myComponent).not.toHaveClass("error");
		});

		it("is disabled", () => {
			render(<MyComponent label="demo-input" id="my-demo-input" disabled />);
			const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
			const myComponentTitle = screen.getByText("demo-input");
			expect(myComponent).toBeDisabled();
			expect(myComponent).toHaveClass("disabled");
			expect(myComponentTitle).toHaveClass("disabled");
		});
	});

	it("renders as a medium size (default/explicit)", () => {
		render(
			<>
				<MyComponent id="my-input-field-1" label="input Field 1" />
				<MyComponent id="my-input-field-2" label="input Field 2" size="md" />
			</>
		);
		const myComponent1 = screen.getByRole("textbox", { name: /input field 1/i });
		const myComponent2 = screen.getByRole("textbox", { name: /input field 2/i });
		expect(myComponent1).toHaveAttribute("style", "width: 400px;");
		expect(myComponent2).toHaveAttribute("style", "width: 400px;");
	});

	it("renders as fullwidth", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" fullWidth />);
		const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
		expect(myComponent).toHaveAttribute("style", "width: 100%;");
	});

	it("renders as small", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" size="sm" />);
		const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
		expect(myComponent).toHaveAttribute("style", "width: 200px;");
	});

	it("has a placeholder text visible", () => {
		const myText = "This is a placeholder text";
		render(<MyComponent label="demo-input" id="my-demo-input" placeholder={myText} />);
		const myComponent = screen.getByPlaceholderText(myText);
		expect(myComponent).toBeInTheDocument();
		expect(myComponent).toBeVisible();
	});

	it("doesn't have a placeholder text visible", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" />);
		const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
		expect(myComponent.placeholder).toBe("");
	});

	it("has a label visible", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" />);
		const myComponent = screen.getByLabelText("demo-input");
		expect(myComponent).toBeInTheDocument();
		expect(myComponent).toBeVisible();
	});

	it("has a valid ID", () => {
		const myId = "my-input-field";
		render(<MyComponent label="demo-input" id={myId} />);
		const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
		expect(myComponent).toHaveProperty("id", myId);
	});

	it("is an input of type Number", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" type="number" />);
		const myComponent = screen.getByRole("spinbutton", { name: /demo-input/i });
		expect(myComponent).toHaveProperty("type", "number");
	});

	it("is an input of type Text", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" type="text" />);
		const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
		expect(myComponent).toHaveProperty("type", "text");
	});

	it("receives a className passed by props", () => {
		render(<MyComponent label="demo-input" id="my-demo-input" className="demo-classname" />);
		const myComponent = screen.getByRole("textbox", { name: /demo-input/i });
		expect(myComponent).toHaveClass("demo-classname");
	});
});
