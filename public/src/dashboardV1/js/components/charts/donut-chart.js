define(
    [
        'react',
        'jquery',
        'raphael',
        'morris'
    ],
    function(React, $, Raphael, Morris){
    	var DonutChart = React.createClass({
            getDefaultProps: function() {
                return {
                    id: 'donut-chart-1',
                    colors: ['#3c8dbc'],
                    data: [
                        {
                            label: "Donut piece", value: 40
                        }
                    ]
                }
            },
            componentDidMount: function(){
                var donut = new Morris.Donut({
                    element: this.props.id,
                    resize: true,
                    colors: this.props.colors,
                    data: this.props.data,
                    hideHover: 'auto'
                });
            },
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
                    <div className="chart tab-pane active" id={this.props.id} style={style}>
                        {this.props.children}
                    </div>
    			)
    		}
    	})

    	return DonutChart;
    }   
)     