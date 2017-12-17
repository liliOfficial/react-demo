import React, { Component } from 'react';

export default class ClientLeads extends Component {
    render() {

        const element = (
            <div className="layout-content-body">
                <div className="title-bar">
                    <h1 className="title-bar-title">
                        <span className="d-ib">Dashboard</span>
                    </h1>
                </div>
                <div className="row gutter-xs">
                    <div className="col-md-6 col-lg-3 col-lg-push-0" >
                        <div className="card">
                            <div className="card-body" >
                                <div className="media">
                                    <div className="media-middle media-left">
                                        <span className="bg-primary circle sq-48">
                                            <span className="fa fa-user"></span>
                                        </span>
                                    </div>
                                    <div className="media-middle media-body" >
                                        <h6 className="media-heading">Accounts</h6>
                                        <h3 className="media-heading">
                                            <span className="fw-l">1,031,760</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-lg-push-3">
                        <div className="card">
                            <div className="card-body" >
                                <div className="media">
                                    <div className="media-middle media-left">
                                        <span className="bg-danger circle sq-48">
                                            <span className="fa fa-tasks"></span>
                                        </span>
                                    </div>
                                    <div className="media-middle media-body">
                                        <h6 className="media-heading">Affiliate Tasks</h6>
                                        <h3 className="media-heading">
                                            <span className="fw-l">26 New</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-lg-pull-3">
                        <div className="card">
                            <div className="card-body" >
                                <div className="media">
                                    <div className="media-middle media-left">
                                        <span className="bg-primary circle sq-48">
                                            <span className="fa fa-file-text"></span>
                                        </span>
                                    </div>
                                    <div className="media-middle media-body">
                                        <h6 className="media-heading">Document Tasks</h6>
                                        <h3 className="media-heading">
                                            <span className="fw-l">1,231,760</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-lg-pull-0">
                        <div className="card">
                            <div className="card-body" >
                                <div className="media">
                                    <div className="media-middle media-left">
                                        <span className="bg-danger circle sq-48">
                                            <span className="fa fa-shopping-cart"></span>
                                        </span>
                                    </div>
                                    <div className="media-middle media-body">
                                        <h6 className="media-heading">Orders</h6>
                                        <h3 className="media-heading">
                                            <span className="fw-l">8,888,888</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
        return (
            element
        );
    }
}