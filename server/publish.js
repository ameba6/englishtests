Meteor.publish('academies', function(){
	return Academies.find();
});