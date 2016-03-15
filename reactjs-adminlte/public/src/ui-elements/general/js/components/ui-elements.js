define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu',
        './page-ui-elements/color-palette-set',
        './page-ui-elements/custom-box/box'
    ],
    function (React, $, HeaderBar, NavigationMenu, ColorPaletteSet, Box) {
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
                                    border = {false}
                                    width = "12"
                                    theme = "box-default"
                                    title = "Color Palette"
                                    headerMarkup={<i className="fa fa-tag"></i>} >
                                        <div className="row">
                                            <ColorPaletteSet width= "2" title="Primary" theme="bg-light-blue" />
                                            <ColorPaletteSet width= "2" title="Info" theme="bg-aqua" />
                                            <ColorPaletteSet width= "2" title="Success" theme="bg-green" />
                                            <ColorPaletteSet width= "2" title="Warning" theme="bg-yellow" />
                                            <ColorPaletteSet width= "2" title="Danger" theme="bg-red" />
                                            <ColorPaletteSet width= "2" title="Gray" theme="bg-gray" />
                                        </div>
                                        <div className="row">
                                            <ColorPaletteSet width= "2" title="Navy" theme="bg-navy" />
                                            <ColorPaletteSet width= "2" title="Teal" theme="bg-teal" />
                                            <ColorPaletteSet width= "2" title="Purple" theme="bg-purple" />
                                            <ColorPaletteSet width= "2" title="Orange" theme="bg-orange" />
                                            <ColorPaletteSet width= "2" title="Maroon" theme="bg-maroon" />
                                            <ColorPaletteSet width= "2" title="Black" theme="bg-black" />
                                        </div>
                                </Box>
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