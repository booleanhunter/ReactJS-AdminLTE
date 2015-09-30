/**
 * Copyright Toorq Media Serivces
 * @author Ashwin Hariharan
 * @Details App execution starts from here. One of the entry points to begin execution. Renders the main app component.
 */

define(
    [
        'react',   
        'jquery',
        './components/saas-dashboard'
    ], 
    function(React, $, SaasDashboard) {
    	React.render(<SaasDashboard />,  document.body);
    }
)    