define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var InfoBox = React.createClass({
            componentDidMount:function(){

            },
    		render: function(){
                var that = this,
                    options = this.props.options;

    			return (
                    <div className="info-box">
                        <span className={"info-box-icon " + options.color}>
                            <i className={"fa "+options.icon}></i>
                        </span>

                        <div className="info-box-content">
                            <span className="info-box-text">{options.subject}</span>
                            <span className="info-box-number">{options.stats}</span>
                        </div>

                        {options.content}
                    </div>
    			)
    		}
    	})

    	return InfoBox;
    }   
)     