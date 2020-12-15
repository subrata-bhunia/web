import React from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import logo from '../../logo.svg';

const Demo=()=>{
    console.log("Ok")
}
const AdminPanel=()=>{

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
                     placeholder="Enter Question id"
                    />
                    <i onClick={Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                   {/* messege */}
                <div>
                    <label>Question :</label>
                    <br />
                    <input 
                     placeholder="Enter Question ..."
                    />
                    <i onClick={Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                   {/* trigger */}
                <div>
                    <label>Answer id :</label>
                    <br />
                    <input 
                     placeholder="Enter Answer id"
                    />
                    <i onClick={Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                   {/* component */}
                <div>
                    <label>Components :</label>
                    <br />
                    <input 
                     placeholder="Enter Components"
                     disabled
                    />
                    <i onClick={Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                   {/* end */}
                <div>
                    <label>End :</label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="end" id="true" value="end_yes"/>
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="end" id="false" value="end_no" defaultChecked/>
                        <label className="form-check-label">No</label>
                    </div>
                </div>
                   {/* user */}
                <div>
                    <label>User Input :</label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="user" id="true" value="user_yes"/>
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="user" id="false" value="user_no" defaultChecked/>
                        <label className="form-check-label">No</label>
                    </div>
                    </div>
                   {/* waitaction */}
                <div>
                    <label>Question Id :</label>
                    <br />
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="true" value="waitaction_yes"/>
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="false" value="waitaction_no" defaultChecked/>
                        <label className="form-check-label">No</label>
                    </div>
                    </div>
                    <div className="icon-view-submit">
                        <i onClick={Demo} className="fa fa-arrow-circle-right icon-submit" type="submit"></i>
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
                    <i onClick={Demo} className="fa fa-arrow-circle-right icon-view"></i>
                </div>
                </div>
            </div>
            <div className="box-adminpanel-right">
            <h1>Setup Preview</h1>
            <div className="setup-div">

            </div>
            </div>
            </div>
        </div>
    )
}


export default AdminPanel;