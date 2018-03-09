define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var Alert = createReactClass({
        	render: function(){
        		return (
        			<div className={"alert "+this.props.theme+" alert-dismissible"}>
        			    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
        			    <h4>
        			    	<i className={"icon fa "+this.props.icon}></i> 
        			    	{this.props.title}
        			    </h4>
        			    {this.props.content}
        			    {this.props.children}
        			</div>
        		)
        	}
        });

        return Alert;
    }
)