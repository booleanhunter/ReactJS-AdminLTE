define(
    [
        'react'
    ],
    function (React) {
        var SocialInfo = React.createClass({
            getDefaultProps: function() {
                return {
                    info: '',
                    position: 'pull-right'
                }
            },
            render: function() {
                var position = '';
                switch(this.props.position){
                    case 'left':
                        position = 'pull-left';
                        break;
                    case 'right':
                        position = 'pull-right';
                        break;
                    default:
                        position = 'pull-right';
                }

                return (
                    <span className={"text-muted "+position}>
                        {this.props.info}
                    </span>
                )
            }
        });

        return SocialInfo;
    }
)