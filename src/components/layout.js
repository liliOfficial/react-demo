import React, { Component } from 'react';
import Routes from './../routes';

import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

export default class Layout extends Component {
    constructor() {
        super();
        this.state = {
            sidebarCollapsed: false
        };
    }

    changeSidbarState(sidebarCollapsed) {
        this.setState({ sidebarCollapsed });
    }
    render() {

        const element = (
            <div className={"layout layout-footer-fixed layout-header-fixed " + (this.state.sidebarCollapsed ? "layout-sidebar-collapsed" : "")}>
                <Header changeSidbarState={this.changeSidbarState.bind(this)} />
                <Sidebar sidebarCollapsed={this.state.sidebarCollapsed} />
                <div className="layout-content">
                    <Routes />
                </div>
                <Footer />
            </div>

        );
        return (
            element
        );
    }
}
