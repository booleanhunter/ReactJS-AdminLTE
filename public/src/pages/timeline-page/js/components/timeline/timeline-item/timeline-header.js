define (
	[
		'react'
	],
	function  (React) {
		var TimelineHeader = React.createClass({
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