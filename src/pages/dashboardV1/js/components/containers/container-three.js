define(
    [
        'react',
        'create-react-class',
        'jquery',
    ],
    function (React, createReactClass,$){
    	var ContainerThree = createReactClass({
    		render: function(){
                var style = {
                    position: 'relative',
                    height: '250px',
                    width: 'auto',
                    overflow: 'hidden'
                };
                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
    				<div className="box box-primary">
                        <div className="box-header ui-sortable-handle">
                            <i className="ion ion-clipboard"></i>
                            <h3 className="box-title">To Do List</h3>
                            <div className="box-tools pull-right">
                                <ul className="pagination pagination-sm inline">
                                    <li><a href="#">«</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">»</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="box-body" >
                            <ul className="todo-list ui-sortable">
                            </ul>
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerThree;
    }   
)     