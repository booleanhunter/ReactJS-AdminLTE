define(
    [
        'react',
        'create-react-class',
        'jquery',
    ],
    function (React, createReactClass,$){
    	var ContainerSeven = createReactClass({
    		render: function(){
                var style = {
                    height: '250px'
                };
                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
    				<div className="box box-solid bg-green-gradient">
                        <div className="box-header ui-sortable-handle">
                            <i className="fa fa-calendar"></i>
                            <h3 className="box-title">Calendar</h3>
                            <div className="pull-right box-tools">
                                <div className="btn-group">
                                    <button className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bars"></i></button>
                                    <ul className="dropdown-menu pull-right" role="menu">
                                        <li><a href="#">Add new event</a></li>
                                        <li><a href="#">Clear events</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">View calendar</a></li>
                                    </ul>
                                </div>
                                <button className="btn btn-success btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                                <button className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                            </div>
                        </div>   

                        <div className="box-footer text-black">
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerSeven;
    }   
)     