import React, { Component } from 'react';
import './clientDetail.css';
import ClientDetailInfo from './clientDetailInfo.js';
import ClientDetailOrderHistory from './clientDetailOrderHistory';
import ClientDetailSubaccount from './clientDetailSubaccount';

export default class ClientDetail extends Component {
  constructor() {
    super();
    this.state = {
      contentShow: <ClientDetailInfo />,
      activeTab: "info"
    }
  }
  
  showClientInfo(e) {
    this.setState({
      contentShow: <ClientDetailInfo />,
      activeTab:"info"
    });
  }

  showClientOrderHistory(e) {
    this.setState({
      contentShow: <ClientDetailOrderHistory />,
      activeTab:"order"
    });
  }

  showClientSubaccount(e) {
    this.setState({
      contentShow: <ClientDetailSubaccount />,
      activeTab:"sub"
    });
  }

  render() {
    const params = this.props.match.params;
    const element = (
      <div className="layout-content-body">
        <ul className="list-group list-group-divided">
          <li className="list-group-item p-x-0 p-y-0">
            <div className="row p-b-sm p-t-md bg-white">
              <div className="col-xs-4">
                <h6 className="media-heading">
                  <span className="text-muted">Client ID</span>
                </h6>
                <h4 className="media-heading">{params.id}</h4>
              </div>
              <div className="col-xs-4">
                <h6 className="media-heading">
                  <span className="text-muted">Client Type</span>
                </h6>
                <h4 className="media-heading">Affiliate</h4>
              </div>
              <div className="col-xs-4">
                <h6 className="media-heading">
                  <span className="text-muted">Affiliate ID</span>
                </h6>
                <h4 className="media-heading">A1257</h4>
              </div>
            </div>
          </li>
        </ul>
        <div className="panel m-b-lg">
          <ul className="nav nav-tabs nav-justified">
            <li className={(this.state.activeTab == "info"?"active":"")} onClick={this.showClientInfo.bind(this)}>
              <a>Client Info</a>
            </li>
            <li className={(this.state.activeTab == "order"?"active":"")} onClick={this.showClientOrderHistory.bind(this)}>
              <a>Order History</a>
            </li>
            <li className={(this.state.activeTab == "sub"?"active":"")} onClick={this.showClientSubaccount.bind(this)}>
              <a>Sub Accounts</a>
            </li>
          </ul>
          <div className="card">
            <div className="card-body">
              {this.state.contentShow}
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