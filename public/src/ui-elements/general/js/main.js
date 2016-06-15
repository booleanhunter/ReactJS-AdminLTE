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
        './components/ui-elements'
    ], 
    function(React, ReactDOM, $, commonFunctions, UIElements) {
    	ReactDOM.render(<UIElements />,  document.getElementById('ui-container'));

    	commonFunctions.initialize().bootstrapTooltips("[data-toggle='tooltip']");
    }
)    