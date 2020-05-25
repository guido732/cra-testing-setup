import React from "react";
import { MyComponent } from "./MyComponent";

function App() {
	const [value, setValue] = React.useState("");
	const handleChange = (e) => {
		setValue(e.target.value);
		console.log(e.target.value);
	};
	return (
		<div>
			<MyComponent
				error={false}
				success={false}
				disabled={false}
				size="sm"
				value={value}
				id="my-component"
				name="myComponentDemo"
				label="This is a label"
				type="text"
				className="my-component-class"
				placeholder="Placeholder Text"
				onChange={handleChange}
			/>
		</div>
	);
}

export default App;
