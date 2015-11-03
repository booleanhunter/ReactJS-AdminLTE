define(
    [
        'react'
    ],
    function (React) {
        var StatBox = React.createClass({
            getDefaultProps: function() {
                return {
                    options: {
                        color: 'bg-yellow',
                        icon: 'ion-person-add',
                        subject: 'Default Subject',
                        stats: '0',
                        link: '/default/link'
                    }
                }
            },
            render: function() {
                var that = this,
                    options = this.props.options;

                var link = '',
                    stats = <h3> {options.stats} </h3>;

                if(this.props.options.link) {
                    link =
                        <a href={options.link} className="small-box-footer">
                            More info <i className="fa fa-arrow-circle-right"></i>
                        </a>;
                }

                if(options.stats.indexOf('%') !== -1) {
                    var style = {
                        fontSize: '20px'
                    };

                    stats =
                        <h3>
                            {options.stats.replace(/%/g, '')}
                            <sup style={style}>%</sup>
                        </h3>
                }

                return(
                    <div className = "col-lg-3 col-xs-6">
                        <div className={"small-box "+options.color}>
                            <div className="inner">
                                {stats}
                                <p>{options.subject}</p>
                            </div>
                            <div className="icon">
                                <i className={"fa "+options.icon}></i>
                            </div>
                            {link}
                        </div>
                    </div>
                )
            }
        });

        return StatBox;
    }
)