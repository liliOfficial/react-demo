import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Dashboard from './components/Dashboard/dashboard';
import ClientLeads from './components/Client/leads';
import ClientAccounts from './components/Client/accounts';
import ClientAffiliates from './components/Client/affiliates';
import ClientSubLeads from './components/Client/subleads';
import ClientSubAccounts from './components/Client/subaccounts';
import ClientDetail from './components/Client/clientDetail';
import ClientDetailInfo from './components/Client/clientDetailInfo';
import AffiliateSetting from './components/AffiliateSetting/affiliateSetting';

export default class Routes extends Component {
    render() {

        const element = (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/client/leads" component={ClientLeads} />
                <Route path="/client/accounts" component={ClientAccounts} />
                <Route path="/client/affiliates" component={ClientAffiliates} />
                <Route path="/client/subleads" component={ClientSubLeads} />
                <Route path="/client/subaccounts" component={ClientSubAccounts} />
                <Route path="/client/details/:id" component={ClientDetail}/>
                <Route path="/affiliate-setting" component={AffiliateSetting}/>
            </Switch>        
            );
        return (
            element
        );
    }
}