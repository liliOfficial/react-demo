import React, { Component } from 'react';

export default class Footer extends Component {
    render() {

        const element = (
            <div className="layout-footer">
                <div className="layout-footer-body">
                    <small className="version">Version 1.0.0</small>
                    <small className="copyright">2017 &copy; BREAKABLE.COM</small>
                </div>
            </div>

        );
        return (
            element
        );
    }
}