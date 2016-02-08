define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu',
        './page-ui-elements/custom-box/box'
    ],
    function (React, $, HeaderBar, NavigationMenu, Box) {
        var UIElements = React.createClass({
            getInitialState: function() {
                return {
                    infoTileOptions: [],
                }
            },
            componentDidMount: function() {
                
            },
            render: function() {

                return (
                    <div className="wrapper">
                        <HeaderBar />
                        
                        <NavigationMenu />
                        
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    General UI
                                    <small>Preview of UI elements</small>
                                </h1>
                                <ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li><a href="#">UI</a></li>
                                    <li className="active">General</li>
                                </ol>
                            </section>

                            <section className="content">
                                <Box 
                                    title = "Color Palette"
                                    headerMarkup={<i className="fa fa-tag"></i>} />
                            </section>

                        </div>

                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Version</b> 1.0.0
                            </div>
                            <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                        </footer>

                        {/*<ControlsMenu />*/}
                    </div>
                )
            }
        });

        return UIElements;
    }
)