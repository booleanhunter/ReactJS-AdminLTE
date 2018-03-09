define (
	[
		'react',
		'create-react-class',
	],
	function (React, createReactClass) {
		var TimelineFooter = createReactClass({
			render: function(){
				return (
			        <div className="timeline-footer">
			            {this.props.content}
			            {this.props.children}
			        </div>
				)
			}
		});

		return TimelineFooter
	}
)