angular.module("fivestarApp", ["firebase", "ui.router", "ngAnimate", "ngMaterial"])
	.config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('basic', {
				url: '/',
				templateUrl: './templates/_basic.html',
				controller: null
			})
			.state('children', {
				url: '/children',
				templateUrl: './templates/_children.html',
				controller: null
			})
			.state('trustees', {
				url: '/trustees',
				templateUrl: './templates/_trustees.html',
				controller: null
			})
			.state('beneficiaries', {
				url: '/beneficiaries',
				templateUrl: './templates/_beneficiaries.html',
				controller: null
			})
			.state('special', {
				url: '/special',
				templateUrl: './templates/_special.html',
				controller: null
			})
			.state('power', {
				url: '/power',
				templateUrl: './templates/_power.html',
				controller: null
			})
			.state('healthcare', {
				url: '/healthcare',
				templateUrl: './templates/_healthcare.html',
				controller: null
			})
			.state('property', {
				url: '/property',
				templateUrl: './templates/property.html',
				controller: null
			})
			.state('review', {
				url: '/review',
				templateUrl: './templates/_review.html',
				controller: null
			});
	}]);