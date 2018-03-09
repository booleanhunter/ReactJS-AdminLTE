define (
	[
		'react',
		'create-react-class',
		'./timeline-header',
		'./timeline-body',
		'./timeline-footer'
	],
	function (React, createReactClass, TimelineHeader, TimelineBody, TimelineFooter) {
		var TimelineItem = createReactClass({
			getDefaultProps: function() {
			    return {
			        icon: 'fa fa-coffee',
			        iconTheme: 'bg-blue',
			        time: '',   
			    }
			},
			render: function(){
				var body = '', footer = '';
				if(this.props.body){
					body = <TimelineBody content={this.props.body.content} >
					        	{this.props.body.markup}
					        </TimelineBody>
				}

				if(this.props.footer){
					footer = <TimelineFooter content={this.props.footer.content} >
					        	{this.props.footer.markup}
					        </TimelineFooter>

				}

				return (
					<li>
					    <i className={this.props.icon+" "+ this.props.iconTheme}></i>

					    <div className="timeline-item">
					        <span className="time">
					        	<i className="fa fa-clock-o"></i> 
					        	{this.props.time}
					        </span>

					        <TimelineHeader url={this.props.header.url} title={this.props.header.title} content={this.props.header.content} />

					        {body}

					        {footer}
					    </div>
					</li>
				)
			}
		});

		return TimelineItem
	}
)