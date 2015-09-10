Template.loginOptions.events({
  'click #btnLogin': function(event) {
    event.preventDefault();

    $('#loginModal').modal('show');
  },
		  'click #logout': function(e, t) {
			AccountsTemplates.logout();
//				Router.go('home');

			return false;
		}
});

Template.login.events({
//    'submit form': function(event){
//			event.preventDefault();
//			var username = $('[name=username]').val();
//			var password = $('[name=password]').val();
//			Meteor.loginWithPassword(username, password, function(error){
//				if(AccountsTemplates.getState()==='signIn'){
//					console.log(Meteor.user().emails[0].address);
//				} else {
//					$('#loginModal').modal('hide');
//					Router.go("home");
//				}
//			});

//		},
	'click #btnCancel': function(event){
		event.preventDefault();
		$('#loginModal').modal('hide');
	},
	'click #btnRegister': function(event){
//		event.preventDefault();
		$('#loginModal').modal('hide');
	}

});

