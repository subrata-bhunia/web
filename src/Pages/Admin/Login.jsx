import React from 'react';
import { NavLink } from 'react-router-dom';

const Login=()=>{
  return(
    <div>
      <form className="box-admin">
        <h1>Login</h1>
        <input type="text" name=" " placeholder="username/email/mobile" />
        <input type="password" name=" " placeholder="Password"  />
        <NavLink exact to="/adminpanel" className="text-decoration-none"><input type="submit" name=" " value="Login" /></NavLink>
      </form>
    </div>
  )
}



export default Login;