import React, { Component } from 'react';
//icons
import logo from '../../logo.svg';
import Cricket from '../../Images/Icons/cricket.svg';
import ChatBot from '../../Images/Icons/bot.svg';
import Halp from '../../Images/Icons/h.svg'
//
import {Helmet} from 'react-helmet';
import {NavLink} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      // path:'/admin'
      open:false
    };
    this.handleChange_user = this.handleChange_user.bind(this);
    this.handleChange_password = this.handleChange_password.bind(this);
    this.Checking = this.Checking.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };
  handleChange_user(event) {
    this.setState({username: event.target.value});
  }
  handleChange_password(event) {
    this.setState({password: event.target.value});
  }
  handleClose(){
    this.setState({open:false});
  }
  Checking(event) {
    event.preventDefault();
    if (this.state.username === "" || this.state.password === "") {
      alert("Fields are required");
      return;
    }
    if (this.state.username === "subrata" && this.state.password === "1234") {
      this.setState({open:true});
      return;
    }else{
      // <Snackbar open={this.state.open}>
      //   <Alert severity="error">
      //     <strong>Login Failed ! .</strong>Check Username and Password.
      //   </Alert>
      // </Snackbar>
      alert("Login Failed ! . Check Username and Password.")
    }
  }

  render(){
  return(
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form className="box-admin" onSubmit={this.Checking} action={this.state.path}>
        <NavLink to="/" exact className="NavLink">
        <img src={logo} alt="........" className="logo-login" />
        <label className="navbar-brand-title NavLink">Subrata</label>
        </NavLink>
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
      <Dialog
        // fullScreen={}
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="text-center">{"Where you go ?"}</DialogTitle>
        <DialogContent>
          <DialogActions>
            <div className="modalview">
            <NavLink to="/adminpanel" className="NavLink">
              <img src={ChatBot} height="35px" alt="........" /><br/>
              {/* <i className="fas fa-comments"style={{fontSize:"35px",color:'#000'}}></i><br/> */}
              <label className="NavLink">ChatBot Data</label>
            </NavLink>
            </div>
            <div className="modalview">
            <NavLink to="/bfc-cricket-info" className="NavLink">
              <img src={Cricket} height="35px" alt="........" /><br/>
              <label className="NavLink">Debpur BFC Cricket Info Data</label>
            </NavLink>
            </div>
            <div className="modalview">
            <NavLink to="/hny-wish-data" className="NavLink">
              <img src={Halp} height="35px" alt="........" /><br/>
              {/* <i className="fas fa-comments"style={{fontSize:"35px" alt="........" ,color:'#000'}}></i><br/> */}
              <label className="NavLink">Happy New Year Wishes Data</label>
            </NavLink>
            </div>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}
}


export default Login;