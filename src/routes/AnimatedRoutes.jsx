import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Blog from './Blog';
import Portfolio from './Portfolio';
import ExpandedBlog from './ExpandedBlog'
import MyEditor from "./MyEditor";
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>

                <Route path='/' element={<Portfolio />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/blog/:id' element={<ExpandedBlog />}></Route>
                <Route path='/publish' element = {<MyEditor/>}></Route>
            </Routes>
        </AnimatePresence>

    )
}
export default AnimatedRoutes;