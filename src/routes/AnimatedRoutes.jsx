import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Blog from './Blog';
import Portfolio from './Portfolio';
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path='/' element={<Portfolio />}></Route>
                <Route path='blog' element={<Blog />}></Route>

            </Routes>
        </AnimatePresence>

    )
}
export default AnimatedRoutes;