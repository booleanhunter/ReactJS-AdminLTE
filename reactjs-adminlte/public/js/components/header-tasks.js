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
    			return (
                    <ul className="dropdown-menu">
                        <li className="header">You have 9 tasks</li>
                        <li>
                            {/* inner menu: contains the actual data */}
                            <div className="slimScrollDiv">
                                <ul className="menu">
                                    <li>
                                        {/* Task item */}
                                        <a href="#">
                                            <h3>
                            Design some buttons
                            <small className="pull-right">20%</small>
                          </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-aqua">
                                                    <span className="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
                                    <li>
                                        {/* Task item */}
                                        <a href="#">
                                            <h3>
                            Create a nice theme
                            <small className="pull-right">40%</small>
                          </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-green">
                                                    <span className="sr-only">40% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
                                    <li>
                                        {/* Task item */}
                                        <a href="#">
                                            <h3>
                            Some task I need to do
                            <small className="pull-right">60%</small>
                          </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-red">
                                                    <span className="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
                                    <li>
                                        {/* Task item */}
                                        <a href="#">
                                            <h3>
                            Make beautiful transitions
                            <small className="pull-right">80%</small>
                          </h3>
                                            <div className="progress xs">
                                                <div className="progress-bar progress-bar-yellow">
                                                    <span className="sr-only">80% Complete</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* end task item */}
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