import React from 'react';
import { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';




class AdminPanel extends Component{
    constructor(props){
        super(props);
        this.state={
         q_id:'',
         messege:'',
         trigger:'',
         end:"false",
         user:'false',
         waitAction:'false',
         options:{
             value:'',
             label:'',
             trigger:''
         }
        };


       // this.Demo = this.Demo.bind(this);
    };
    Demo(){
        console.log("All Ok")
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    // handleRadio=(event)=> {
    //     let value = true;
    //     if (typeof event.currentTarget.value === 'string') {
    //         (event.currentTarget.value === 'true' ? value = true : value = false );
    //     }
    //     this.setState({end: value});
    //     }

    render(){
    return(
        <div className="admin-dash">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 bold">Dashboard</span>
                    <span>(ChatBot Data) </span>
                </div>
            </nav>
            <div className="responsive">
            <div className="box-adminpanel-left">
                <h1>New Questions & Answer Set </h1>
                {/* Question Set */}
                <form className="ques-div">
                   <p>Questions</p> 
                   {/* id */}
                <div>
                    <label>Question Id :</label>
                    <br />
                    <input
                     name="q_id"
                     onChange={this.myChangeHandler}
                     value={this.state.q_id}
                     type="text" 
                     placeholder="Enter Question id"
                    />
                    <i onClick={this.Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                   {/* messege */}
                <div>
                    <label>Question :</label>
                    <br />
                    <input
                     name="messege"
                     onChange={this.myChangeHandler}
                     value={this.state.messege}
                     type="text" 
                     placeholder="Enter Question ..."
                    />
                    <i onClick={this.Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                   {/* trigger */}
                <div>
                    <label>Answer id :</label>
                    <br />
                    <input
                     name="trigger"
                     onChange={this.myChangeHandler}
                     value={this.state.trigger}
                     type="text" 
                     placeholder="Enter Answer id"
                    />
                    <i onClick={this.Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                   {/* component */}
                {/* <div>
                    <label>Components :</label>
                    <br />
                    <input
                     name=""
                     onChange={this.myChangeHandler}
                     type="text" 
                     placeholder="Enter Components"
                     disabled
                    />
                    <i onClick={this.Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div> */}
                   {/* end */}
                <div>
                    <label>End :</label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input
                         className="form-check-input" 
                         type="radio" 
                         name="end" 
                         id="end_yes" 
                         value="true"
                         onChange={this.myChangeHandler}
                         />
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                         className="form-check-input" 
                         type="radio" 
                         name="end" 
                         id="end_no" 
                         onChange={this.myChangeHandler}
                         value="false"
                         defaultChecked
                         />
                        <label className="form-check-label">No</label>
                    </div>
                </div>
                   {/* user */}
                <div>
                    <label>User Input :</label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input
                         className="form-check-input" 
                         type="radio" 
                         name="user" 
                         id="user_yes" 
                         value="user_yes"
                         />
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                         className="form-check-input" 
                         type="radio" 
                         name="user" 
                         id="user_no" 
                         value="user_no" 
                         defaultChecked/>
                        <label className="form-check-label">No</label>
                    </div>
                    </div>
                   {/* waitaction */}
                <div>
                    <label>Wait :</label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input
                         className="form-check-input" 
                         type="radio" 
                         name="inlineRadioOptions" 
                         id="waitaction_yes" 
                         value="waitaction_yes"
                         />
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                         className="form-check-input" 
                         type="radio" 
                         name="inlineRadioOptions" 
                         id="waitaction_no" 
                         value="waitaction_no" 
                         defaultChecked
                         />
                        <label className="form-check-label">No</label>
                    </div>
                    </div>
                    <div className="icon-view-submit">
                        <i onClick={this.Demo} className="fa fa-arrow-circle-right icon-submit" type="submit"></i>
                    </div>
                </form>
                {/* Answer Set */}
                <div className="ques-div">
                   <p>Answer</p> 
                <div>
                    <label>Question Id :</label>
                    <br />
                    <input 
                     placeholder="Enter Question id"
                    />
                    <i onClick={this.Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                </div>
            </div>
            <div className="box-adminpanel-right">
            <h1>Setup Preview</h1>
            <div className="setup-div">
                {/* Setup */}
                <p>
                    Question:{this.state.messege}<br />
                    End:{this.state.end}
                </p>
                <p>
                   Answers: {this.state.options.label}
                </p>
            </div>
            </div>
            </div>
        </div>
    )
}
}


export default AdminPanel;