import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './Admin.css';
import AdminPanel from './AdminPanel';

import Login from './Login';


function Admin(){
    return(
<div>
    <Switch>
        <Route path="/admin" component={Login} />
        <Route path="/adminpanel" component={AdminPanel} />
    </Switch>
</div>
    );
}


export default Admin;