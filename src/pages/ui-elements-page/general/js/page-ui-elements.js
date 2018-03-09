define(
    [
        'react',
        'create-react-class',
        'react-dom',
        'jquery',
        './components/header-bar/header-bar',
        './components/navigation-menu',
        './components/color-palette-set',
        './components/custom-box/box',
        './components/alert',
        './components/callout',
        './components/custom-tabs/custom-tabs',
    ],
    function (React, createReactClass, ReactDOM, $, HeaderBar, NavigationMenu, ColorPaletteSet, Box, Alert, Callout, CustomTabs) {
        var UIElements = createReactClass({
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

                                <h2 className="page-header">AdminLTE Custom Tabs</h2>

                                <div className="row">
                                    
                                    <CustomTabs />
                                    <div className="col-md-6">
                                        {/* Custom Tabs (Pulled to the right) */}
                                        <div className="nav-tabs-custom">
                                            <ul className="nav nav-tabs pull-right">
                                                <li className="active"><a href="#tab_1-1" data-toggle="tab">Tab 1</a></li>
                                                <li><a href="#tab_2-2" data-toggle="tab">Tab 2</a></li>
                                                <li><a href="#tab_3-2" data-toggle="tab">Tab 3</a></li>
                                                <li className="dropdown">
                                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                                      Dropdown <span className="caret"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Action</a></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Another action</a></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Something else here</a></li>
                                                        <li role="presentation" className="divider"></li>
                                                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Separated link</a></li>
                                                    </ul>
                                                </li>
                                                <li className="pull-left header"><i className="fa fa-th"></i> Custom Tabs</li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_1-1">
                                                    <b>How to use:</b>

                                                    <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
                                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                                                </div>
                                                {/* /.tab-pane */}
                                                <div className="tab-pane" id="tab_2-2">
                                                    The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
                                                </div>
                                                {/* /.tab-pane */}
                                                <div className="tab-pane" id="tab_3-2">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                </div>
                                                {/* /.tab-pane */}
                                            </div>
                                            {/* /.tab-content */}
                                        </div>
                                        {/* nav-tabs-custom */}
                                    </div>
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

        ReactDOM.render(<UIElements />,  document.getElementById('ui-container'));
    }
)