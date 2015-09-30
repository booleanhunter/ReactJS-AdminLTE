define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
    	var ContainerFour = React.createClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '250px',
                    width: 'auto',
                    overflow: 'hidden'
                };
                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
    				<div className="box box-info">
                        <div className="box-header ui-sortable-handle">
                            <i className="fa fa-envelope"></i>
                            <h3 className="box-title">Quick Email</h3>
                            <div className="pull-right box-tools">
                                <button className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove">
                                    <i className="fa fa-times"></i>
                                </button>
                            </div>
                        </div>

                        <div className="box-body" >
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerFour;
    }   
)     