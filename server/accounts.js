Accounts.onLogin(function(user) {
	var user = user.user;
	if (!user.roles){
		Roles.addUsersToRoles(user, ['student'])
	};
})
