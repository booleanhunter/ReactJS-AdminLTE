/**
 * @Author Ashwin Hariharan
 * @Details A basic info-box for displaying info. this component takes an options object, from props.
 
 The options object needs 5 values, out of which 1 is optional.
 {
    color: 'bg-aqua' / 'bg-green' / 'bg-yellow' //To apply background color to the icon,
    icon: 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0' //Any font-awesome icon
    subject:  'Can be a string or a number',
    stats: 'Can be a string or a number',
    content: 'Can be a string or a number' //this is optional
 }

 */

define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var InfoBox = React.createClass({
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