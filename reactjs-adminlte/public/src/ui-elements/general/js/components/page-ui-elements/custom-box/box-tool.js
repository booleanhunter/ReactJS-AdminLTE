define(
    [
        'react',
        'reactDom',
    ],
    function (React, ReactDOM) {
    	var BoxTool = React.createClass({
    		render: function() {
    			var button = '', that = this;

    			switch(this.props.toolType){
    				case 'minimize':
    					return (
    						<button className="btn btn-box-tool" data-widget="collapse" onClick={that.props.callback}><i className="fa fa-minus"></i></button>
	    				)
	    			case 'maximize':
	    				return (
	    					<button className="btn btn-box-tool" data-widget="expand" onClick={that.props.callback}><i className="fa fa-plus"></i></button>
	    				)
	    			case 'close':
	    				return (
	    					<button className="btn btn-box-tool" data-widget="remove" onClick={that.props.callback}><i className="fa fa-times"></i></button>
	    				)
    			}
    		}
    	});

    	return BoxTool;
    }
)