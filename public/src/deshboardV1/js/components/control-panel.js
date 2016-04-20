define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var ControlPanel = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '300px'
                };

    			return (
    				<div className="row" id="contains-custom-header">

                    </div>
    			)
    		}
    	})

    	return ControlPanel;
    }   
)     