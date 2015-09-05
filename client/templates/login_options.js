Template.loginOptions.events({
  'click #btnLogin': function(event) {
    event.preventDefault();

    $('#loginModal').modal('show');
  },
		  'click #logout': function(e, t) {
			Meteor.logout(function() {
				console.log('Bye Meteorite! Come back whenever you want!');
			});

			return false;
		}
});

Template.login.events({
    'submit form': function(event){
			event.preventDefault();
			var username = $('[name=username]').val();
			var password = $('[name=password]').val();
			Meteor.loginWithPassword(username, password, function(error){
				if(error){
					console.log(error.reason);
				} else {
					$('#loginModal').modal('hide');
//					Router.go("home");
				}
			});

		},
	'click #btnCancel': function(event){
		event.preventDefault();
		$('#loginModal').modal('hide');
	}
});

