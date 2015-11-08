define(
    [
        'react',
        'reactDom',
        '../../common-functions'
    ],
    function (React, ReactDOM, commonFunctions) {
        var SmallBox = React.createClass({
            getDefaultProps: function() {
                return {
                    options: {
                        type: 'expandable',
                        theme: 'box-default',
                        loading: false,
                        border: true,
                        title: 'Default title',
                        content: 'Default content',
                    }
                }
            },
            toggleCollapse: function(event) {
                var box = ReactDOM.findDOMNode(this).children[0],
                    boxBody = ReactDOM.findDOMNode(this).children[0].children[1],
                    icon = event.currentTarget.children[0];

                commonFunctions.toggleBoxCollapse(box, boxBody, icon);
            },
            removeBox: function(event){
                var box = ReactDOM.findDOMNode(this).children[0];
                commonFunctions.removeBox(box);
            },
            render: function() {
                var that = this,
                    options = this.props.options,
                    boxClassname, button, borderClass, loadingState;

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

                    case 'removable':
                        boxClassname = '';
                        button = 
                            <button className="btn btn-box-tool" dataWidget="remove" onClick={that.removeBox}>
                                <i className="fa fa-times"></i>
                            </button>;
                        break; 
                }

                if(options.loading === true){
                    loadingState = 
                        <div className="overlay">
                            <i className="fa fa-refresh fa-spin"></i>
                        </div>
                }

                if(options.border === true){
                    borderClass = 'box-solid';
                }

                return(
                    <div className = "col-md-3">
                        <div className={"box"+" " + options.theme+" " + boxClassname + " "+borderClass}>
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
                            {loadingState}
                        </div>
                    </div>
                )
            }
        })

        return SmallBox;
    }
)