import React, { Component } from 'react';
import photo from './../images/photo.jpg';
import logo from './../images/breakable.png';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            userDropDown: false,
            langDropDown: false,
            mobileAccount: false,
            menu: false
        }
    }

    dropDownToggle(e) {
        this.setState((prevState) => ({
            userDropDown: !prevState.userDropDown
        }));
    }

    langDropDownToggle(e) {
        this.setState((prevState) => ({
            langDropDown: !prevState.langDropDown
        }));
    }

    mobileDropDown(e) {
        this.setState((prevState) => ({
            mobileAccount: !prevState.mobileAccount
        }));
    }

    menuStatus(e) {
        this.setState((prevState) => ({
            menu: !prevState.menu
        }));
        this.props.changeSidbarState(!this.state.menu);
    }

    render() {
        const element = (
            <div className="layout-header">
                <div className="navbar navbar-default">
                    <div className="navbar-header">
                        <a className="navbar-brand navbar-brand-center">
                            <img className="navbar-brand-logo" src={logo} alt="BREAKABLE" />
                        </a>
                        <button className={"navbar-toggler visible-xs-block " + (this.state.menu ? "" : "collapsed")} type="button" onClick={this.menuStatus.bind(this)}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="bars">
                                <span className="bar-line bar-line-1 out"></span>
                                <span className="bar-line bar-line-2 out"></span>
                                <span className="bar-line bar-line-3 out"></span>
                            </span>
                            <span className="bars bars-x">
                                <span className="bar-line bar-line-4"></span>
                                <span className="bar-line bar-line-5"></span>
                            </span>
                        </button>
                        <button className={"navbar-toggler visible-xs-block " + (this.state.mobileAccount ? "" : "collapsed")} type="button" onClick={this.mobileDropDown.bind(this)}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="arrow-up"></span>
                            <span className="ellipsis ellipsis-vertical">
                                <img className="ellipsis-object" width="32" height="32" src={photo}
                                    alt="Teddy Wilson" />
                            </span>
                        </button>
                    </div>

                    <div className="navbar-toggleable">
                        <nav className={"navbar-collapse collapse " + (this.state.mobileAccount ? "in" : "")}>
                            <button className={"sidenav-toggler hidden-xs "+ (this.state.menu ? "collapsed" : "")} type="button" onClick={this.menuStatus.bind(this)}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="bars">
                                    <span className="bar-line bar-line-1 out"></span>
                                    <span className="bar-line bar-line-2 out"></span>
                                    <span className="bar-line bar-line-3 out"></span>
                                    <span className="bar-line bar-line-4 in"></span>
                                    <span className="bar-line bar-line-5 in"></span>
                                    <span className="bar-line bar-line-6 in"></span>
                                </span>
                            </button>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="visible-xs-block">
                                    <h4 className="navbar-text text-center">Hi, Li Li</h4>
                                </li>
                                <li className="hidden-xs hidden-sm">
                                    <form className="navbar-search navbar-search-collapsed">
                                        <div className="navbar-search-group">
                                            <input className="navbar-search-input" type="text" placeholder="Search for people, companies, and more&hellip;" />
                                            <button className="navbar-search-toggler collapsed">
                                                <span className="fa fa-search icon-lg"></span>
                                            </button>
                                            <button className="navbar-search-adv-btn" type="button">Advanced</button>
                                        </div>
                                    </form>
                                </li>
                                <li className={'dropdown ' + (this.state.langDropDown ? "open" : "")} onClick={this.langDropDownToggle.bind(this)}>
                                    <a className="dropdown-toggle">
                                        <span className="icon-with-child hidden-xs">
                                            <img className="rounded" height="15" src={require('./../images/gb.svg')} alt="" />
                                        </span>
                                        <span className="visible-xs-block">
                                            <span className="fa fa-globe icon-lg icon-fw"></span>
                                            Language
                                        </span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-language">
                                        <div className="dropdown-body">
                                            <div className="list-group-divided">
                                                <a className="list-group-item" href="#">
                                                    <div className="notification">
                                                        <div className="notification-media">
                                                            <img className="rounded" height="15" src={require('./../images/gb.svg')} alt=""/>
                                                        </div>
                                                        <div className="notification-content">
                                                            <h5 className="notification-heading">English</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a className="list-group-item" href="#">
                                                    <div className="notification">
                                                        <div className="notification-media">
                                                            <img className="rounded" height="15" src={require('./../images/cn.svg')} />
                                                        </div>
                                                        <div className="notification-content">
                                                            <h5 className="notification-heading">Chinese</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={'dropdown hidden-xs ' + (this.state.userDropDown ? "open" : "")} onClick={this.dropDownToggle.bind(this)}>
                                    <button className="navbar-account-btn">
                                        <img className="circle" width="36" height="36" src={photo}
                                            alt="photo" />
                                        <span className="p-l-sm">Hello, Li Li</span>

                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li className="navbar-upgrade-version">Version: 1.0.0</li>
                                        <li className="divider"></li>
                                        <li>
                                            <a>Setting</a>
                                        </li>
                                        <li>
                                            <a>Sign out</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="visible-xs-block">
                                    <a ui-sref="root.contacts">
                                        <span className="fa fa-users icon-lg icon-fw"></span>
                                        Setting
                                    </a>
                                </li>
                                <li className="visible-xs-block">
                                    <a>
                                        <span className="fa fa-power-off icon-lg icon-fw"></span>
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div >
                </div >
            </div >
        );
        return (
            element
        );
    }
}