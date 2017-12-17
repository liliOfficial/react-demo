import React, { Component } from 'react';

export default class ClientLeads extends Component {
    constructor() {
        super();
        this.state = {
            docContent: {
                idNumber: '1010199001010011',
                img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo5KTrQ5fczNNBcTfk5Z9tZpFKJmXF3iCXOLySRJ2M3LFcU_TMw',
                img2: 'http://img2.wikia.nocookie.net/__cb20141105011916/the-binding-of-isaac-rebirth-fr/fr/images/5/50/Wiki-background',
                upDateTime: '25/10/2017 12:12:12'
            },
            infoList: [
                { id: 1, title: 'Last Name', detail: 'Li' },
                { id: 2, title: 'First Name', detail: 'Li' },
                { id: 3, title: 'Phone', detail: '0405000000' },
                { id: 4, title: 'Email', detail: 'li.li@zerologix.com' },
                { id: 5, title: 'Address', detail: '12 Help Street, Chatswood, NSW, 2500' },
                { id: 6, title: 'City', detail: 'Chatswood' },
                { id: 7, title: 'State', detail: 'NSW' },
                { id: 8, title: 'Country', detail: 'Australia' },
                { id: 9, title: 'Zip Code', detail: '2069' },
                { id: 10, title: 'Group', detail: 'Family' },
                { id: 11, title: 'Interests', detail: 'Health' },
                { id: 12, title: 'Social', detail: 'QQ 123456789' },
                { id: 13, title: 'Status:', detail: 'Active' }
            ]
        }
    }

    render() {
        const docImage1 = {
            background: 'url(' + this.state.docContent.img1 + ')'
        }
        const docImage2 = {
            background: 'url(' + this.state.docContent.img2 + ')'
        }
        function List(props) {
            const listContent = props.infoList.map((items) =>
                <div className="row" key={items.id}>
                    <div className="col-md-3 info-title">{items.title}</div>
                    <div className="col-md-9 info-content">{items.detail}</div>
                </div>
            )
            return (
                listContent
            );
        }
        const element = (
            <div className="row">
                <div className="col-md-6">
                    <h4>
                        Client Information
                    </h4>
                    <List infoList={this.state.infoList} />
                </div>
                <div className="col-md-6">
                    <h4>
                        Document
                </h4>
                    <h5 className="media-heading">
                        <span className="info-title">ID No. </span>
                        <span className="text-muted p-l-sm">{this.state.docContent.idNumber}</span>
                    </h5>
                    <div className="m-b-sm">
                        <img className="info-img" style={docImage1} />
                        <img className="info-img" style={docImage2} />
                    </div>
                    <h5 className="media-heading">
                        <span className="info-title">Update Time: </span>
                        <span className="text-muted p-l-sm">{this.state.docContent.upDateTime}</span>
                    </h5>
                </div>
            </div>
        );
        return (
            element
        );
    }
}