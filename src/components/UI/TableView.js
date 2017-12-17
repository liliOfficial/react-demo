import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TableView extends Component {
    // Need props: tableMape & json

    // constructor() {
    //     super();
    //     this.state = {
    //         tableMap: [
    //             {
    //                 tableHeader: "Client ID",
    //                 jsonKey: "clientId"
    //             }
    //         ],
    //         json: [
    //             {
    //                 "clientId": "C16545",
    //                 "url": {
    //                     "content": "ZhangSan",
    //                     "url": "/client/details/C16555"
    //                 },
    //                 "phone": "0405000000",
    //                 "address": "12 Help Street, Chatswood, NSW, 2500",
    //                 "email": "zhangsan@zerologix.com",
    //                 "status": "Active"
    //             }
    //         ]
    //     }
    // }

    render() {
        var self = this;

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
                    <TableTd json={json} td={self.props.tableMap} />
                </tr>
            )
            return (
                tableTr
            )
        }

        function TableTd(props) {
            var json = props.json;
            const tableTd = props.td.map((items, index) => {
                let keyName = items.jsonKey;
                let value = json[keyName];
                if (keyName === "url") {
                    return <td key={index}><Link to={value.url}>{value.content}</Link></td>
                }
                return <td key={index}>{value}</td>
            });
            return (
                tableTd
            )
        }

        const element = (
            < div >
                <div className="table-responsive">
                    <table className="table table-hover table-striped table-nowrap dataTable no-footer dtr-inline collapsed"
                        width="100%" role="grid">
                        <thead>
                            <tr role="row">
                                <TableTh theader={this.props.tableMap} />
                            </tr>
                        </thead>
                        <tbody>
                            <TableTr tr={this.props.json} />
                        </tbody>
                    </table>
                </div>

            </div >
        );
        return (
            element
        );
    }
}