import React from 'react';
import { Route,Switch } from 'react-router-dom';
import BfcCricket from '../Extra/BfcCricket';
import './Admin.css';
import AdminPanel from './AdminPanel';
import HNYwish from './HNYWISH';

import Login from './Login';


function Admin(){
    return(
<div>
    <Switch>
        <Route path="/admin" component={Login} />
        <Route path="/adminpanel" component={AdminPanel} />
        <Route path="/bfc-cricket-info" component={BfcCricket} />
        <Route path="/hny-wish-data" component={HNYwish} />
    </Switch>
</div>
    );
}


export default Admin;