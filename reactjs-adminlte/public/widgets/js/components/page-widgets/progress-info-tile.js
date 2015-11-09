define(
    [
        'react'
    ],
    function (React) {
        var ProgressInfoTile = React.createClass({
            getDefaultProps: function() {
                return {
                    options: {
                        color: 'bg-aqua',
                        icon: 'fa-star-o',
                        subject: 'Default Subject',
                        stats: '0',
                        content: '',
                        progress: {
                            percent: 50,
                            description: 'Default progress 50%',
                            color: 'white'
                        }
                    }
                }
            },
            render: function() {
                var that = this,
                    options = this.props.options;

                var style = {
                    width: options.progress.percent + '%',
                    backgroundColor: options.progress.color
                };

                return (
                    <div className = "col-md-3 col-sm-6 col-xs-12">
                        <div className={"info-box "+options.theme}>
                            <span className="info-box-icon">
                                <i className={"fa "+options.icon}></i>
                            </span>

                            <div className="info-box-content">
                                <span className="info-box-text">{options.subject}</span>
                                <span className="info-box-number">{options.stats}</span>
                                <div className="progress">
                                    <div className="progress-bar" style={style}></div>
                                </div>
                                <span className="progress-description">
                                    {options.progress.description}
                                </span>
                            </div>
                            
                            {options.content}
                        </div>
                    </div>
                )
            }
        });

        return ProgressInfoTile;
    }
)