// import fetch from "fetch";
const createUser = async () => {
	const response = await fetch("http://website.com/users", { method: "POST" });
	const userId = await response.text();
	return userId;
};

export { createUser };
