define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var HeaderTasks = React.createClass({
            componentDidMount:function(){

            },
    		render: function(){
                var that = this;
                var stylePercentage, progressBarColor;

                var taskList = this.props.tasks.map(function(taskDetails, iterator){
                    stylePercentage = {
                        width: taskDetails.percentage+'%'
                    };

                    if(taskDetails.percentage < 21){
                        progressBarColor = 'progress-bar-red'
                    }else if(taskDetails.percentage >20 && taskDetails.percentage < 41){
                        progressBarColor = 'progress-bar-yellow'
                    }else if(taskDetails.percentage >40 && taskDetails.percentage < 61){
                        progressBarColor = 'progress-bar-green'
                    }else if(taskDetails.percentage > 60){
                        progressBarColor = 'progress-bar-aqua';
                    }

                    return (
                        <li key={"header-task-item"+iterator}>
                            <a href="#">
                                <h3>
                                    {taskDetails.subject}
                                    <small className="pull-right">{taskDetails.percentage+'%'}</small>
                                </h3>
                                <div className="progress xs">
                                    <div className={"progress-bar "+ progressBarColor} style={stylePercentage}>
                                        <span className="sr-only">{taskDetails.percentage + '% Complete'} </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                });
    			return (
                    <ul className="dropdown-menu">
                        <li className="header">You have {this.props.tasks.length} tasks</li>
                        <li>
                            {/* inner menu: contains the actual data */}
                            <div className="slimScrollDiv">

                                <ul className="menu">
                                    {taskList}
                                </ul>

                                <div className="slimScrollBar"></div>
                                <div className="slimScrollRail"></div>
                            </div>
                        </li>
                        <li className="footer">
                            <a href="#">View all tasks</a>
                        </li>
                    </ul>
    			)
    		}
    	})

    	return HeaderTasks;
    }   
)     