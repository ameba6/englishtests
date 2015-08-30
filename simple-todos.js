Tasks = new Mongo.Collection("tasks");

// ----------  SERVER SIDE  -------------

if (Meteor.isServer) {
	// this code only runs on the server
	// Only publish tasks that are public or belong to the current user
	Meteor.publish("tasks", function () {
		return Tasks.find({
			$or: [
				{ private: {$ne: true} },
				{ owner: this.userId}
			]
		});
	});
}

// ----------  CLIENT SIDE  -------------

if (Meteor.isClient) {
	// This code only runs on the clint
	Meteor.subscribe("tasks");

  Template.body.helpers({
		hideCompleted: function () {
			return Session.get("hideCOmpleted");
		},
		incompletedCount: function () {
			return Tasks.find({checked: {$ne: true}}).count();
		}
  });

  Template.body.events({
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
			Session.set("hideCompleted", event.target.checked)
		}
  });

	Accounts.ui.config ({
		passwordSignupFields: "USERNAME_ONLY"
	});
}


Meteor.methods({
	addTask: function (text) {
		// Make sure the user is logged in before inserting a task
		if (!Meteor.userId()) {
			throw new Meteor.Error ("not-authorized");
		}
		Tasks.insert ({
			text: text,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user().username
		});
	},
	deleteTask: function (taskId) {
		var task = Tasks.findOne(taskId);
		if (task.private && task.owner !== Meteor.userId()) {
			// if the task is private, make sure only owner can delete it
			throw new Meteor.Error("not-authorized");
		}

		Tasks.remove(taskId);
	},
	setChecked: function (taskId, setChecked) {
		var task = Tasks.findOne(taskId);
		if (task.private && task.owner !== Meteor.userId()) {
			// if the task is private, make sure only owner can check it off
			throw new Meteor.Error("not-authorized");
		}

		Tasks.update(taskId, {$set: {checked: setChecked}});
	},
	setPrivate: function (taskId, setToPrivate) {
		var task = Tasks.findOne (taskId);

		// Make sure inly the task owner can make a task private
		if (task.owner !== Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		Tasks.update(taskId, {$set: {private: setToPrivate} })
	}
});
