angular.module("fivestarApp")
	.controller("ctMain", ["$scope", "$mdSidenav", function($scope, $mdSidenav) {
		$scope.works = "It Works";

		$scope.openLeftMenu = function(init) {
			if(init == "open") {
				$mdSidenav('left').toggle();
			} else if(init == "close") {
				$mdSidenav('left').close();
			}
		};

		$scope.basic = {
			choice: "individual",
			individualShow: true,
			coupleShow: false,
			nameOfTrust: null,
			your: {
				fullName: null,
				dob: null,
				phone: null,
				email: null
			},
			husband: {
				fullName: null,
				dob: null,
				phone: null,
				email: null
			},
			wife: {
				fullName: null,
				dob: null,
				phone: null,
				email: null
			},
			address: null,
			city: null,
			county: null,
			state: null,
			zip: null
		};
		$scope.basicChoice = function (init) {
			$scope.basic.choice = init;
			if(init == "individual") {
				$scope.basic.coupleShow = false;
				$scope.basic.individualShow = true;
			} else if(init == "couple") {
				$scope.basic.individualShow = false;
				$scope.basic.coupleShow = true;
			}
		}
	}]);