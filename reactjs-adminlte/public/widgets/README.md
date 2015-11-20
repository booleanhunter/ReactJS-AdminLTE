#### [Go to the widgets folder](./js/components/page-widgets)

## List of widgets


### - [InfoTile](./js/components/page-widgets/info-tile/info-tile.js)

A basic info-tile for displaying info. 

#### Usage:

Props: This component takes 5 values.

```javascript

theme = 'bg-aqua' / 'bg-green' / 'bg-yellow' (To apply background color to the icon),
icon = 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0' (Any font-awesome icon)
subject =  'Can be a string or a number'
stats = 'Can be a string or a number'
content = 'Can be a string or a number'
```
#### Example: 

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

A tile for displaying some basic info, highlighting numbers or stats. 

#### Usage:

Props: This component takes 5 values from props, 1 is optional

```javascript

theme = 'bg-aqua' / 'bg-green' / 'bg-red' (To apply background color to the icon),
icon = 'fa-shopping-cart' / 'ion-stats-bars' / 'ion-person-add' (Any font-awesome icon)
subject =  'Can be a string or a number'
stats = 'Can be a string or a number'
link = 'Link to go to for more information'  (Optional)
```
#### Example: 

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

A box / window for displaying some basic info, to which properties can be applied. 

#### Usage:

Props: This component takes 6 values from props, out of which 2 are optional

```javascript
type = 'expandable' / 'collapsable' / 'removable' (To make the box expandable, collapsable or removable)
theme = 'box-default' / 'box-primary' / 'box-warning' / 'box-danger' / 'box-success'
loading = true (Optional boolean value, to show a loading animation)
border = true (Optional boolean value, will apply a border for the box and color for the title bar)
title = 'Can be a string or a number'
content = 'Can be a string or a number'
```

#### Examples: 

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


### - [ChatBox](./js/components/page-widgets/chat-box/chat-box.js)

A box / window which displays chat messages, notifications and contact information. 

#### Usage:

Props: This component takes 7 values from props to customize it's UI.

```javascript
border = true/false (To display the border)
buttonTheme = 'btn-primary' / 'btn-success' / 'btn-warning' (To apply color for the submit button)
chatTheme = 'direct-chat-primary' / 'direct-chat-success' / 'direct-chat-warning' / 'direct-chat-danger' / {Chat messages color}
headerTheme = 'box-primary' / 'box-success' / 'box-warning' (Chat header / border colors)
notificationTheme = 'bg-light-blue' / 'bg-green' / 'bg-yellow' (Notification color)
notifications = 'Can be a string or a number' (Number of notifications)
title = 'Can be a string or a number'
```

Pass the [Conversations](./js/components/page-widgets/chat-box/conversations.js) component as props.children to add chat messages. It accepts an array of objects containing chat information.

```javascript
var conversationsArray = [{
    name: 'John Doe',
    displayPicture: 'url of the image', 
    date: '23 Jan 2:00 pm',
    message: "Is this template really for free? That's unbelievable!"
}]

<Conversations conversations = {conversationsArray} />
```

Pass the [Contacts](./js/components/page-widgets/chat-box/contacts.js) component as props.children to add contacts in the right drawer. It accepts an array of objects containing contact information

```javascript
var contactsArray = [{
    name: 'John Doe',
    displayPicture: 'url of the image',
    link: '#',
    date: '2/28/2015',
    message: 'How have you been? I was...',
    align: 'right' // (To align a message to the right)
}]

<Contacts contacts = {contactsArray} />
```

#### Example: 

```javascript

var conversationsInfo = [{
    name: 'Alexander Pierce',
    displayPicture: '../dist/img/user1-128x128.jpg',
    date: '23 Jan 2:00 pm',
    message: "Is this template really for free? That's unbelievable!"
}, {
    align: 'right',
    name: 'Sarah Bullock',
    displayPicture: '../dist/img/user3-128x128.jpg',
    date: '23 Jan 2:05 pm',    
    message: 'You better believe it!'
}];

var contactsInfo = [{
    name: 'Count Dracula',
    displayPicture: '../dist/img/user1-128x128.jpg',
    link: '#',
    date: '2/28/2015',
    message: 'How have you been? I was...'
}, {
    name: 'Count Dracula',
    displayPicture: '../dist/img/user1-128x128.jpg',
    link: '#',
    date: '2/28/2015',
    message: 'How have you been? I was...'
}];

<ChatBox  
    buttonTheme = 'btn-primary'
    chatTheme = 'direct-chat-primary'
    headerTheme = 'box-primary'
    notificationTheme = 'bg-light-blue'
    title = 'Direct Chat'
    notifications = 2 >

    <Conversations conversations = {conversationsInfo} />
    <Contacts contacts = {contactsInfo} />

</ChatBox>
```
![](../../screenshots/chat-box.png)


### - [ProfileCard](./js/components/page-widgets/profile-card/profile-card.js)

A card to display profile information in social media.

#### Usage:

Props: This component takes 5 values from props, 1 is optional

```javascript
theme = 'bg-yellow' / 'bg-aqua-active' / 'bg-red' (Optional, To apply background color),
displayName = 'String'
description = 'String' (Description below the display name)
displayPicture = 'url of the image'
coverPicture = 'url of the image' (Optional cover picture, this will overwrite the theme)
pictureAlignment = 'left' (Display picture is center aligned by default, can be left-aligned)
```

You can choose between [ProfileInfoBlocks](./js/components/page-widgets/profile-card/profile-info-blocks.js) component or [ProfileInfoList](./js/components/page-widgets/profile-card/profile-info-list.js) component to display additional meta data in the profile card. You have to pass them as props.children.

```javascript
var infoList = [{
    description: 'SALES',
    stats: '3,200'
}, {
    description: 'FOLLOWERS',
    stats: '13,000'
}, {
    description: 'PRODUCTS',
    stats: 35
}];

<ProfileInfoBlocks list={infoList} />

OR

var infoList = [{
    description: 'Projects',
    stats: 10,
    link: '/link/to/info',
    badgeTheme: 'bg-blue'
}, {
    description: 'Tasks',
    stats: 5,
    link: '/link/to/info',
    badgeTheme: 'bg-aqua'
}]

<ProfileInfoList list={infoList} />

```

#### Examples: 

```javascript
var infoList = [{
    description: 'Projects',
    stats: 29,
    link: '#',
    badgeTheme: 'bg-blue'
}, {
    description: 'Reviews',
    stats: 10,
    link: '#',
    badgeTheme: 'bg-yellow'
}];

<ProfileCard 
	theme: 'bg-red',
	displayName: 'Jane Doe',
	description: 'Lead Developer',
	displayPicture: '../dist/img/user7-128x128.jpg',
	pictureAlignment: 'left' >

	<ProfileInfoList list={infoList} />
</ProfileCard>

```
![](../../screenshots/profile-card-left.png)

```javascript
var infoList = [{
    description: 'PROJECTS',
    stats: 20
}, {
    description: 'CITIES',
    stats: 11
}, {
    description: 'COUNTRIES',
    stats: 5
}];

<ProfileCard 
	theme: 'bg-aqua',
	displayName: 'John Roe',
	description: 'Founder & CEO',
	displayPicture: '../dist/img/user1-128x128.jpg',
	coverPicture: '../dist/img/photo4.png' >

	<ProfileInfoBlocks list={infoList} />
</ProfileCard>

```
![](../../screenshots/profile-card-center.png)