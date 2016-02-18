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
				templateUrl: './templates/_trustees.html',
				controller: null
			})