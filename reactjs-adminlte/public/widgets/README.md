#### [Go to the widgets folder](./js/components/page-widgets)

## List of widgets


### - [InfoTile](./js/components/page-widgets/info-tile.js)

A basic info-tile for displaying info. This component takes an options object, from props.

The options object needs 5 values.

```javascript
{
	theme: 'bg-aqua' / 'bg-green' / 'bg-yellow', (To apply background color to the icon),
	icon: 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0', (Any font-awesome icon)
	subject:  'Can be a string or a number',
	stats: 'Can be a string or a number',
	content: 'Can be a string or a number'
}
```
#### Usage: 

```javascript

var infoTileOptions = {
	theme: 'bg-aqua',
	icon: 'fa-envelope-o',
	subject: 'Messages',
	stats: '1,410',
	content: '' 
};

<InfoTile options = {infoTileOptions} />
```

![](../../screenshots/info-tile.png)


### - [ProgressInfoTile](./js/components/page-widgets/progress-info-tile.js)

An info-tile for displaying info along with a progress bar. This component takes an options object, from props.

The options object needs 6 values.

```javascript
{
	theme: 'bg-aqua' / 'bg-green' / 'bg-yellow', (To apply background color to the icon),
	icon: 'fa-bookmark-o' / 'fa-thumbs-o-up' / 'fa-calendar', (Any font-awesome icon)
	subject:  'Can be a string or a number',
	stats: 'Can be a string or a number',
	content: 'Can be a string or a number',
	progress: {
		percent: number, (For length of the progress bar, between 0-100) 
		description: 'Can be a string or number', (For the description in the progress bar)
		color: 'Any valid color in CSS3' (For the bar color)
	}
}
```
#### Usage: 

```javascript

var progressTileOptions = {
	theme: 'bg-green',
	icon: 'fa-thumbs-o-up',
	subject: 'Likes',
	stats: '41,410',
	content: '',
	progress: {
	    percent: 50,
	    description: '50% Increase in 30 Days',
	    color: 'white'
	} 
};

<ProgressInfoTile options = {progressTileOptions} />
```

![](../../screenshots/progress-info-tile.png)


### - [StatTile](./js/components/page-widgets/stat-tile.js)

A tile for displaying some basic info, highlighting numbers or stats. This component takes an options object, from props.

The options object needs 5 values, out of which 1 is optional

```javascript
{
	theme: 'bg-aqua' / 'bg-green' / 'bg-red', (To apply background color to the icon),
	icon: 'fa-shopping-cart' / 'ion-stats-bars' / 'ion-person-add', (Any font-awesome icon)
	subject:  'Can be a string or a number',
	stats: 'Can be a string or a number',
	link: 'Link to go to for more information',	(Optional)
}
```
#### Usage: 

```javascript

var statTileOptions = {
	theme: 'bg-yellow',
	icon: 'ion-person-add',
	subject: 'User Registrations',
	stats: '44',
	link: '#' 
};

<StatTile options = {statTileOptions} />
```

![](../../screenshots/stat-tile.png)


### - [SmallBox](./js/components/page-widgets/small-box.js)

A box / window for displaying some basic info, to which properties can be applied. This component takes an options object, from props.

The options object takes 6 values, out of which 2 are optional

```javascript
{
	type: 'expandable' / 'collapsable' / 'removable', (To make the box expandable, collapsable or removable)
	theme: 'box-default' / 'box-primary' / 'box-warning' / 'box-danger' / 'box-success',
	loading: true, (Optional boolean value, to show a loading animation)
	border: true, (Optional boolean value, will apply a border for the box and color for the title bar)
	title: 'Can be a string or a number',
	content: 'Can be a string or a number'
}
```
#### Usage: 

##### An expandable box with border

```javascript

var smallBoxOptions = {
	type: 'expandable'
	theme: 'box-default',
	border: true,
	title: 'Expandable',
	content: 'The body of the box'
};

<SmallBox options = {smallBoxOptions} />
```

![](../../screenshots/small-box-expandable.png)

##### A collapsable box with border

```javascript

var smallBoxOptions = {
	type: 'collapsable'
	theme: 'box-primary',
	border: true,
	title: 'Collapsable',
	content: 'The body of the box'
};

<SmallBox options = {smallBoxOptions} />
```

![](../../screenshots/small-box-collapsable.png)

##### A removable box without border

```javascript

var smallBoxOptions = {
	type: 'removable'
	theme: 'box-danger',
	title: 'Removable',
	content: 'The body of the box'
};

<SmallBox options = {smallBoxOptions} />
```

![](../../screenshots/small-box-removable.png)

##### A removable box without border with loading animation

```javascript

var smallBoxOptions = {
	type: 'removable'
	theme: 'box-warning',
	loading: true,
	title: 'Loading state',
	content: 'The body of the box'
};

<SmallBox options = {smallBoxOptions} />
```

![](../../screenshots/small-box-loading.png)