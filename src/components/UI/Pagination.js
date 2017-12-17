import React, { Component } from 'react';

export default class Pagination extends Component {
    // Need props: startNumb, endNum, totalNum, currentPage & totalPage 
    // props function: changeCurrentPage
    
    // Example:
    // <Pagination
    // startNum={this.state.StartNum}
    // endNum={this.state.endNum}
    // totalNum={this.state.totalNum}
    // currentPage={this.state.currentPage}
    // totalPage={this.state.totalPage}
    // changeCurrentPage={this.changeCurrentPage.bind(this)}
    // />

changeCurrentPage(e) {
    this.props.changeCurrentPage(e.target.text);
}

render() {
    var self = this;
    function PaginationLi(props) {
        var pageArr = [];

        if (props.totalPage <= 5) {
            for (let i = 0; i < props.totalPage; i++) {
                pageArr.push(i + 1);
            }
        } else if (props.currentPage < 3) {
            for (let i = 0; i < 5; i++) {
                pageArr.push(i + 1);
            }
        } else if (props.totalPage - props.currentPage < 2) {
            for (let i = 0; i < 5; i++) {
                pageArr.push(props.totalPage - 4 + i);
            }
        } else {
            for (let i = 0; i < 5; i++) {
                pageArr.push(props.currentPage - 2 + i);
            }
        };

        const paginationLi = pageArr.map((item) =>
            <li className={"paginate_button " + (props.currentPage == item ? "active" : "")} key={item} onClick={self.changeCurrentPage.bind(self)}>
                <a href="#">{item}</a>
            </li>
        )
        return (
            paginationLi
        );

    }
    const element = (
        <div className="row">
            <div className="col-sm-6">
                <div className="dataTables_info">Showing {this.props.startNum} to {this.props.endNum} of {this.props.totalNum} entries</div>
            </div>
            <div className="col-sm-6">
                <div className="dataTables_paginate paging_simple_numbers pull-right">
                    <ul className="pagination">
                        <li className={"paginate_button previous " + (this.props.currentPage == 1 ? "disabled" : "")} >
                            <a href="#">«</a>
                        </li>
                        <PaginationLi totalPage={this.props.totalPage} currentPage={this.props.currentPage} />
                        <li className={"paginate_button next " + (this.props.currentPage == this.props.totalPage ? "disabled" : "")}>
                            <a href="#">»</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
    return (
        element
    );
}
}
