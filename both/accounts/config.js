//AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

AccountsTemplates.configure({
	// Behavior
	confirmPassword: true,
	enablePasswordChange: true,
	forbidClientAccountCreation: false,
	overrideLoginErrors: true,
	sendVerificationEmail: false,
	lowercaseUsername: false,
	focusFirstInput: true,

	// Appearance
	hideSignUpLink: true,
	showAddRemoveServices: false,
	showForgotPasswordLink: false,
	showLabels: true,
	showPlaceholders: true,
	showResendVerificationEmailLink: false,

	// Redirects
	homeRoutePath: '',
	redirectTimeout: 4000,

	// Hooks
	onLogoutHook: function() {
		console.log('Bye Meteorite! Come back whenever you want!');
		Router.go('home');
	},
	onSubmitHook: function(error, state){
		if (!error) {
			if (state === "signIn") {
				$('#loginModal').modal('hide');
				Router.go(Router.current().path);
			}
			//    if (state === "signUp") {
			//      // Successfully registered
			//      // ...
			//    }
		}
	},
	//	preSignUpHook: myPreSubmitFunc,

	// Texts
	texts:{
		title:{
			signIn: "",
		},
		button:{
			signIn: "Login",
		},
	},
});

//	Accounts.ui.config ({
//		passwordSignupFields: "USERNAME_ONLY"
//	});
