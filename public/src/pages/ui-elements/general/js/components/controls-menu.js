define(
    [
        'react',
        'jquery',
    ],
    function(React,$){
        var ControlsMenu = React.createClass({
            componentDidMount:function(){

            },
            render: function(){
                var that = this;
                return (
                    <aside className="control-sidebar control-sidebar-dark control-sidebar-open">
                        {/* Create the tabs */}
                        <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                            <li className="active">
                                <a href="#control-sidebar-theme-demo-options-tab" data-toggle="tab"><i className="fa fa-wrench"></i></a>
                            </li>
                            <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
                            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            {/* Home tab content */}
                            <div className="tab-pane" id="control-sidebar-home-tab">
                                <h3 className="control-sidebar-heading">Recent Activity</h3>
                                <ul className="control-sidebar-menu">
                                    <li>
                                        <a href="javascript::;">
                                            <i className="menu-icon fa fa-birthday-cake bg-red"></i>
                                            <div className="menu-info">
                                                <h4 className="control-sidebar-subheading">Langdons Birthday</h4>
                                                <p>Will be 23 on April 24th</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript::;">
                                            <i className="menu-icon fa fa-user bg-yellow"></i>
                                            <div className="menu-info">
                                                <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>
                                                <p>New phone +1(800)555-1234</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript::;">
                                            <i className="menu-icon fa fa-envelope-o bg-light-blue"></i>
                                            <div className="menu-info">
                                                <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>
                                                <p>nora@example.com</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript::;">
                                            <i className="menu-icon fa fa-file-code-o bg-green"></i>
                                            <div className="menu-info">
                                                <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>
                                                <p>Execution time 5 seconds</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                {/* /.control-sidebar-menu */}

                                <h3 className="control-sidebar-heading">Tasks Progress</h3>
                                <ul className="control-sidebar-menu">
                                    <li>
                                        <a href="javascript::;">
                                            <h4 className="control-sidebar-subheading">
                                        Custom Template Design
                                        <span className="label label-danger pull-right">70%</span>
                                      </h4>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-danger" style="width: 70%"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript::;">
                                            <h4 className="control-sidebar-subheading">
                                        Update Resume
                                        <span className="label label-success pull-right">95%</span>
                                      </h4>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-success" style="width: 95%"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript::;">
                                            <h4 className="control-sidebar-subheading">
                                        Laravel Integration
                                        <span className="label label-warning pull-right">50%</span>
                                      </h4>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-warning" style="width: 50%"></div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript::;">
                                            <h4 className="control-sidebar-subheading">
                                        Back End Framework
                                        <span className="label label-primary pull-right">68%</span>
                                      </h4>
                                            <div className="progress progress-xxs">
                                                <div className="progress-bar progress-bar-primary" style="width: 68%"></div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                {/* /.control-sidebar-menu */}

                            </div>
                            <div id="control-sidebar-theme-demo-options-tab" className="tab-pane active">
                                <div>
                                    <h4 className="control-sidebar-heading">Layout Options</h4>
                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            <input type="checkbox" data-layout="fixed" className="pull-right" /> Fixed layout</label>
                                        <p>Activate the fixed layout. You cant use fixed and
                                            boxed layouts together</p>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            <input type="checkbox" data-layout="layout-boxed" className="pull-right" /> Boxed Layout</label>
                                        <p>Activate the boxed layout</p>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            <input type="checkbox" data-layout="sidebar-collapse" className="pull-right" /> Toggle Sidebar</label>
                                        <p>Toggle the left sidebars state (open or collapse)</p>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            <input type="checkbox" data-enable="expandOnHover" className="pull-right" /> Sidebar Expand on Hover</label>
                                        <p>Let the sidebar mini expand on hover</p>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            <input type="checkbox" data-controlsidebar="control-sidebar-open" className="pull-right" /> Toggle Right Sidebar Slide</label>
                                        <p>Toggle between slide over content and push content
                                            effects
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            <input type="checkbox" data-sidebarskin="toggle" className="pull-right" /> Toggle Right Sidebar Skin</label>
                                        <p>Toggle between dark and light skins for the right sidebar</p>
                                    </div>
                                    <h4 className="control-sidebar-heading">Skins</h4>
                                    <ul className="list-unstyled clearfix">
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-blue" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9;"></span>
                                                    <span className="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span>
                                                </div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin">Blue</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-black" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" className="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe;"></span>
                                                </div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #222;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin">Black</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-purple" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-purple-active"></span><span className="bg-purple"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin">Purple</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-green" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-green-active"></span><span className="bg-green"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin">Green</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-red" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-red-active"></span><span className="bg-red"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin">Red</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-yellow" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-yellow-active"></span><span className="bg-yellow"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #222d32;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin">Yellow</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-blue-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px; background: #367fa9;"></span>
                                                    <span className="bg-light-blue" style="display:block; width: 80%; float: left; height: 7px;"></span>
                                                </div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin" style="font-size: 12px">Blue Light</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-black-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div style="box-shadow: 0 0 2px rgba(0,0,0,0.1)" className="clearfix"><span style="display:block; width: 20%; float: left; height: 7px; background: #fefefe;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 7px; background: #fefefe;"></span>
                                                </div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin" style="font-size: 12px">Black Light</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-purple-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-purple-active"></span><span className="bg-purple"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin" style="font-size: 12px">Purple Light</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-green-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-green-active"></span><span className="bg-green"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin" style="font-size: 12px">Green Light</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-red-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-red-active"></span><span className="bg-red"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin" style="font-size: 12px">Red Light</p>
                                        </li>
                                        <li style="float:left; width: 33.33333%; padding: 5px;">
                                            <a href="javascript:void(0);" data-skin="skin-yellow-light" style="display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)"
                                            className="clearfix full-opacity-hover">
                                                <div><span style="display:block; width: 20%; float: left; height: 7px;"
                                                    className="bg-yellow-active"></span><span className="bg-yellow"
                                                    style="display:block; width: 80%; float: left; height: 7px;"></span></div>
                                                <div><span style="display:block; width: 20%; float: left; height: 20px; background: #f9fafc;"></span>
                                                    <span style="display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;"></span>
                                                </div>
                                            </a>
                                            <p className="text-center no-margin" style="font-size: 12px;">Yellow Light</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* /.tab-pane */}
                            {/* Stats tab content */}
                            <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
                            {/* /.tab-pane */}
                            {/* Settings tab content */}
                            <div className="tab-pane" id="control-sidebar-settings-tab">
                                <form method="post">
                                    <h3 className="control-sidebar-heading">General Settings</h3>
                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            Report panel usage
                                            <input type="checkbox" className="pull-right" checked="" />
                                        </label>
                                        <p>
                                            Some information about this general settings option
                                        </p>
                                    </div>
                                    {/* /.form-group */}

                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            Allow mail redirect
                                            <input type="checkbox" className="pull-right" checked="" />
                                        </label>
                                        <p>
                                            Other sets of options are available
                                        </p>
                                    </div>
                                    {/* /.form-group */}

                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            Expose author name in posts
                                            <input type="checkbox" className="pull-right" checked="" />
                                        </label>
                                        <p>
                                            Allow the user to show his name in blog posts
                                        </p>
                                    </div>
                                    {/* /.form-group */}

                                    <h3 className="control-sidebar-heading">Chat Settings</h3>

                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            Show me as online
                                            <input type="checkbox" className="pull-right" checked="" />
                                        </label>
                                    </div>
                                    {/* /.form-group */}

                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            Turn off notifications
                                            <input type="checkbox" className="pull-right" />
                                        </label>
                                    </div>
                                    {/* /.form-group */}

                                    <div className="form-group">
                                        <label className="control-sidebar-subheading">
                                            Delete chat history
                                            <a href="javascript::;" className="text-red pull-right"><i className="fa fa-trash-o"></i></a>
                                        </label>
                                    </div>
                                    {/* /.form-group */}
                                </form>
                            </div>
                            {/* /.tab-pane */}
                        </div>
                    </aside>
                )
            }
        })

        return ControlsMenu;
    }   
)     