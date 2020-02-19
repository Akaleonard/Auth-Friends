import React from "react";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    />
  );
};

function App() {
  return (
    <div className='App'>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/friends' component={Friends} />
    </div>
  );
}

export default App;
