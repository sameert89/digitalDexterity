import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../stylesheets/MyEditor.css";
import axios from "axios";
import { logout } from "./Login";
import { useNavigate } from "react-router-dom";
const generateSignature = (callback, paramsToSign) => {
  // console.log(paramsToSign);
  axios
    .post(url + "sign", paramsToSign)
    .then((response) => {
      const signature = response.data;
      console.log(response);
      callback(signature);
    })
    .catch((error) => {
      console.log(error);
    });
};

const url = "https://dd-server.onrender.com/api/";
export default function MyEditor() {
  const quillRef = useRef();
  const imageHandler = (e) => {
    const editor = quillRef.current.getEditor();
    // console.log("it handled the image", editor);
    const cloudName = "dpemgvyfd";
    const apiKey = "286935541922659";
    window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        apiKey: apiKey,
        uploadSignature: generateSignature,
        resourceType: "image",
        cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        folder: "digital_dexterity_blog_assets", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        maxImageFileSize: 5000000, //restrict file size to less than 5MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const uploaded_url = result.info.url;
          editor.insertEmbed(
            editor.getSelection().index,
            "image",
            uploaded_url
          );
          // console.log(result.info.url);
        } else if (error) {
          console.log("Oh no the upload failed here is the error: ", error);
        }
      }
    );
  };
  const modules = useMemo(
    () => ({
      //!use literal object as modules props, it will trigger component rerender , use useMemo hook to memoize modules prop to fix it.
      toolbar: {
        container: [
          [
            { header: "1" },
            { header: "2" },
            { font: [] },
            { color: [] },
            { background: [] },
          ],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "video",
  ];
  const [value, setValue] = useState("");
  function sendData() {
    axios
      .post(
        url + "publish",
        { body: value },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then(
        (response) => {
          console.log("Data Sent Successfully");
        },
        (error) => {
          console.log(error);
        }
      );
  }
  const navigate = useNavigate();
  function handleClick() {
    logout();
    navigate("/login");
  }
  return (
    <div className="EditorBG">
      <ReactQuill
        theme="snow"
        ref={quillRef}
        modules={modules} //This must be using useState behind the scenes or something since we are advised to use useMemo here
        formats={formats}
        value={value}
        placeholder="Write Something Awesome!"
        onChange={setValue}
      />
      <button className="publish" id="saveBlog" onClick={sendData}>
        PUBLISH
      </button>
      <button className="publish" onClick={handleClick}>
        LOGOUT
      </button>
    </div>
  );
}
