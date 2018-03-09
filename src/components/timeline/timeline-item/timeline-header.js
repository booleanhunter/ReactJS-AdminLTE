define (
	[
		'react',
		'create-react-class',
	],
	function (React, createReactClass) {
		var TimelineHeader = createReactClass({
			render: function(){
				return (
			        <h3 className="timeline-header">
			        	<a href={this.props.url} target="_blank">{this.props.title}</a> 
			        	{this.props.content}
			        	{this.props.children}
			        </h3>
				)
			}
		});

		return TimelineHeader
	}
)