define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu'
    ],
    function (React, $, HeaderBar, NavigationMenu) {
        var Buttons = React.createClass({
            getInitialState: function() {
                return {
                    someState: ''
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
                                    Buttons
                                    <small>Preview page</small>
                                </h1>
                                {/*<ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Dashboard</li>
                                </ol>*/}
                            </section>

                            <section className="content">
                                <div className="row">
                                </div>

                                <div className="row">     
                                </div>

                                <div className="row">              
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

        return Buttons;
    }
)