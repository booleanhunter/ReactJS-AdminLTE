define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var Contacts = createReactClass({
            render: function() {

                var contacts = this.props.contacts.map(function(contactDetails, iterator){
                    return (
                        <li key={"contact"+iterator}>
                            <a href={contactDetails.link}>
                                <img className="contacts-list-img" src={contactDetails.displayPicture} />
                                <div className="contacts-list-info">
                                    <span className="contacts-list-name">
                                        {contactDetails.displayName}
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
                    )
                });

                return (
                    <div className="direct-chat-contacts">
                        <ul className="contacts-list">
                            {contacts}
                            {/* End Contact Item */}
                        </ul>
                        {/* /.contatcts-list */}
                    </div>
                )
            }
        });

        return Contacts;
    }
)