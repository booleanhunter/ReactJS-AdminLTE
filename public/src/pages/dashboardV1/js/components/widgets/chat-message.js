define (
	[
		'react',
		'jquery'
	],

	function(React, $){
		var ChatMessage = React.createClass({
			render: function(){
				var style2 = {
				    overflow: "hidden", 
				    width: "auto",
				    height: "250px"
				} ;

				var attachment = "";

				if(this.props.attachment){
					attachment = <div className="attachment">
					            <h4>{this.props.attachment.groupName}</h4>

					            <p className="filename">
					                {this.props.attachment.fileName}
					            </p>

					            <div className="pull-right">
					                <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
					            </div>
					        </div>
				}
				
				return (
				    <div className="item">
				        <img src={this.props.displayPicture} alt="user image" className="online" />

				        <p className="message">
				            <a href="#" className="name">
				                <small className="text-muted pull-right">
				                	<i className="fa fa-clock-o"></i> 
				                	{this.props.time}
				                </small> 
				                {this.props.displayName}
				            </a>
				            {this.props.content}
				        </p>
				        {attachment}
				    </div>
				)
			}
		});

		return ChatMessage;
	}
)