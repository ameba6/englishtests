Template.taskHome.helpers({

	hideCompleted: function () {
		return Session.get("hideCompleted");
	},
	incompletedCount: function () {
		return Tasks.find({checked: {$ne: true}}).count();
	}
});

Template.taskHome.events({
	"submit .new-task": function (event) {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		var text = event.target.text.value;

		// Insert a task into the collection
		Meteor.call("addTask", text);

		// Clear form
		event.target.text.value = "";
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
	}
});
