define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass) {
        var ProfileCard = createReactClass({
            getDefaultProps: function() {
                return {
                    pictureAlignment: 'center',
                    theme: 'bg-yellow',
                    displayName: 'John Doe',
                    description: 'My profile description',
                    displayPicture: '../dist/img/user7-128x128.jpg'   
                }
            },
            render: function() {
                var coverPicture = {}, alignmentType = 'widget-user', footerPadding = '';
                
                if(this.props.pictureAlignment === 'left'){
                    alignmentType = 'widget-user-2';
                    footerPadding = 'no-padding';
                }

                if(this.props.coverPicture){
                    coverPicture = {
                        background: 'url('+this.props.coverPicture+') center'
                    };
                }

                return (
                    <div className={"col-md-"+this.props.width}>
                        {/* Widget: user widget style 1 */}
                        <div className={"box box-widget "+alignmentType}>
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div className={"widget-user-header "+this.props.theme} style={coverPicture}>
                                <div className="widget-user-image">
                                    <img className="img-circle" src={this.props.displayPicture} alt="User Avatar" />
                                </div>
                                {/* /.widget-user-image */}
                                <h3 className="widget-user-username">{this.props.displayName}</h3>
                                <h5 className="widget-user-desc">{this.props.description}</h5>
                            </div>
                            <div className={"box-footer "+footerPadding}>
                                {this.props.children}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>
                )
                
            }
        });

        return ProfileCard;
    }
)