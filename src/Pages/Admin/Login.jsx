import React, { Component } from 'react';
import logo from '../../logo.svg';
class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      path:'/admin'
    };
    this.handleChange_user = this.handleChange_user.bind(this);
    this.handleChange_password = this.handleChange_password.bind(this);
    this.Checking = this.Checking.bind(this);
  };
  handleChange_user(event) {
    this.setState({username: event.target.value});
  }
  handleChange_password(event) {
    this.setState({password: event.target.value});
  }
  Checking(event) {
    event.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      alert("Fields are required");
      return;
    }
    if (this.state.username === "subrata" && this.state.password === "1234") {
      this.props.history.push('/adminpanel')
      return;
    }else{
      alert("Login Failed ! . Check Username and Password.")
    }
  }

  render(){
  return(
    <div>
      <form className="box-admin" onSubmit={this.Checking} action={this.state.path}>
        <div>
        <img src={logo} alt="........" className="logo-login" />
        <label className="navbar-brand-title">Subrata</label>
        </div>
        <h2>Login</h2>
        <input
           type="text" 
           name="username " 
           value={this.state.username}
           onChange={this.handleChange_user}
           placeholder="Username" 
           id="username"
           />

        <input 
         type="password" 
         name="password" 
         value={this.state.password}
         onChange={this.handleChange_password}
         placeholder="Password"  
         id="password"
         autoComplete="cc-number"
         />
        <input type="submit" name=" " value="Login"  />
         {/* <NavLink exact to={this.state.path} className=" text-decoration-none">
           <input type="submit" name=" " value="Login"  />
         </NavLink> */}
      </form>
    </div>
  )
}
}


export default Login;