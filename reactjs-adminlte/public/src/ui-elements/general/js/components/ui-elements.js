define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu',
        './page-ui-elements/color-palette-set',
        './page-ui-elements/custom-box/box',
        './page-ui-elements/alert',
        './page-ui-elements/callout'
    ],
    function (React, $, HeaderBar, NavigationMenu, ColorPaletteSet, Box, Alert, Callout) {
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
                                    customClass = "color-palette-box"
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

                                <h2 className="page-header">Alerts and Callouts</h2>

                                <div className="row">
                                    <Box
                                        border = {false}
                                        width = "6"
                                        theme = "box-default"
                                        title = "Alerts"
                                        headerMarkup={<i className="fa fa-warning"></i>} >
                                        <Alert 
                                            title="Alert!" 
                                            theme="alert-danger" 
                                            icon="fa-ban"
                                            content="Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, 
                                            like these sweet mornings of spring which I enjoy with my whole heart." />
                                        <Alert 
                                            title="Alert!" 
                                            theme="alert-info" 
                                            icon="fa-info"
                                            content="Info alert preview. This alert is dismissable."/>
                                        <Alert 
                                            title="Alert!" 
                                            theme="alert-warning" 
                                            icon="fa-warning"
                                            content="Warning alert preview. This alert is dismissable." />
                                        <Alert 
                                            title="Alert!" 
                                            theme="alert-success" 
                                            icon="fa-check"
                                            content="Success alert preview. This alert is dismissable." />
                                        
                                    </Box>

                                    <Box
                                        border = {false}
                                        width = "6"
                                        theme = "box-default"
                                        title = "Callouts"
                                        headerMarkup={<i className="fa fa-bullhorn"></i>} >
                                        <Callout
                                            title="I am a danger callout!"
                                            theme="callout-danger"
                                            content = "There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul,
                                            like these sweet mornings of spring which I enjoy with my whole heart." />
                                        <Callout
                                            title="I am an info callout!"
                                            theme="callout-info"
                                            content = "Follow the steps to continue to payment." />
                                        <Callout
                                            title="I am a warning callout!"
                                            theme="callout-warning"
                                            content = "This is a yellow callout" />
                                        <Callout
                                            title="I am a success callout!"
                                            theme="callout-success"
                                            content = "This is a green callout" />
                                    </Box>
                                </div>
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