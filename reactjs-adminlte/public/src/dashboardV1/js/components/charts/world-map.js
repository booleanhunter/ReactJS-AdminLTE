define(
    [
        'react',
        'jquery',
        'jvectormap',
        'jvectormapWorld'
    ],
    function(React,$){
    	var WorldMap = React.createClass({
            getDefaultProps: function() {
                return {
                    id: 'world-map-1',
                }
            },
            componentDidMount: function(){
                console.log(this.props.info["US"])
                var visitorsData = this.props.info;
                $('#'+this.props.id).vectorMap({
                    map: 'world_mill_en',
                    backgroundColor: "transparent",
                    regionStyle: {
                        initial: {
                            fill: '#e4e4e4',
                            "fill-opacity": 1,
                            stroke: 'none',
                            "stroke-width": 0,
                            "stroke-opacity": 1
                        }
                    },
                    series: {
                        regions: [{
                            values: visitorsData,
                            scale: ["#92c1dc", "#ebf4f9"],
                            normalizeFunction: 'polynomial'
                        }]
                    },
                    onRegionLabelShow: function(e, el, code) {
                        if(typeof visitorsData[code] != "undefined")
                            el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
                    }
                });
            },
    		render: function(){
                var style = {
                    height: '250px'
                };
                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
                    <div id={this.props.id} style={style}>
                    </div>
    			)
    		}
    	})

    	return WorldMap;
    }   
)     