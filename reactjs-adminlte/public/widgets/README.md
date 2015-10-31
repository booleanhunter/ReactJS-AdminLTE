##### [Go to the widgets folder](./js/components/page-widgets)

### List of widgets

- #### [InfoBox](./js/components/page-widgets/info-box.js)

A basic info-box for displaying info. This component takes an options object, from props.

The options object needs 5 values.

```javascript
{
	color: 'bg-aqua' / 'bg-green' / 'bg-yellow', (To apply background color to the icon),
	icon: 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0', (Any font-awesome icon)
	subject:  'Can be a string or a number',
	stats: 'Can be a string or a number',
	content: 'Can be a string or a number'
}
```

- #### [ProgressInfoBox](./js/components/page-widgets/info-box.js)

An info-box for displaying info along with a progress bar. This component takes an options object, from props.

The options object needs 6 values.

```javascript
{
	color: 'bg-aqua' / 'bg-green' / 'bg-yellow', (To apply background color to the icon),
	icon: 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0', (Any font-awesome icon)
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