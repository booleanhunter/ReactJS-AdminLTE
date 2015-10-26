/**
 * @author Ashwin Hariharan
 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
 */

define(
    [
        'react',
        'reactDom',   
        'jquery',
        './components/dashboard'
    ], 
    function(React, ReactDOM, $, Dashboard) {
    	ReactDOM.render(<Dashboard />,  document.getElementById('dashboard-container'));
    }
)    