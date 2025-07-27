import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Portfolio from "./Home";
function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route key={0} path="/" element={<Portfolio />}></Route>
			</Routes>
		</AnimatePresence>
	);
}
export default AnimatedRoutes;
