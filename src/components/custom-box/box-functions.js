define(
    [
        'exports',
        'jquery',
        'velocity-animate'
    ],
    function (exports, $, velocity) {
        //https://www.debuggex.com/r/Q-7k9g2R6hDLKE7J
        exports.findClosestElement = function(element, className){
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
        };

        exports.toggleBoxCollapse = function(box, boxBody, icon) {
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
        };

        exports.removeBox = function(box){
            console.log(box)
            $(box).velocity('slideUp', {
                duration: 500,
                easing: 'easeInSine'
            });
        };

        exports.initialize = function(){
            function bootstrapTooltips(selector){
                $('body').tooltip({
                  selector: selector
                });
            }

            return {
                bootstrapTooltips: bootstrapTooltips
            }
            
        };
    }
)