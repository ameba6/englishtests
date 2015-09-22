Template.userProfile.events({
	"submit #newProfile": function (event) {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		var name = event.target.name.value;
		var role = event.target.role.value;

		// Insert a task into the collection
		Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.name": name}});
		Roles.addUsersToRoles(Meteor.user(), role);

//
//		// Clear form
//		event.target.text.value = "";
    },
});
