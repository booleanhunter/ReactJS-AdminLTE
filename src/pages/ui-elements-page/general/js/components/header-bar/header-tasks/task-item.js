define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var TaskItem = createReactClass({

            render: function(){
                var stylePercentage = {
                    width: this.props.percentage + '%'
                };
                return (
                    <li>
                        <a href="#">
                            <h3>
                                {this.props.content}
                                <small className="pull-right">{this.props.percentage+'%'}</small>
                            </h3>
                            <div className="progress xs">
                                <div className={"progress-bar "+ this.props.theme} style={stylePercentage}>
                                    <span className="sr-only">{this.props.percentage + '% Complete'} </span>
                                </div>
                            </div>
                        </a>
                    </li>
                )
                
            }
        });

        return TaskItem;
    }
)