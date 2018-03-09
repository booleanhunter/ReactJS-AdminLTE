define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var Callout = createReactClass({
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