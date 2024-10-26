import React, { useState } from "react";

const Home = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Username:", username);
		console.log("Password:", password);
	};

	return (
		<div className="login-container">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="username">HOME:</label>
					<input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Home;
