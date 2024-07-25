import { useState } from "react";
import "./App.css";
import {
	Routes,
	Route,
} from "react-router-dom";

/* Pages */
import Homepage from "./pages/Homepage";
import CountryDetails from "./pages/CountryDetails";

/* Components */
import Header from "./components/Header";

const App = () => {
	const [lightmode, setLightmode] =
		useState("light");

	return (
		<section
			className={`body ${
				lightmode === "light" ? "" : "dark-theme"
			}`}
		>
			<Header
				lightmode={lightmode}
				setLightmode={setLightmode}
			/>
			<Routes>
				<Route
					exact
					path="/"
					element={<Homepage />}
				/>
				<Route
					path="/country/:id"
					element={<CountryDetails />}
				/>
			</Routes>
		</section>
	);
};

export default App;
