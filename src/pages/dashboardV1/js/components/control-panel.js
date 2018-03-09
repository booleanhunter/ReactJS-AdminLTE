define(
    [
        'react',
        'create-react-class',
        'jquery',
    ],
    function (React, createReactClass,$){
    	var ControlPanel = createReactClass({
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