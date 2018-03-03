define (
	[
		'react',
		'create-react-class',
	],
	function (React, createReactClass) {
		var TimelineBody = createReactClass({
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