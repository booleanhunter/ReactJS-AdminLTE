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
        './components/timeline-page'
    ], 
    function(React, ReactDOM, $, commonFunctions, TimelinePage) {
    	ReactDOM.render(<TimelinePage />,  document.getElementById('timeline-container'));

    	commonFunctions.initialize().bootstrapTooltips("[data-toggle='tooltip']");
    }
)    