define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var ContainerFive = React.createClass({
    		render: function(){
                var style = {
                    height: '250px'
                };
                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
    				<div className="box box-solid bg-light-blue-gradient">
                        <div className="box-header ui-sortable-handle">
                            <div className="pull-right box-tools">
                                <button className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                                    <i className="fa fa-calendar"></i>
                                </button>
                                <button className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>

                            <i className="fa fa-map-marker"></i>
                            <h3 className="box-title">
                                Visitors
                            </h3>
                        </div>

                        <div className="box-body" style={style}>
                        </div>

                        <div className="box-footer no-border">
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerFive;
    }   
)     