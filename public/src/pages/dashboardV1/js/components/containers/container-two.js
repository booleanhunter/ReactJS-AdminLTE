define(
    [
        'react',
        '../widgets/conversations',
        'jquery',
        'slimscroll'
        
    ],
    function(React,Conversations,$){
    	var ContainerTwo = React.createClass({
            componentDidMount: function(){
                $("#chat-box").slimScroll();
            },
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '250px',
                    width: 'auto',
                    overflow: 'hidden'
                };

                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
    				<div className="box box-success">
                        <div className="box-header ui-sortable-handle">
                            <i className="fa fa-comments-o"></i>
                            <h3 className="box-title">Chat</h3>
                            <div className="box-tools pull-right" data-toggle="tooltip" title="" data-original-title="Status">
                                <div className="btn-group" data-toggle="btn-toggle">
                                    <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green"></i></button>
                                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="slimScrollDiv" style={style}>
                            <div className="box-body chat" id="chat-box" >
                                <Conversations />
                            </div>
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerTwo;
    }   
)     