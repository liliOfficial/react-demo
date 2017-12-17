import React, { Component } from 'react';
import TableEdit from './../UI/TableEdit';


export default class AffiliateSetting extends Component {
    constructor() {
        super();
        this.state = {
            tableMap: [
                {
                    tableHeader: "Group",
                    jsonKey: "group"
                },
                {
                    tableHeader: "Hot",
                    jsonKey: "hot"
                },
                {
                    tableHeader: "Sale",
                    jsonKey: "sale"
                },
                {
                    tableHeader: "Milk Powder",
                    jsonKey: "milkPowder"
                },
                {
                    tableHeader: "Health Care Products",
                    jsonKey: "healthCareProducts"
                },
            ],
            json: [
                {
                    "group": "Family",
                    "hot": "10%",
                    "sale": "10%",
                    "milkPowder": "10%",
                    "healthCareProducts": "10%"
                },
                {
                    "group": "Normal Clients",
                    "hot": "9%",
                    "sale": "8%",
                    "milkPowder": "7%",
                    "healthCareProducts": "6%"
                }
            ]
        }
        this.onEdit = this.onEdit.bind(this);
    }
    onEdit(e) {

        const value = e.target.value;
        const changeKey = e.target.dataset.field;
        const row = e.target.dataset.row;
        console.log(changeKey);
        console.log(row);
        console.log(this.state.json[row][changeKey]);
        // this.setState({
            
        //     json: [
        //         {
        //             "group": "Family",
        //             "hot": "10%",
        //             "sale":"10%",
        //             "milkPowder":"10%",
        //             "healthCareProducts":value,
        //         }
        //     ]
        // });
    }
    render() {

        const element = (
            <div className="layout-content-body">
                <div className="title-bar">
                    <h1 className="title-bar-title">
                        <span className="d-ib">Affiliate Setting</span>
                    </h1>
                </div>
                <div className="card">
                    <div className="card-body">
                        <TableEdit tableMap={this.state.tableMap} json={this.state.json} onEdit={this.onEdit} />
                    </div>
                </div>
            </div>

        );
        return (
            element
        );
    }
}