import { Meteor } from 'meteor/meteor';


export const appConfig = {
	appName: Meteor.settings.public.config.appName,
	supportEmail: Meteor.settings.public.config.supportEmail,
	supportName: Meteor.settings.public.config.supportName,
};

export const PRODUCTION_URL = 'https://junkbook.meteorapp.com';
export const DEFAULT_AVATAR = '/avatar.png';
export const DEFAULT_POST_IMAGE = 'http://www.dormirsinllorar.com/wp-content/plugins/wp-posts-carousel/images/placeholder.png' //http://www.freeiconspng.com/uploads/no-image-icon-13.png';


