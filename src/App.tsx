import React from 'react';
import './App.css';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
	  <header className="App-header">
			<h1>RSS Reader</h1>
				<nav
					style={{
						color: "#ffffff",
						paddingBottom: "1rem",
					}}
				>
					<Link to="/login">Log In</Link> |{" "}
					<Link to="/sign-up">Sign Up</Link>
				</nav>
		</header>
    </div>
  );
}

export default App;
