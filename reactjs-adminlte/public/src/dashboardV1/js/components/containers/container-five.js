define(
    [
        'react',
        'jquery',
        'velocity'

    ],
    function(React,$){
    	var ContainerFive = React.createClass({
            toggleBoxCollapse: function(box, boxBody, icon) {
                if(box.className.indexOf('collapsed-box') !== -1) {
                    icon.className = icon.className.replace(/fa-plus/g, 'fa-minus');
                    $(boxBody).velocity('slideDown', {
                        duration: 500,
                        easing: 'easeInSine',
                        complete: function() {
                            box.className = box.className.replace(/ collapsed-box/g, '');
                        }
                    });
                    // $(boxBody).slideDown(500, function () {
                    //     box.className = box.className.replace(/ collapsed-box/g, '');
                    // });
                } else {
                    icon.className = icon.className.replace(/fa-minus/g, 'fa-plus');
                    $(boxBody).velocity('slideUp', {
                        duration: 500,
                        easing: 'easeInSine',
                        complete: function() {
                            box.className += ' collapsed-box';
                        }
                    });
                    // $(boxBody).slideUp(500, function () {
                    //     box.className += ' collapsed-box';
                    // });
                }
            },
            findClosestElement: function(element, className){
                var regex = new RegExp("(^|\\s)"+className+"(\\s|$)", "gi")
                while (!regex.test(element.className)) {
                    // Increment the loop to the parent node
                    element = element.parentNode;
                    if (!element) {
                        return null;
                    }
                }
                // At this point, the while loop has stopped and `element` represents the element that has
                // the class you specified in the second parameter of the function `clazz`

                // Then return the matched element
                return element;
            },
            toggleCollapse: function(event){
                var box = this.findClosestElement(event.currentTarget, 'box'),
                    boxBody = box.children[1],
                    icon = event.currentTarget.children[0];

                this.toggleBoxCollapse(box, boxBody, icon);
            },
    		render: function(){
                var style = {
                    height: '250px'
                };
                //style="overflow: hidden; width: auto; height: 250px;"
    			return (
    				<div className="box box-solid bg-light-blue-gradient">
                        <div className="box-header ui-sortable-handle">
                            <div className="pull-right box-tools">
                                <button className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                                    <i className="fa fa-calendar"></i>
                                </button>
                                
                                <button className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" onClick={this.toggleCollapse}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>

                            <i className="fa fa-map-marker"></i>
                            <h3 className="box-title">
                                Visitors
                            </h3>
                        </div>

                        <div className="box-body" style={style}>
                            {this.props.children}
                        </div>

                        <div className="box-footer no-border">
                        </div>
                    </div>
    			)
    		}
    	})

    	return ContainerFive;
    }   
)     