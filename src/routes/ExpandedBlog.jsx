import { useParams } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import parse from 'html-react-parser';
const apiUri = "http://localhost:5000/api/blogs";
export default function ExpandedBlog() {
    const { id } = useParams();
    const [thisBlog, setThisBlog] = useState("");
    useState(() => {
        axios.get(apiUri + "/" + id).then((blogs) => {
            // console.log(blogs.data, typeof blogs.data)
            setThisBlog(blogs.data) //send some data to this from the fetched blog
            console.log(typeof thisBlog)
        })
    }, []);
    return (<div style={{height: '100vh', width: '100vw', marginTop: '0.5em'}}>
        {parse(thisBlog)}
    </div>);
}