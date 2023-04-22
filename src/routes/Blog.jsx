import BlogPreview from '../components/BlogPreview';
import MainTitle from '../components/MainTitle';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
// import bp from '../images/blogPreview.jpeg';
// import { sampleBlog } from '../store/Data'
import '../stylesheets/Blog.css'

const apiUri = "http://localhost:5000/api";

// const getBlogs = 
// };

export default function Blog() {
    const [blogs, setBlogs] = useState(null);
    useState(() => {
        axios.get(apiUri).then((blogs) => {
                console.log(blogs); //This logs twice because of CORS preflight request
                setBlogs((blogs.data).map((currValue, idx) => <BlogPreview
                    key = {idx}
                    img = {currValue.img}
                    title = {currValue.title}
                    content = {currValue.content}
                />));
            })}, []);
    return (
        <motion.div style={{ height: '100vh', width: '100vw' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MainTitle text='Blog' />
            <div className='Blogs'>
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