define(
    [
        'react',
        'jquery',
        'raphael',
        'morris',
        './header-bar/header-bar',
        './navigation-menu',
        './control-panel',
        './charts/donut-chart',
        './charts/area-chart',
        './containers/container-one',
        './containers/container-two',
        './containers/container-three',
        './containers/container-four',
        './containers/container-five',
        './containers/container-six',
        './containers/container-seven',
        './controls-menu',
        './stat-tile'
    ],
    function(React, $, Raphael, Morris, HeaderBar, NavigationMenu, ControlPanel, DonutChart, AreaChart, ContainerOne, ContainerTwo, ContainerThree, ContainerFour,ContainerFive,ContainerSix,ContainerSeven,ControlsMenu,StatTile){
    	var Dashboard = React.createClass({
            getInitialState: function() {
                return {
                    statTileOptions: []
                }
            },
            componentDidMount: function(){

                var statTileOptions = [{
                    theme: 'bg-aqua',
                    icon: 'ion-bag',
                    subject: 'New Orders',
                    stats: '150',
                    link: '#'
                }, {
                    theme: 'bg-green',
                    icon: 'ion-stats-bars',
                    subject: 'Bounce Rate',
                    stats: '53%',
                    link: '#'
                }, {
                    theme: 'bg-yellow',
                    icon: 'ion-person-add',
                    subject: 'User Registrations',
                    stats: '44',
                    link: '#'
                }, {
                    theme: 'bg-red',
                    icon: 'ion-pie-graph',
                    subject: 'Unique Visitors',
                    stats: '65',
                    link: '#'
                }];

                this.setState({
                    statTileOptions: statTileOptions
                });
            },

            componentDidUpdate: function(){

                $('.box ul.nav a').on('shown.bs.tab', function () {
                  area.redraw();
                  donut.redraw();
                  console.log("graph drawn")
                });

            },

    		render: function(){

                var statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
                    return (
                        <StatTile 
                            key={"rowThree"+iterator}
                            width = {3}
                            icon = {options.icon} 
                            link = {options.link}
                            stats = {options.stats}
                            subject = {options.subject} 
                            theme = {options.theme} />
                    )
                });

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
                                    {statTileWidgets}
                                </div>
    							<div className="row">
    								<section className="col-lg-7 connectedSortable ui-sortable" >
    									<ContainerOne>
                                            <AreaChart 
                                                id="revenue-chart"
                                                data = {[
                                                    {y: '2011 Q1', item1: 2666, item2: 2666},
                                                    {y: '2011 Q2', item1: 2778, item2: 2294},
                                                    {y: '2011 Q3', item1: 4912, item2: 1969},
                                                    {y: '2011 Q4', item1: 3767, item2: 3597},
                                                    {y: '2012 Q1', item1: 6810, item2: 1914},
                                                    {y: '2012 Q2', item1: 5670, item2: 4293},
                                                    {y: '2012 Q3', item1: 4820, item2: 3795},
                                                    {y: '2012 Q4', item1: 15073, item2: 5967},
                                                    {y: '2013 Q1', item1: 10687, item2: 4460},
                                                    {y: '2013 Q2', item1: 8432, item2: 5713}
                                                ]}
                                                xkey= 'y'
                                                ykeys= {['item1', 'item2']}
                                                labels= {['Item 1', 'Item 2']}
                                                lineColors= {['#a0d0e0', '#3c8dbc']} />
                                                
                                            <DonutChart 
                                                id="sales-chart"
                                                colors= {["#3c8dbc", "#f56954", "#00a65a"]}
                                                data= {[
                                                    {label: "Download Sales", value: 12},
                                                    {label: "In-Store Sales", value: 30},
                                                    {label: "Mail-Order Sales", value: 20}
                                                ]} />
                                        </ContainerOne>
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
                                <b>Version</b> 1.0.0
                            </div>
                            <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                        </footer>

                        {/*<ControlsMenu />*/}
    				</div>
    			)
    		}
    	})

    	return Dashboard;
    }   
)     