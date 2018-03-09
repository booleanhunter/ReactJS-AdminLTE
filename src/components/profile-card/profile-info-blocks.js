define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var ProfileInfoBlocks = createReactClass({
            render: function() {
                var descriptionBlocks = this.props.list.map(function(info, iterator){
                    return (
                        <div className="col-sm-4 border-right" key={iterator}>
                            <div className="description-block">
                                <h5 className="description-header">{info.stats}</h5>
                                <span className="description-text">{info.description}</span>
                            </div>
                            {/* /.description-block */}
                        </div>
                    )
                });

                return (
                    <div className="row">
                        {descriptionBlocks}
                    </div>
                )   
            }
        });

        return ProfileInfoBlocks;
    }
)