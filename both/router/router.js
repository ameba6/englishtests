Router.configure({
	layoutTemplate: 'appLayout'
});

Router.route('/', {
	name: 'home',
	template: 'home'
});
Router.route('/tasks', {
	name: 'tasks',
	template: 'taskHome'
});
Router.route('/register');
Router.route('/profile', {
	name: 'userProfile',
	template: 'userProfile'
});
