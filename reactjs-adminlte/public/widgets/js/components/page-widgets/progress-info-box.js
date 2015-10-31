define(
    [
        'react'
    ],
    function (React) {
        var ProgressInfoBox = React.createClass({
            render: function () {
                var that = this,
                    options = this.props.options;

                var style = {
                    width: options.progress.percent + '%',
                    backgroundColor: options.progress.color
                };

                return (
                    <div className={"info-box "+options.color}>
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
                )
            }
        })

        return ProgressInfoBox;
    }
)