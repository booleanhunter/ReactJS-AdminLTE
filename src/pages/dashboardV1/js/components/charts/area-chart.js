define(
    [
        'react',
        'create-react-class',
        'jquery',
        'raphael',
        'morris'
    ],
    function (React, createReactClass, $, Raphael, Morris){
    	var AreaChart = createReactClass({
            getDefaultProps: function() {
                return {
                    id: 'area-chart-1',
                    data: [
                        {y: '2011 Q1', item1: 2666, item2: 2666},
                        {y: '2011 Q2', item1: 2778, item2: 2294}
                    ],
                    xkey: 'y',
                    ykeys: ['item1', 'item2'],
                    labels: ['Item 1', 'Item 2'],
                    lineColors: ['#a0d0e0', '#3c8dbc']
                }
            },
            componentDidMount: function(){
                var area = new Morris.Area({
                    element: this.props.id,
                    resize: true,
                    data: this.props.data,
                    xkey: this.props.xkey,
                    ykeys: this.props.ykeys,
                    labels: this.props.labels,
                    lineColors: this.props.lineColors,
                    hideHover: 'auto'
                });
            },
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
                    <div className="chart tab-pane" id={this.props.id} style={style}>
                        {this.props.children}
                    </div>
    			)
    		}
    	})

    	return AreaChart;
    }   
)     