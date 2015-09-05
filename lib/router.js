Router.configure({
	layoutTemplate: 'main'
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
