import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Support from "./pages/Support";
import NoPage from "./pages/NoPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
					<Route
						path="support"
						element={<Support />}
					/>
					<Route
						path="*"
						element={<NoPage />}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
