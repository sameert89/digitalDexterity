import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import parse from "html-react-parser";
import "../stylesheets/ExpandedBlog.css";
const apiUri = "https://calm-jade-sea-lion-hat.cyclic.cloud/api/blogs";
export default function ExpandedBlog(props) {
  const { id } = useParams();
  const [thisBlog, setThisBlog] = useState("");

  useState(() => {
    if (!props.data) {
      axios.get(apiUri + "/" + id).then((blogs) => {
        // console.log(blogs.data, typeof blogs.data)
        setThisBlog(blogs.data); //send some data to this from the fetched blog
      });
    } else {
      setThisBlog(props.data);
    }
  }, []);
  return <div className="blog-view">{parse(thisBlog)}</div>;
}
