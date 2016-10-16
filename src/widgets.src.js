var HeaderBar = require('./components/header-bar/header-bar');
var NavigationMenu = require('./components/navigation-menu');

var InfoTile = require('./components/info-tile/info-tile');
var ProgressBar = require('./components/info-tile/progress-bar');
var StatTile = require('./components/stat-tile');

var CustomBox = require('./components/custom-box/box');

var ChatBox = require('./components/chat-box/chat-box');
var Conversations = require('./components/chat-box/conversations');
var Contacts = require('./components/chat-box/contacts');

var ProfileCard = require('./components/profile-card/profile-card');
var ProfileInfoList = require('./components/profile-card/profile-info-list');
var ProfileInfoBlocks = require('./components/profile-card/profile-info-blocks');

var Post = require('./components/post/post');
var SocialButton = require('./components/post/social-button');
var SocialInfo = require('./components/post/social-info');

var Timeline = require('./components/timeline/timeline');

var commonFunctions = require('./services/common-functions');
console.log(HeaderBar);

exports.HeaderBar = HeaderBar;
exports.NavigationMenu = NavigationMenu;

exports.InfoTile = InfoTile;
exports.ProgressBar = ProgressBar;
exports.StatTile = StatTile;

exports.CustomBox = CustomBox;

exports.ChatBox= ChatBox;
exports.Conversations = Conversations;
exports.Contacts = Contacts;

exports.ProfileCard = ProfileCard;
exports.ProfileInfoList = ProfileInfoList;
exports.ProfileInfoBlocks = ProfileInfoBlocks;

exports.Post = Post;
exports.SocialButton = SocialButton;
exports.SocialInfo = SocialInfo;

exports.Timeline = Timeline;

exports.initialize = commonFunctions.initialize();

//commonFunctions.initialize().bootstrapTooltips("[data-toggle='tooltip']");