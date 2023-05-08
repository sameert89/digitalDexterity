import { motion } from "framer-motion";
import "../stylesheets/Login.css";
import "../fonts/cyberway.ttf";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const url = "http://localhost:5000/";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(
    `Please enter your publishing credentials`
  );
  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevValue) => {
      if (name === "uname") {
        return {
          username: value,
          password: prevValue.password,
        };
      } else if (name === "pass") {
        return {
          username: prevValue.username,
          password: value,
        };
      }
    });
  }
  function login(event) {
    event.preventDefault();
    axios
      .post(url + "api/login", formData, { withCredentials: true })
      .then((response) => {
        console.log(response);
        return navigate("/publish");
      })
      .catch((error) => {
        console.log("login failed", error.response.data.message);
        setMessage(error.response.data.message);
      });
  }
  return (
    <motion.div className="form-container">
      <form action="" className="form" onSubmit={login}>
        <span></span>
        <div className="form-inner">
          <h2 className="form-title">LOGIN</h2>
          <div className="form-content">
            <input
              name="uname"
              onChange={handleChange}
              className="input"
              type="text"
              value={formData.username}
              placeholder="Username"
              required={true}
            />
            <input
              name="pass"
              onChange={handleChange}
              className="input"
              value={formData.password}
              type="password"
              placeholder="Password"
              required={true}
            />
            <button className="btn" type="submit">
              LOGIN
            </button>
            <p className="bottom-note">
              {message}
              <br />
              <br />
              <br />
              <strong>Demo Account</strong>
              <br />
              <strong>
                USERNAME: demo <br /> PASSWORD: demo123
              </strong>
            </p>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

function logout() {
  axios
    .get(url + "api/logout", { withCredentials: true })
    .then((result) => {
      console.log(result.data.message);
    })
    .catch((error) => {
      console.log("Unable the logout user", error.response.data.message);
    });
}
export default Login;
export { logout };
