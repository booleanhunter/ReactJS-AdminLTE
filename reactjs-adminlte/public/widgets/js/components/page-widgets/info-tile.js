define(
    [
        'react'
    ],
    function (React) {
        var InfoTile = React.createClass({
            getDefaultProps: function() {
                return {
                    options: {
                        color: 'bg-red',
                        icon: 'fa-star-o',
                        subject: 'Default Subject',
                        stats: '0',
                        content: ''
                    }
                }
            },
            render: function() {
                var that = this,
                    options = this.props.options;

                return (
                    <div className = "col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className={"info-box-icon " + options.theme}>
                                <i className={"fa "+options.icon}></i>
                            </span>

                            <div className="info-box-content">
                                <span className="info-box-text">{options.subject}</span>
                                <span className="info-box-number">{options.stats}</span>
                            </div>
                            
                            {options.content}
                        </div>
                    </div>
                )
            }
        });

        return InfoTile;
    }
)