define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var SocialButton = createReactClass({
            getDefaultProps: function() {
                return {
                    position: '',
                    type: 'like',
                    theme: 'btn-default'
                }
            },
            render: function() {
                var position;
                switch(this.props.position){
                    case 'left':
                        position = 'pull-left';
                        break;
                    case 'right':
                        position = 'pull-right';
                        break;
                    default:
                        position = ''
                }

                if(this.props.type === 'like'){
                    return (
                        <button className={"btn btn-xs "+position+" "+this.props.theme}>
                            <i className="fa fa-thumbs-o-up"></i>
                            Like
                        </button>
                        
                    )
                }else if(this.props.type === 'share'){
                    return (
                        <button className={"btn btn-xs "+position+" "+this.props.theme}>
                            <i className="fa fa-share"></i>
                            Share
                        </button>
                    )
                }
                
            }
        });

        return SocialButton;
    }
)