define(
    [
        'react',
        'react-dom',
        './box-functions'
    ],
    function (React, ReactDOM, boxFunctions) {
    	var BoxTool = React.createClass({
            toggleCollapse: function(event){
                var box = boxFunctions.findClosestElement(event.currentTarget, this.props.containerClass),
                    boxBody = box.children[1],
                    icon = event.currentTarget.children[0];

                boxFunctions.toggleBoxCollapse(box, boxBody, icon);
            },
            removeBox: function(event){
                var box = boxFunctions.findClosestElement(event.currentTarget, this.props.containerClass);
                boxFunctions.removeBox(box);
            },
            edit: function(){
                this.props.callback();
            },
    		render: function() {
    			var button = '', that = this;

    			switch(this.props.toolType){
                    case 'expand':
                        return (
                            <button className="btn btn-box-tool" data-widget="expand" onClick={that.toggleCollapse}><i className="fa fa-plus"></i></button>
                        )
    				case 'collapse':
    					return (
    						<button className="btn btn-box-tool" data-widget="collapse" onClick={that.toggleCollapse}><i className="fa fa-minus"></i></button>
	    				)
	    			
	    			case 'remove':
	    				return (
	    					<button className="btn btn-box-tool" data-widget="remove" onClick={that.removeBox}><i className="fa fa-times"></i></button>
	    				)
    			}
    		}
    	});

    	return BoxTool;
    }
)