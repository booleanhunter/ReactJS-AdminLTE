# ReactJS-AdminLTE

[![npm version](https://badge.fury.io/js/adminlte-reactjs.svg)](https://badge.fury.io/js/adminlte-reactjs)

ReactJS version of the original AdminLTE dashboard - https://github.com/almasaeed2010/AdminLTE. This project consists of widgets, charts and other components written in ReactJS. Stylesheets are borrowed from the AdminLTE project. 

If you use React in your app, you might find some of these components useful!

[View the complete list of available components](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src/components)


### Some available components in React: 


- [ReactJS Timeline](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src/components/#--timeline)

    [Click here](http://adminlte.booleanhunter.com/timeline.html) to see it live


- [ReactJS Widgets](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src/components)

    [Click here](http://adminlte.booleanhunter.com/widgets.html) to see a live preview!

    ![](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/screenshots/widgets.png?raw=true)


##### Widgets will use velocity.js animations instead of the originally used JQuery animations wherever possible, for improved performance across all browsers and devices.


[ReactJS Dashboard](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src/pages/dashboardV1)

Will soon be populated with charts.

![](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/screenshots/dashboard-v1.png?raw=true)


More stuff coming soon. Stay tuned!

### Instructions of Usage :
- Run `npm install adminlte-reactjs`
- Include the stylesheets for the components, similar to the [widgets page](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/views/widgets.html)
- Include the library `var reactjsAdminlte = require('adminlte-reactjs')`. You may prefer the AMD style or the import statement.
- You can now begin using the components like this `var ProfileCard = reactjsAdminlte.ProfileCard`.
- If you don't need all the components, then you can choose to include only specific ones rather than the entire library. This can reduce your JS bundle size significantly `var StatTile = require('adminlte-reactjs/src/components/stat-tile')`

### Contributing guidelines :

##### Due to several work related commitments, the development rate is a little slow and I apologize for that. However, I'm looking for awesome folks :metal: who could contribute and help me maintain this project.

#### Where can you contribute? (starting from easy to relatively challenging)

- Covering [documentation](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src/components#list-of-components) for all the available components and how to use them (this is the easiest one, but quite important!)
- Converting existing components into ES6/ECMAScript 2016 
- Writing tests for components. Similar to tests written in the [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap/tree/master/test) project.
- Reactifying the rest of the widgets, elements and pages from AdminLTE. Here are the steps to do this:

#### Step 1 : 

- Fork or clone this repo. Alternatively - if you have NPM installed, you can also do `npm install adminlte-reactjs`.
- Install nodejs and NPM
- Go to the project's root folder from your terminal and run `npm install`
- Run `npm run dev`
- Going to [http://localhost:8000](http://localhost:8000) will render an empty dashboard skeleton in the client-side using ReactJS. Clicking on one of the dashboard options on the left pane displays the original dashboards from AdminLTE.
- Go to [http://localhost:8000/widgets.html](http://localhost:8000/widgets.html) to see available widgets in ReactJS.
- Use [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) to understand the components hierarchy and structure and to track down bugs. 

#### Step 2:

- Pick a [page](https://almsaeedstudio.com/themes/AdminLTE/index2.html) from the AdminLTE project to reactify it, or some widget that hasn't been reactified yet.
- If the page for it doesn't exist in the repo, create one for it in the [views](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/views) folder, and render the page by defining a route for it inside [routes.js](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/routes.js).
- Create the entry point that renders the components inside [/src/pages](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src/pages) folder. Now you can begin writing your components and testing them!
- To view and test your components on the page, add your entry point in [webpack.config.js](https://github.com/booleanhunter/ReactJS-AdminLTE/blob/master/webpack.config.js). Run `webpack -p` to generate the bundle for the page, and include the bundle and associated vendors for it in the page using `script` tags.
- `webpack-dev-server` along with React Hot Loader can be used to ease your development workflow. This can be done by installing dev dependencies from `package.json` file. If you haven't, then run `npm install webpack-dev-server` and `npm install react-hot-loader`. Then in your HTML, change your javascript bundles' source paths to point to the webpack-dev-server proxy in your `script` tags. So if you have these bundles for example,

```html
<script src="/dist/js/vendors.js"></script>
<script src="/dist/js/app.bundle.js"></script>
```

change this to 

```html
<script src="http://localhost:8080/dist/js/vendors.js"></script>
<script src="http://localhost:8080/dist/js/app.bundle.js"></script>
```

Then you can run `webpack-dev-server --hot --inline` just once - and every time you make any edits to your code and save it, the server will automatically create bundles and update the changes in the browser. This is highly recommended instead of running `webpack -p` every time you make some edit in your code. You can later change the `script` tags back once you stop `webpack-dev-server`.

For a detailed explanation on setting up a workflow using Webpack, check out my blog post - [Webpack for The Fast and The Furious](https://medium.com/@booleanhunter/webpack-for-the-fast-and-the-furious-bf8d3746adbd#.uzx2l0hy4) :oncoming_police_car:

This is still a work in progress and will get better over time. 

#### Step 3: Including your new components in the library
After you've finished writing a component and testing it out, you can include it in the library.
- Place/move your component inside the [/src/components](https://github.com/booleanhunter/ReactJS-AdminLTE/tree/master/src) folder and include it inside `widgets.src.js`.
- Run `npm build` to generate the library `reactjsAdminlte.js`. Your component will be included in the library!
- To make sure that your component works correctly, test it out by including it in the page using the library.


#### Some tips before making a pull request
- Make sure that you've pulled the latest commits into your fork.
- Create a branch for your edits - that way the project maintainer can safely pull your code and test it out.
- If it's your first P.R, it'll be easier if you begin with something small first instead of making huge changes in lots of files. It helps me understand what the P.R is about, and I could help you out with the rest of changes if needed. It'll also save you from spending lot of effort in doing something that might not be necessary.
- An important thing to remember is to have a P.R that fixes one issue at a time, and not make changes to lot of files in the same P.R. This way it's easier to test the changes out and have a relatively clean commit log.
- You can learn more about these tips in detail [here](https://guides.github.com/activities/contributing-to-open-source/#contributing)


##### If you have any further queries that you may have on how to contribute, or you have just general questions about how to use the components in your app - feel free to shoot an email. I'll help you out! :smile_cat:
