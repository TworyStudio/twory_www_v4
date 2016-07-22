import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Pages = new Mongo.Collection('pages');

if (Meteor.isServer) {
	Meteor.publish('pages',
		function pagesPublication() {
			return Pages.find();
		});
}

Meteor.methods({
	'pages.insert'(page) {
		check(page, String);
		Pages.insert({
			title: page,
			createdAt: new Date(),
//			owner: this.userId,
//			username: Meteor.users.findOne(this.userId).username,
		});
	},

	'pages.isEmpty'() {
		return Pages.find().count();
	}
});