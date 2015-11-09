/**
 * @author Ashwin Hariharan
 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
 */

define(
    [
        'react',
        'reactDom',   
        'jquery',
        './common-functions',
        './components/widgets'
    ], 
    function(React, ReactDOM, $, commonFunctions, Widgets) {
    	ReactDOM.render(<Widgets />,  document.getElementById('widgets-container'));

    	commonFunctions.initialize().bootstrapTooltips("[data-toggle='tooltip']");
    }
)    