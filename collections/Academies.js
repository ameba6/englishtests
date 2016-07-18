Academies = new Mongo.Collection('academies');

Academies.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
			return !!userId;
	}
});

SocialLink = new SimpleSchema({
	name: {
		type: String
	},
	faIcon: {
		type: String
	},
	url: {
		type: String
	},
	inUse: {
		type: Boolean
	}
});

AcademiesSchema = new SimpleSchema({
	name: {
		type: String,
		label:"Name"
	},
	logo: {
		type: String,
		label:"Logo"
	},
	socialLinks: {
		type: [SocialLink]
	}
});

Academies.attachSchema( AcademiesSchema );