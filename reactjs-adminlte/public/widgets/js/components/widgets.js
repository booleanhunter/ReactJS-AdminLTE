define(
    [
        'react',
        'jquery',
        './header-bar',
        './navigation-menu'
    ],
    function(React,$, HeaderBar, NavigationMenu){
    	var Dashboard = React.createClass({
    		render: function(){
    			return (
    				<div className="wrapper">
    					<HeaderBar />
    					
    					<NavigationMenu />
    					
    					<div className="content-wrapper">
    						<section className="content-header">
    							<h1>
    						        Widgets
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

                                <div className="row">
                                                     
                                </div>

                                <div className="row">
                                                     
                                </div>

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
                                <b>Version</b> 2.3.0
                            </div>
                            <strong>Copyright © 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                            All rights reserved.
                        </footer>

                        {/*<ControlsMenu />*/}
    				</div>
    			)
    		}
    	})

    	return Dashboard;
    }   
)     