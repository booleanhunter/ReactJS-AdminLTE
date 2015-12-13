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
        './components/buttons'
    ], 
    function(React, ReactDOM, $, commonFunctions, Buttons) {
    	ReactDOM.render(<Buttons />,  document.getElementById('buttons-container'));

    	commonFunctions.initialize().bootstrapTooltips("[data-toggle='tooltip']");
    }
)    