angular.module("fivestarApp", ["firebase", "ui.router", "ngAnimate", "ngMaterial"])
	.constant("FIRE", {
		url: "https://lasermarketinggroup.firebaseio.com/lmgApp/"
	})
	.config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('basic', {
				url: '/',
				template: require('../templates/_basic.html'),
				controller: null
			})
			.state('children', {
				url: '/children',
				template: require('../templates/_children.html'),
				controller: null
			})
			.state('trustees', {
				url: '/trustees',
				template: require('../templates/_trustees.html'),
				controller: null
			})
			.state('beneficiaries', {
				url: '/beneficiaries',
				template: require('../templates/_beneficiaries.html'),
				controller: null
			})
			.state('special', {
				url: '/special',
				template: require('../templates/_special.html'),
				controller: null
			})
			.state('power', {
				url: '/power',
				template: require('../templates/_power.html'),
				controller: null
			})
			.state('healthcare', {
				url: '/healthcare',
				template: require('../templates/_healthcare.html'),
				controller: null
			})
			.state('property', {
				url: '/property',
				template: require('../templates/_property.html'),
				controller: null
			})
			.state('review', {
				url: '/review',
				template: require('../templates/_review.html'),
				controller: null
			});
	}])
	.config(['$compileProvider', function ($compileProvider) {
		$compileProvider.debugInfoEnabled(false);
	}]);