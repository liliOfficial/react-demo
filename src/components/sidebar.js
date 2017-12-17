import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        const element = (
            <div className="layout-sidebar">
                <div className="layout-sidebar-backdrop"></div>
                <div className="layout-sidebar-body">
                    <div className="custom-scrollbar" color="#fff">
                        <nav className={"sidenav-collapse collapse " + (this.props.sidebarCollapsed ? "in" : "")}>
                            <ul className={"sidenav " + (this.props.sidebarCollapsed ? "sidenav-collapsed" : "")}>
                                <li className="sidenav-search hidden-md hidden-lg">
                                    <form className="sidenav-form" action="/">
                                        <div className="form-group form-group-sm">
                                            <div className="input-with-icon">
                                                <input className="form-control" type="text" placeholder="Search…" />
                                                <span className="fa fa-search input-icon"></span>
                                            </div>
                                        </div>
                                    </form>
                                </li>
                                <li className="sidenav-item">
                                    <a >
                                        <span className="sidenav-icon fa fa-home"></span>
                                        <span className="sidenav-label">Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidenav-heading">Administration</li>
                                <li className="sidenav-item">
                                    <a >
                                        <span className="sidenav-icon fa fa-user-secret"></span>
                                        <span className="sidenav-label">Roles</span>
                                    </a>
                                </li>
                                <li className="sidenav-item">
                                    <a >
                                        <span className="sidenav-icon fa fa-users"></span>
                                        <span className="sidenav-label">Users</span>
                                    </a>
                                </li>
                                <li className="sidenav-heading">Client</li>
                                <li className="sidenav-item has-subnav">
                                    <a>
                                        <span className="sidenav-icon fa fa-user"></span>
                                        <span className="sidenav-label">Clients</span>
                                    </a>
                                    <ul className="sidenav-subnav collapse in">
                                        <li className="sidenav-subheading">Clients</li>
                                        <li >
                                            <Link to="/client/leads">Leads</Link>
                                        </li>
                                        <li>
                                            <Link to="/client/accounts">Accounts</Link>
                                        </li>
                                        <li>
                                            <Link to="/client/affiliates">Affiliates</Link>
                                        </li>
                                        <li>
                                            <Link to="/client/subleads">Sub Leads</Link>
                                        </li>
                                        <li>
                                            <Link to="/client/subaccounts">Sub Accounts</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidenav-item has-subnav">
                                    <a>
                                        <span className="sidenav-icon fa fa-tasks"></span>
                                        <span className="sidenav-label">Task</span>
                                    </a>
                                    <ul className="sidenav-subnav collapse">
                                        <li className="sidenav-subheading">Task</li>
                                        <li>
                                            <a >
                                                <span className="badge badge-danger">26</span>Affiliate Task</a>
                                        </li>
                                        <li>
                                            <a >Document Task</a>
                                        </li>
                                    </ul>
                                </li >
                                <li className="sidenav-item" >
                                    <Link to="/affiliate-setting">
                                        <span className="sidenav-icon fa fa-cogs"></span>
                                        <span className="sidenav-label">Affiliate Setting</span>
                                    </Link>
                                </li>

                                <li className="sidenav-heading">Treasury</li>
                                <li className="sidenav-item" >
                                    <a>
                                        <span className="sidenav-icon fa fa-money"></span>
                                        <span className="sidenav-label">Treasury</span>
                                    </a>
                                </li>
                                <li className="sidenav-item">
                                    <a>
                                        <span className="sidenav-icon fa fa-sliders"></span>
                                        <span className="sidenav-label">Treasury Setting</span>
                                    </a>
                                </li>

                                <li className="sidenav-heading">Orders</li>
                                <li className="sidenav-item">
                                    <a>
                                        <span className="sidenav-icon fa fa-shopping-cart"></span>
                                        <span className="sidenav-label">Orders</span>
                                    </a>
                                </li>
                                <li className="sidenav-item">
                                    <a >
                                        <span className="sidenav-icon fa fa-clock-o"></span>
                                        <span className="sidenav-label">Pending Orders</span>
                                    </a>
                                </li>
                                <li className="sidenav-item" >
                                    <a >
                                        <span className="sidenav-icon fa fa-truck"></span>
                                        <span className="sidenav-label">Delivered Orders</span>
                                    </a>
                                </li>

                                <li className="sidenav-heading">Others</li>

                                <li className="sidenav-item" >
                                    <a >
                                        <span className="sidenav-icon fa fa-line-chart"></span>
                                        <span className="sidenav-label">Marketing</span>
                                    </a>
                                </li>
                                <li className="sidenav-item" >
                                    <a >
                                        <span className="sidenav-icon fa fa-wrench"></span>
                                        <span className="sidenav-label">Freight Setting</span>
                                    </a>
                                </li>

                                <li className="sidenav-heading">Examples</li>
                                <li className="sidenav-item">
                                    <a>
                                        <span className="sidenav-icon fa fa-shopping-cart"></span>
                                        <span className="sidenav-label">Client Orders</span>
                                    </a>
                                </li>
                            </ul >
                        </nav >
                    </div >
                </div >

            </div >

        );
        return (
            element
        );
    }
}