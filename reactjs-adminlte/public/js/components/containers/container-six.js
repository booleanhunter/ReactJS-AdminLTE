define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var ContainerSix = React.createClass({
    		render: function(){
                var style = {
                    height: '250px'
                };
                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
    				<div className="box box-solid bg-teal-gradient">
                        <div className="box-header ui-sortable-handle">
                            <i className="fa fa-th"></i>
                            <h3 className="box-title">Sales Graph</h3>
                            <div className="box-tools pull-right">
                                <button className="btn bg-teal btn-sm" data-widget="collapse">
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className="btn bg-teal btn-sm" data-widget="remove">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                        </div>

                        <div className="box-body">
                            <div className="chart" id="line-chart" style={style}>
                            </div>
                        </div>

                        <div className="box-footer no-border">
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerSix;
    }   
)     