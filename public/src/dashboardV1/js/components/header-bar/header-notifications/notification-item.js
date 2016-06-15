define(
    [
        'react'
    ],
    function (React) {
        var NotificationItem = React.createClass({

            render: function () {
                return (
                    <li key={"header-notification-item"}>
                        <a href="#">
                            <i className={this.props.theme}></i> {this.props.content}
                        </a>
                    </li>
                )
            }
        });

        return NotificationItem;
    }
)