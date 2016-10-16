define (
	[
		'react'
	],
	function  (React) {
		var TimelineFooter = React.createClass({
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