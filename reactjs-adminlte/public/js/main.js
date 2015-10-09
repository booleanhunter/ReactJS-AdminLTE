/**
 * @author Ashwin Hariharan
 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
 */

define(
    [
        'react',   
        'jquery',
        './components/dashboard'
    ], 
    function(React, $, Dashboard) {
    	React.render(<Dashboard />,  document.body);
    }
)    