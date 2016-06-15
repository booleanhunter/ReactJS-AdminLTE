define(
    [
        'react',
    ],
    function (React) {
        var Callout = React.createClass({
        	render: function(){
        		return (
                    <div className={"callout "+this.props.theme} >
                        <h4>{this.props.title}</h4>

                        {this.props.content}
                        {this.props.children}
                    </div>
        		)
        	}
        });

        return Callout;
    }
)