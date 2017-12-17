import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ClientSubLeads extends Component {
    render() {

        const element = (
            <div className="layout-content-body">
                <div className="title-bar">
                    <h1 className="title-bar-title">
                        <span className="d-ib">Sub Leads</span>
                    </h1>
                </div>
                <div className="card">
                    <div className="card-body">
                    <Link to={`/client/details/125`}>client detail</Link>
                    </div>
                </div>
            </div>

        );
        return (
            element
        );
    }
}