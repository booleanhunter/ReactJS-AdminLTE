define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var NotificationItem = createReactClass({

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