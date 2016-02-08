define(
    [
        'react',
        'reactDom',
        '../../common-functions'
    ],
    function (React, ReactDOM, commonFunctions) {
        var Box = React.createClass({
            // getDefaultProps: function() {
            //     return {
            //         type: 'expandable',
            //         theme: 'box-default',
            //         loading: false,
            //         border: true,
            //         title: 'Default title',
            //         content: 'Default content',
            //     }
            // },
            render: function() {
                return (
                    <div className="box box-default color-palette-box">
                            <div className="box-header with-border">
                              <h3 className="box-title"><i className="fa fa-tag"></i> Color Palette</h3>
                            </div>
                            <div className="box-body">
                              <div className="row">
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Primary</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-light-blue disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-light-blue color-palette"><span>#3c8dbc</span></div>
                                    <div className="bg-light-blue-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Info</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-aqua disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-aqua color-palette"><span>#00c0ef</span></div>
                                    <div className="bg-aqua-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Success</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-green disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-green color-palette"><span>#00a65a</span></div>
                                    <div className="bg-green-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Warning</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-yellow disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-yellow color-palette"><span>#f39c12</span></div>
                                    <div className="bg-yellow-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Danger</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-red disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-red color-palette"><span>#f56954</span></div>
                                    <div className="bg-red-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Gray</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-gray disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-gray color-palette"><span>#d2d6de</span></div>
                                    <div className="bg-gray-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                              </div>
                              {/* /.row */}
                              <div className="row">
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Navy</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-navy disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-navy color-palette"><span>#001F3F</span></div>
                                    <div className="bg-navy-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Teal</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-teal disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-teal color-palette"><span>#39CCCC</span></div>
                                    <div className="bg-teal-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Purple</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-purple disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-purple color-palette"><span>#605ca8</span></div>
                                    <div className="bg-purple-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Orange</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-orange disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-orange color-palette"><span>#ff851b</span></div>
                                    <div className="bg-orange-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Maroon</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-maroon disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-maroon color-palette"><span>#D81B60</span></div>
                                    <div className="bg-maroon-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-4 col-md-2">
                                  <h4 className="text-center">Black</h4>

                                  <div className="color-palette-set">
                                    <div className="bg-black disabled color-palette"><span>Disabled</span></div>
                                    <div className="bg-black color-palette"><span>#111111</span></div>
                                    <div className="bg-black-active color-palette"><span>Active</span></div>
                                  </div>
                                </div>
                                {/* /.col */}
                              </div>
                              {/* /.row */}
                            </div>
                            {/* /.box-body */}
                          </div>

                )
            }

        })

        return Box;
    }
)