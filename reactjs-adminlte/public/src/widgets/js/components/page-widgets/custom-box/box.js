define(
    [
        'react',
        'reactDom',
        './box-tool',
        './box-functions'
    ],
    function (React, ReactDOM, BoxTool, boxFunctions) {
        var Box = React.createClass({
            // getDefaultProps: function() {
            //     return {
            //         type: 'expandable',
            //         theme: 'box-default',
            //         loading: false,
            //         border: true,
            //         title: 'Default title',
            //         content: 'Default content',
            //     }
            // },
            render: function() {
                var that = this;
                var borderClass = "", boxToolsContainer, boxTools = []
                if(this.props.border === true){
                    borderClass = 'box-solid';
                }
                if(this.props.boxTools !== null){
                    that.props.boxTools.map(function(tool, index){
                        boxTools.push(<BoxTool key={index} toolType={tool} />)
                    });

                    boxToolsContainer = <div className="box-tools pull-right">{boxTools}</div>
                }

                return (
                    <div className={"col-md-"+this.props.width+" col-sm-6 col-xs-12"}>
                        <div className={"box "+this.props.theme+" "+borderClass+ " color-palette-box"}>
                            <div className="box-header with-border">
                                <h3 className="box-title">{this.props.headerMarkup} {this.props.title}</h3>
                                {boxToolsContainer}
                            </div>
                            <div className="box-body">
                                {this.props.content}
                                {this.props.children}
                            </div>

                            <div className="box-footer">
                                {this.props.footer}
                            </div>
                            {/* /.box-body */}
                        </div>
                    </div>
                )
            }

        });

        return Box;
    }
)