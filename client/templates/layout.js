Template.main.helpers({

	incompletedCount: function () {
		return Tasks.find({checked: {$ne: true}}).count();
	}
});
