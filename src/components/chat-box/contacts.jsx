import React, { Component } from 'react';

const ContactList = ({ contacts }) => (
    contacts.map(contactDetails => (
        <li key={"contact" + contactDetails.id}>
            <a href={contactDetails.link}>
                <img className="contacts-list-img" src={contactDetails.avatar} />
                <div className="contacts-list-info">
                    <span className="contacts-list-name">
                        {contactDetails.name}
                        <small className="contacts-list-date pull-right">
                            {contactDetails.date}
                        </small>
                    </span>
                    <span className="contacts-list-msg">
                        {contactDetails.message}
                    </span>
                </div>
                {/* /.contacts-list-info */}
            </a>
        </li>
    ))
);

class Contacts extends Component {

    render() {
        return (
            <div className="direct-chat-contacts">
                <ul className="contacts-list">
                    {/* {contacts} */}
                    <ContactList contacts={this.props.contacts} />
                    {/* End Contact Item */}
                </ul>
                {/* /.contatcts-list */}
            </div>
        );
    }
}

export default Contacts;