const loginForm = document.querySelector(".login-form");
const usernameInput = loginForm.querySelector("input[type='text']");
const passwordInput = loginForm.querySelector("input[type='password']");

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;

	if (username === "myusername" && password === "mypassword") {
		alert("Login successful!");
	} else {
		alert("Incorrect username or password. Please try again.");
	}
});
