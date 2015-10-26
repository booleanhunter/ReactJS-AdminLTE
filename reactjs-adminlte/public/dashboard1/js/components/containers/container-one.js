define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var ContainerOne = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
    				<div className="nav-tabs-custom">
                        {/* Tabs within a box */}
                        <ul className="nav nav-tabs pull-right ui-sortable-handle">
                            <li className=""><a href="#revenue-chart" data-toggle="tab" aria-expanded="false">Area</a></li>
                            <li className="active"><a href="#sales-chart" data-toggle="tab" aria-expanded="true">Donut</a></li>
                            <li className="pull-left header"><i className="fa fa-inbox"></i> Sales</li>
                        </ul>
                        <div className="tab-content no-padding">
                            {/* Morris chart - Sales */}
                            <div className="chart tab-pane" id="revenue-chart" style={style}></div>
                            <div className="chart tab-pane active" id="sales-chart" style={style}></div>
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerOne;
    }   
)     