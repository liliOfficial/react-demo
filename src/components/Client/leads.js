import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableView from './../UI/TableView';
import Pagination from './../UI/Pagination';

export default class ClientLeads extends Component {
    constructor() {
        super();
        this.state = {
            tableMap: [
                {
                    tableHeader: "Client ID",
                    jsonKey: "clientId"
                },
                {
                    tableHeader: "Name",
                    jsonKey: "url"
                },
                {
                    tableHeader: "Phone",
                    jsonKey: "phone"
                },
                {
                    tableHeader: "Address",
                    jsonKey: "address"
                },
                {
                    tableHeader: "Email",
                    jsonKey: "email"
                },
                {
                    tableHeader: "Status",
                    jsonKey: "status"
                }
            ],
            json: [
                {
                    "clientId": "C16545",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16545"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16546",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16546"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16547",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16547"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16548",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16548"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16549",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16549"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16550",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16550"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16551",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16551"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16552",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16552"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16553",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16553"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                },
                {
                    "clientId": "C16554",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16554"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                }, {
                    "clientId": "C16555",
                    "url": {
                        "content": "ZhangSan",
                        "url": "/client/details/C16555"
                    },
                    "phone": "0405000000",
                    "address": "12 Help Street, Chatswood, NSW, 2500",
                    "email": "zhangsan@zerologix.com",
                    "status": "Active"
                }

            ],
            startNum: 1,
            endNum: 10,
            totalNum: 60,
            currentPage: 2,
            totalPage: 11,
        }
    }

    changeCurrentPage(currentPage) {
        this.setState({ currentPage })
    }

    render() {

        const element = (
            <div className="layout-content-body">
                <div className="title-bar">
                    <h1 className="title-bar-title">
                        <span className="d-ib">Leads</span>
                    </h1>
                </div>
                <div className="card">
                    <div className="card-body">
                        <TableView tableMap={this.state.tableMap} json={this.state.json} />
                        <Pagination
                            startNum={this.state.StartNum}
                            endNum={this.state.endNum}
                            totalNum={this.state.totalNum}
                            currentPage={this.state.currentPage}
                            totalPage={this.state.totalPage}
                            changeCurrentPage={this.changeCurrentPage.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
        return (
            element
        );
    }
}