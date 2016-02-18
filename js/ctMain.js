angular.module("fivestarApp")
	.controller("ctMain", ["$scope", "$mdSidenav", function($scope, $mdSidenav) {
		$scope.works = "It Works";

		$scope.openLeftMenu = function() {
			$mdSidenav('left').toggle();
		};
	}]);