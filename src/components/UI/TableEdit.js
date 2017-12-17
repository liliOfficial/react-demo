import React, { Component } from 'react';

export default class TableEdit extends Component {
    // Need props: tableMape & json

    constructor(props) {
        super(props);
        this.state = {
            // tableMap: [
            //     {
            //         tableHeader: "Client ID",
            //         jsonKey: "clientId"
            //     }
            // ],
            // json: [
            //     {
            //         "clientId": "C16545",
            //         "url": {
            //             "content": "ZhangSan",
            //             "url": "/client/details/C16555"
            //         },
            //         "phone": "0405000000",
            //         "address": "12 Help Street, Chatswood, NSW, 2500",
            //         "email": "zhangsan@zerologix.com",
            //         "status": "Active"
            //     }
            // ]
            json: props.json,
            status: "view"
        }
    }
    
    statusAdd(e) {
        this.setState({
            status:"add"
        })
    }
    statusView(e) {
        this.setState({
            status:"view"
        })
    }
    statusEdit(e) {
        this.setState({
            status:"edit"
        })
    }
    changeValue(e) {
        console.log(e.target);
    }

    render() {
        var self = this;

        function Filter() {
            if (self.state.status === "view") {
                return (
                    <div>
                        <button className="btn btn-default btn-sm" type="button" onClick={self.statusAdd.bind(self)}>
                            <span className="fa fa-plus icon-md icon-fw"></span> Add
                        </button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={self.statusEdit.bind(self)}>
                            <span className="fa fa-edit icon-md icon-fw"></span> Edit
                        </button>
                    </div>
                )
            }
            if (self.state.status === "add") {
                return (
                    <button className="btn btn-warning btn-sm" type="button" onClick={self.statusView.bind(self)}>
                        <span className="fa fa-close icon-md icon-fw"></span> Cancel Add
                  </button>
                )
            }
            if (self.state.status === "edit") {
                return (
                    <div>
                        <button className="btn btn-info btn-sm" type="button">
                            <span className="fa fa-save icon-md icon-fw"></span> Save Edit
                        </button>
                        <button className="btn btn-danger btn-sm" type="button" onClick={self.props.onEdit}>
                            <span className="fa fa-close icon-md icon-fw"></span> Cancel Edit
                        </button>
                    </div>
                )
            }
        }

        function TableTh(props) {
            const tableTh = props.theader.map((items, index) =>
                <th key={index}>{items.tableHeader}</th>
            );
            return (
                tableTh
            )
        }

        function TableTr(props) {
            const tableTr = props.tr.map((json, index) =>
                <tr key={index}>
                    <TableTd json={json} td={self.props.tableMap} row={index} />
                </tr>
            )
            return (
                tableTr
            )
        }

        function TableTd(props) {
            var json = props.json;
            var row = props.row;
            const tableTd = props.td.map((items, index) => {
                let keyName = items.jsonKey;
                let value = json[keyName];
                if (self.state.status === "edit") {
                    return (
                        <td key={index}>
                            <input className="form-control" type="text" value={value} onChange={self.props.onEdit} data-field={keyName} data-row={row}/>
                        </td>
                    )        
                }
                return (
                    <td key={index}>
                        <input className="form-control" type="text" value={value} disabled />
                    </td>
                )
            });
            return (
                tableTd
            )
        }

        const element = (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-6">
                        <div className="dataTables_filter">
                            <Filter />
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-striped table-bordered dataTable"
                        width="100%" role="grid">
                        <thead>
                            <tr role="row">
                                <TableTh theader={this.props.tableMap} />
                            </tr>
                        </thead>
                        <tbody>
                            <TableTr tr={this.state.json} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
        return (
            element
        );
    }
}