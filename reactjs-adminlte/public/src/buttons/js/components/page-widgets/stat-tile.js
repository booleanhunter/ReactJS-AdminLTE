define(
    [
        'react'
    ],
    function (React) {
        var StatTile = React.createClass({
            getDefaultProps: function() {
                return {
                    color: 'bg-yellow',
                    icon: 'ion-person-add',
                    subject: 'Default Subject',
                    stats: '0',
                    link: '/default/link'
                }
            },
            render: function() {
                var link = '',
                    stats = <h3> {this.props.stats} </h3>;

                if(this.props.link) {
                    link =
                        <a href={this.props.link} className="small-box-footer">
                            More info <i className="fa fa-arrow-circle-right"></i>
                        </a>;
                }

                if(this.props.stats.indexOf('%') !== -1) {
                    var style = {
                        fontSize: '20px'
                    };

                    stats =
                        <h3>
                            {this.props.stats.replace(/%/g, '')}
                            <sup style={style}>%</sup>
                        </h3>
                }

                return(
                    <div className = "col-lg-3 col-xs-6">
                        <div className={"small-box "+this.props.theme}>
                            <div className="inner">
                                {stats}
                                <p>{this.props.subject}</p>
                            </div>
                            <div className="icon">
                                <i className={"fa "+this.props.icon}></i>
                            </div>
                            {link}
                        </div>
                    </div>
                )
            }
        });

        return StatTile;
    }
)