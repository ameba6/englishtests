import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
	if (Academies.find().count() < 1) {
		Academies.insert({
			name: "Cambridge",
			logo: "Cambridge.png",
			socialLinks: [
				{	name: "facebook",
					faIcon: "fa-facebook",
					url: "https://www.facebook.com/CambridgeEnglish",
					inUse: true}
			]}, function(error, result) {
						console.log("Inserted default Academy");
					//The insert will fail, error will be set,
					//and result will be undefined or false because "copies" is required.
					//
					//The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
				}
		);} else {console.log("At least one Academy");}

	if (Academies.find().count() < 2) {
		Academies.insert({
			name: "Tress",
			logo: "Cambridge.png",
			socialLinks: [
				{	name: "facebook",
					faIcon: "fa-facebook",
					url: "https://www.facebook.com/CambridgeEnglish",
					inUse: true},
				{	name:"twitter",
					faIcon: "fa-twitter",
					url: "https://twitter.com/CambridgeEng",
					inUse: true}
			]}, function(error, result) {
						console.log("Inserted default Academy");
					//The insert will fail, error will be set,
					//and result will be undefined or false because "copies" is required.
					//
					//The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
				}
		);} else {console.log("At least one Academy");}	
});
