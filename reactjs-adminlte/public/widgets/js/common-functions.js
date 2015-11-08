define(
    [
        'exports',
        'jquery',
        'velocity'
    ],
    function (exports, $, velocity) {

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
            $(box).velocity('slideUp', {
                duration: 500,
                easing: 'easeInSine'
            });
        }
    }
)