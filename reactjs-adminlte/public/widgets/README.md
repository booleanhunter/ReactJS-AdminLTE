#### [Go to the widgets folder](./js/components/page-widgets)

## List of widgets


### - [InfoTile](./js/components/page-widgets/info-tile/info-tile.js)

A basic info-tile for displaying info. This component takes 5 values from props.

```javascript

theme = 'bg-aqua' / 'bg-green' / 'bg-yellow' (To apply background color to the icon),
icon = 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0' (Any font-awesome icon)
subject =  'Can be a string or a number'
stats = 'Can be a string or a number'
content = 'Can be a string or a number'
```
#### Usage: 

```javascript
<InfoTile  
    content = '' 
    icon = 'fa-envelope-o' 
    stats = '1,410' 
    subject = 'Messages' 
    theme = 'bg-aqua' 
/>
```
![](../../screenshots/info-tile.png)

You can optionally display a progress status and bar by passing the [ProgressBar](./js/components/page-widgets/info-tile/progress-bar.js) component as props.children

```javascript
<InfoTile content = '' icon = 'fa-thumbs-o-up' stats = '41,410' subject = 'Likes' theme = 'bg-green' >
	<ProgressBar percent = 50 description = '50% Increase in 30 Days' color = 'white' />
</InfoTile>	
```
![](../../screenshots/progress-info-tile.png)


### - [StatTile](./js/components/page-widgets/stat-tile.js)

A tile for displaying some basic info, highlighting numbers or stats. This component takes 5 values from props, 1 is optional

```javascript

theme = 'bg-aqua' / 'bg-green' / 'bg-red' (To apply background color to the icon),
icon = 'fa-shopping-cart' / 'ion-stats-bars' / 'ion-person-add' (Any font-awesome icon)
subject =  'Can be a string or a number'
stats = 'Can be a string or a number'
link = 'Link to go to for more information'  (Optional)
```
#### Usage: 

```javascript
<StatTile 
	theme = 'bg-yellow' 
	icon = 'ion-person-add' 
	subject = 'User Registration' 
	stats = '44'
	link = '#' 
/>
```

![](../../screenshots/stat-tile.png)


### - [SmallBox](./js/components/page-widgets/small-box.js)

A box / window for displaying some basic info, to which properties can be applied. This component takes 6 values from props, out of which 2 are optional

```javascript
type = 'expandable' / 'collapsable' / 'removable' (To make the box expandable, collapsable or removable)
theme = 'box-default' / 'box-primary' / 'box-warning' / 'box-danger' / 'box-success'
loading = true (Optional boolean value, to show a loading animation)
border = true (Optional boolean value, will apply a border for the box and color for the title bar)
title = 'Can be a string or a number'
content = 'Can be a string or a number'
```
#### Usage: 

##### An expandable box with border

```javascript

<SmallBox 
	border = true
	content = 'The body of the box'
	theme = 'box-default'
	title = 'Expandable'
	type = 'expandable'
/>
```

![](../../screenshots/small-box-expandable.png)

##### A collapsable box with border

```javascript

<SmallBox 
	border = true
	content = 'The body of the box'
	theme = 'box-primary'
	title = 'Collapsable'
	type = 'collapsable'
/>
```

![](../../screenshots/small-box-collapsable.png)

##### A removable box without border

```javascript
<SmallBox 
	content = 'The body of the box'
	theme = 'box-danger'
	title = 'Removable'
	type = 'removable'
/>
```

![](../../screenshots/small-box-removable.png)

##### A removable box without border with loading animation

```javascript
<SmallBox 
	content = 'The body of the box'
	theme = 'box-warning'
	loading = true
	title = 'Loading state'
	type = 'removable'
/>
```

![](../../screenshots/small-box-loading.png)