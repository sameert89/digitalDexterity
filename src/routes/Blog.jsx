import BlogPreview from "../components/BlogPreview";
import MainTitle from "../components/MainTitle";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import bp from '../images/blogPreview.jpeg';
// import { sampleBlog } from '../store/Data'
import "../stylesheets/Blog.css";

const apiUri = "http://localhost:5000/api/blogs";

export default function Blog() {
  const [blogs, setBlogs] = useState(null);
  useState(() => {
    axios.get(apiUri).then((blogs) => {
      console.log(blogs); //This logs twice because of CORS preflight request
      setBlogs(
        blogs.data.map((currValue, idx) => (
          <Link
            to={"/blog/" + currValue.fullPostLinkID}
            style={{ textDecoration: "none" }}
          >
            <BlogPreview
              key={currValue.fullPostLinkID}
              img={currValue.img}
              title={currValue.title}
              content={currValue.content}
            />
          </Link>
        ))
      );
    });
  }, []);
  return (
    <motion.div
      style={{ height: "100vh", width: "100vw" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainTitle text="Blog" size="6rem" />
      <div className="Blogs">
        {/* <BlogPreview
                img = {bp}
                title ={sampleBlog.title}
                content = {sampleBlog.content}
            /> */}
        {blogs}
      </div>
    </motion.div>
  );
}
