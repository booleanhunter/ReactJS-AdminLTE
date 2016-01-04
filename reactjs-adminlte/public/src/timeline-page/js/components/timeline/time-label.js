define (
	[
		'react'
	],
	function  (React) {
		var TimeLabel = React.createClass({
			getDefaultProps: function() {
			    return {
			        theme: 'bg-red',
			        content: 'Default content',
			    }
			},
			render: function(){
				return (
					<li className="time-label">
					    <span className={this.props.theme}>
					        {this.props.content}
					    </span>
					</li>
				)
			}
		});

		return TimeLabel
	}
)