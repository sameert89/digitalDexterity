import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const url = "https://dd-server.onrender.com/";
  const checkUserToken = () => {
    axios
      .get(url + "api/authenticate", { withCredentials: true })
      .then((response) => {
        console.log(response);
        if (response.data.auth) setIsLoggedIn(true);
        else return navigate("/login");
      })
      .catch((error) => {
        setIsLoggedIn(false);
        console.log("axios had an error");
        return navigate("/login");
      });
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
