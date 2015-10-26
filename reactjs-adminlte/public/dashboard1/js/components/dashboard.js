define(
    [
        'react',
        'jquery',
        './header-bar',
        './navigation-menu',
        './control-panel',
        './containers/container-one',
        './containers/container-two',
        './containers/container-three',
        './containers/container-four',
        './containers/container-five',
        './containers/container-six',
        './containers/container-seven',
        './controls-menu'
    ],
    function(React,$, HeaderBar, NavigationMenu, ControlPanel, ContainerOne, ContainerTwo, ContainerThree, ContainerFour,ContainerFive,ContainerSix,ContainerSeven,ControlsMenu){
    	var Dashboard = React.createClass({
    		render: function(){
    			return (
    				<div className="wrapper">
    					<HeaderBar />
    					
    					<NavigationMenu />
    					
    					<div className="content-wrapper">
    						<section className="content-header">
    							<h1>
    						        Dashboard
    						       	<small>Control panel</small>
    						    </h1>
    							{/*<ol className="breadcrumb">
    								<li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
    								<li className="active">Dashboard</li>
    							</ol>*/}
                                <ControlPanel />
    						</section>

    						<section className="content">
    							<div className="row">
    								<section className="col-lg-7 connectedSortable ui-sortable" >
    									<ContainerOne />
                                        <ContainerTwo />
                                        <ContainerThree />
                                        <ContainerFour />
    								</section>

                                    <section className="col-lg-5 connectedSortable ui-sortable">
                                        <ContainerFive />
                                        <ContainerSix />
                                        <ContainerSeven />
                                    </section>
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