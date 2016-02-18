angular.module("fivestarApp")
	.controller("ctMain", ["$scope", "$mdSidenav", function($scope, $mdSidenav) {
		$scope.works = "It Works";

		$scope.openLeftMenu = function(init) {
			if(init == "open") {
				$mdSidenav('left').toggle();
			} else if (init == "close"){
				$mdSidenav('left').close();
			}
		};
	}]);