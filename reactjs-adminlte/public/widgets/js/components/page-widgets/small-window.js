define(
    [
        'react',
        'reactDom'
    ],
    function (React, ReactDOM) {
        var SmallWindow = React.createClass({
            toggleCollapse: function (event){
                if(ReactDOM.findDOMNode(this).className.indexOf('collapsed-box') !== -1){
                    ReactDOM.findDOMNode(this).className = ReactDOM.findDOMNode(this).className.replace(/ collapsed-box/g,'');
                }else{
                    ReactDOM.findDOMNode(this).className += ' collapsed-box';
                }
            },
            render: function () {
                var that = this,
                    options = this.props.options;

                return (
                    <div className="box box-default collapsed-box">
                        <div className="box-header with-border">
                            <h3 className="box-title">{options.title}</h3>
                            <div className="box-tools pull-right">
                                <button className="btn btn-box-tool" data-widget="collapse" onClick={that.toggleCollapse}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            {/* /.box-tools */}
                        </div>
                        {/* /.box-header */}
                        <div className="box-body">
                            {options.content}
                        </div>
                        {/* /.box-body */}
                    </div>
                )
            }
        })

        return SmallWindow;
    }
)