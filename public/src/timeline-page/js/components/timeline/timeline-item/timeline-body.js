define (
	[
		'react'
	],
	function  (React) {
		var TimelineBody = React.createClass({
			getDefaultProps: function() {
			    return {
			        content: 'Sample content',   
			    }
			},
			render: function(){
				return (
			        <div className="timeline-body">
			            {this.props.content}
			            {this.props.children}
			        </div>
				)
			}
		});

		return TimelineBody
	}
)