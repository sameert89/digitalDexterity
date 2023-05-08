import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import ExpandedBlog from "./ExpandedBlog";
import MyEditor from "./MyEditor";
import Login from "./Login";
import Contact from "./Contact";
import ProtectedRoute from "../components/HOC/ProtectedRoute";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route key={0} path="/" element={<Portfolio />}></Route>
        <Route key={1} path="/login" element={<Login />}></Route>
        <Route key={2} path="/blog" element={<Blog />}></Route>
        <Route key={3} path="/blog/:id" element={<ExpandedBlog />}></Route>
        <Route
          key={4}
          path="/publish"
          element={
            <ProtectedRoute>
              <MyEditor />
            </ProtectedRoute>
          }
        ></Route>
        <Route key={5} path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
