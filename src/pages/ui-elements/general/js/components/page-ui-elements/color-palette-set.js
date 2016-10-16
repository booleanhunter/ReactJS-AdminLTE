define(
    [
        'react'
    ],
    function (React) {
        var ColorPaletteSet = React.createClass({
        	render: function(){
        		return (
	        		<div className={"col-sm-4 col-md-"+this.props.width}>
	        		    <h4 className="text-center">{this.props.title}</h4>

	        		    <div className="color-palette-set">
	        		        <div className={this.props.theme+" disabled color-palette"}><span>Disabled</span></div>
	        		        <div className={this.props.theme+" color-palette"}><span>#3c8dbc</span></div>
	        		        <div className={this.props.theme+"-active color-palette"}><span>Active</span></div>
	        		    </div>
	        		</div>
        		)
        	}
        });

        return ColorPaletteSet;
    }
)