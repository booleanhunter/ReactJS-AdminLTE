define(
    [
        'react'
    ],
    function (React) {
        var ProgressBar = React.createClass({
            getDefaultProps: function() {
                return {
                    percent: 50,
                    description: 'Default progress 50%',
                    color: 'white'
                }
            },
            render: function() {
                var that = this;

                var style = {
                    width: this.props.percent + '%',
                    backgroundColor: this.props.color
                };

                return (
                    <div>
                        <div className="progress">
                            <div className="progress-bar" style={style}></div>
                        </div>
                        <span className="progress-description">
                            {this.props.description}
                        </span>
                    </div>
                )
            }
        });

        return ProgressBar;
    }
)