import { Email } from 'meteor/email';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Random } from 'meteor/random';
import { appConfig } from '/imports/modules/config';




// ================================================
//	ADD INVITATION TO DB
// ================================================
export const addInvitation = (userId, modelType, ownerId) => {
	check(userId, String);
	check(ownerId, String);
	return
};