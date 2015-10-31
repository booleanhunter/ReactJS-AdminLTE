### All widgets are in [](./js/components)

- ####[InfoBox](./js/components/page-widgets/info-box.js)

A basic info-box for displaying info. this component takes an options object, from props.

The options object needs 5 values, out of which 1 is optional.

```javascript
{
   color: 'bg-aqua' / 'bg-green' / 'bg-yellow' (To apply background color to the icon),
   icon: 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0' (Any font-awesome icon)
   subject:  'Can be a string or a number',
   stats: 'Can be a string or a number',
   content: 'Can be a string or a number' (optional)
}
```