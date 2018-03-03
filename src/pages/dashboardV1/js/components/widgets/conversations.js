define (
	[
		'react',
		'create-react-class',
		'jquery',
		'./chat-message'
	],

	function (React, createReactClass, $, ChatMessage){
		var Conversations = createReactClass({
			getInitialState: function(){
				return {
					messages: []
				}
			},
			componentDidMount: function(){
				var messages = [
					{
						displayPicture: "dist/img/user4-128x128.jpg",
						time: "2:15",
						content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market",
						attachment: {
							groupName: "Attachments",
							fileName: "Theme-thumbnail-image.jpg"
						}
					},
					{
						displayPicture: "dist/img/user3-128x128.jpg",
						time: "5:15",
						content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market"
						
					},
					{
						displayPicture: "dist/img/user2-160x160.jpg",
						time: "5:30",
						content: "I would like to meet you to discuss the latest news about the arrival of the new theme. They say it is going to be one the best themes on the market"
						
					}
				];

				this.setState({
					messages: messages
				});
			},
			render: function(){
				var style2 = {
				    overflow: "hidden", 
				    width: "auto",
				    height: "250px"
				} ;

				var chatMessages = this.state.messages.map(function(message, iterator){
					return (
						<ChatMessage
							key= {iterator}
							displayPicture={message.displayPicture}
							time = {message.time}
							content = {message.content}
							attachment = {message.attachment} />
					)

				})

				return (
					<div className="box-body chat" id="chat-box" style={style2}>
						{chatMessages}
					</div>
				)
			}
		});

		return Conversations;
	}
)