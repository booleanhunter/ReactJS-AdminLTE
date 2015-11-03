define(
    [
        'react',
        'reactDom',
        '../../common-functions'
    ],
    function (React, ReactDOM, commonFunctions) {
        var SmallWindow = React.createClass({
            toggleCollapse: function(event) {
                var box = ReactDOM.findDOMNode(this).children[0],
                    boxBody = ReactDOM.findDOMNode(this).children[0].children[1],
                    icon = event.currentTarget.children[0];

                commonFunctions.toggleBoxCollapse(box, boxBody, icon);
            },
            render: function() {
                var that = this,
                    options = this.props.options,
                    boxClassname, button;

                switch(options.type){
                    case 'expandable': 
                        boxClassname = "collapsed-box";
                        button = 
                            <button className="btn btn-box-tool" dataWidget="collapse" onClick={that.toggleCollapse}>
                                <i className="fa fa-plus"></i>
                            </button>;
                        break;

                    case 'collapsable':
                        boxClassname = '';
                        button = 
                            <button className="btn btn-box-tool" dataWidget="collapse" onClick={that.toggleCollapse}>
                                <i className="fa fa-minus"></i>
                            </button>;
                        break;  
                }

                return(
                    <div className = "col-md-3">
                        <div className={"box box-default "+boxClassname}>
                            <div className="box-header with-border">
                                <h3 className="box-title">{options.title}</h3>
                                <div className="box-tools pull-right">
                                    {button}
                                </div>
                                {/* /.box-tools */}
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">
                                {options.content}
                            </div>
                            {/* /.box-body */}
                        </div>
                    </div>
                )
            }
        })

        return SmallWindow;
    }
)