import React, { useState } from "react";
import Axios from "axios";

const Login = props => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/login", form)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
    setForm({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        onChange={handleChange}
        value={form.username}
      />
      <input
        type='password'
        name='password'
        onChange={handleChange}
        value={form.password}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Login;
