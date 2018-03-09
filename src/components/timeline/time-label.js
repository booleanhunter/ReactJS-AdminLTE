define (
	[
		'react',
		'create-react-class',
	],
	function (React, createReactClass) {
		var TimeLabel = createReactClass({
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