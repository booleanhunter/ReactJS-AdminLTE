define(
    [
        'react',
        'create-react-class',
        'react-dom',
    ],
    function (React, createReactClass, ReactDOM) {
        var CustomTabs = createReactClass({
            getDefaultProps: function() {
                return {
                }
            },
            render: function() {

                return (
                    <div className="col-md-6">
                        <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs">
                                <li className="active"><a href="#tab_1" data-toggle="tab">Tab 1</a></li>
                                <li><a href="#tab_2" data-toggle="tab">Tab 2</a></li>
                                <li><a href="#tab_3" data-toggle="tab">Tab 3</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                          Dropdown <span className="caret"></span>
                                        </a>
                                    <ul className="dropdown-menu">
                                        <li role="presentation">
                                            <a role="menuitem" tabIndex="-1" href="#">Action</a>
                                        </li>
                                        <li role="presentation">
                                            <a role="menuitem" tabIndex="-1" href="#">Another action</a>
                                        </li>
                                        <li role="presentation">
                                            <a role="menuitem" tabIndex="-1" href="#">Something else here</a>
                                        </li>
                                        <li role="presentation" className="divider"></li>
                                        <li role="presentation">
                                            <a role="menuitem" tabIndex="-1" href="#">Separated link</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="pull-right">
                                    <a href="#" className="text-muted"><i className="fa fa-gear"></i></a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tab_1">
                                    <b>How to use:</b>

                                    <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
                                </div>
                                {/* /.tab-pane */}
                                <div className="tab-pane" id="tab_2">
                                    The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
                                </div>
                                {/* /.tab-pane */}
                                <div className="tab-pane" id="tab_3">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                {/* /.tab-pane */}
                            </div>
                            {/* /.tab-content */}
                        </div>
                    </div>
                )
            }

        });

        return CustomTabs;
    }
)