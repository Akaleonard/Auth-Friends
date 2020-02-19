import React from "react";
import Axios from "axios";

const axiosWithAuth = () => {
  return Axios.create({
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

export default axiosWithAuth;
