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

		$scope.childGrabber = function () {
			var currentChildren = $scope.children.currentChildren,
				husbandChildren = $scope.children.husbandChildren,
				wifeChildren = $scope.children.wifeChildren,
				splitedChilds = [];

			var concater = function(data) {
				Object.getOwnPropertyNames(data).forEach(function(val) {
					var child = data[val];
					splitedChilds.push(child);
				});
			};

			concater(currentChildren);
			concater(husbandChildren);
			concater(wifeChildren);
			$scope.concatChildren = splitedChilds;
		};
		//Basic Template
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
			homeAddress: {
				address: null,
				city: null,
				county: null,
				state: null,
				zip: null
			},
			mailingAddress: {
				sameAs: true,
				address: null,
				city: null,
				county: null,
				state: null,
				zip: null
			}
		};
		$scope.basicChoice = function(init) {
			$scope.basic.choice = init;
			if(init == "individual") {
				$scope.basic.coupleShow = false;
				$scope.basic.individualShow = true;
			} else if(init == "couple") {
				$scope.basic.individualShow = false;
				$scope.basic.coupleShow = true;
			}
		};
		//End of Basic

		//Children Template
		$scope.children = {
			choice: {
				currentChildren: "no",
				futureChildren: "no",
				husbandChildren: "no",
				wifeChildren: "no"
			},
			currentChildren: {
				1: {
					name: null,
					dob: null
				}
			},
			husbandChildren: {
				2: {
					name: null,
					dob: null
				}
			},
			wifeChildren: {
				3: {
					name: null,
					dob: null
				}
			},
			childAmount: 3,
			currentChildrenShow: false,
			futureChildrenShow: false,
			husbandChildrenShow: false,
			wifeChildrenShow: false
		};
		$scope.currentChildrenChoice = function(init) {
			$scope.children.choice.currentChildren = init;
			if(init == "yes") {
				$scope.children.currentChildrenShow = true;
			} else {
				$scope.children.currentChildrenShow = false;
			}
		};
		$scope.futureChildrenChoice = function(init) {
			$scope.children.choice.futureChildren = init;
			if(init == "yes") {
				$scope.children.futureChildrenShow = true;
			} else {
				$scope.children.futureChildrenShow = false;
			}
		};
		$scope.husbandChildrenChoice = function(init) {
			$scope.children.choice.husbandChildren = init;
			if(init == "yes") {
				$scope.children.husbandChildrenShow = true;
			} else {
				$scope.children.husbandChildrenShow = false;
			}
		};
		$scope.wifeChildrenChoice = function(init) {
			$scope.children.choice.wifeChildren = init;
			if(init == "yes") {
				$scope.children.wifeChildrenShow = true;
			} else {
				$scope.children.wifeChildrenShow = false;
			}
		};
		$scope.addnewChild = function(init) {
			$scope.children.childAmount++;
			console.warn($scope.children.childAmount);
			var childrenAmount = $scope.children.childAmount;
			$scope.children[init + 'Children'][childrenAmount] = {
				name: null,
				dob: null
			};
			console.warn($scope.children);
		};
		//End of Children

		//Trustees Template
		$scope.trustees = {
			coTrustees: false,
			coGuardians: false
		};
		//End of Trustees

		//Beneficiaries Template
		$scope.beneficiaries = {
			choice: {
				split: "equally",
				age: "none"
			},
			percentageShow: false,
			oneShow: false,
			twoShow: false,
			threeShow: false
		};
		$scope.splitChoice = function(init) {
			if(init == "equally") {
				$scope.beneficiaries.percentageShow = false;
			} else {
				$scope.beneficiaries.percentageShow = true;
				$scope.childGrabber();
			}
		};
		$scope.ageChoice = function(init) {
			if(init == "one") {
				$scope.beneficiaries.threeShow = false;
				$scope.beneficiaries.twoShow = false;
				$scope.beneficiaries.oneShow = true;
			} else if(init == "two") {
				$scope.beneficiaries.oneShow = false;
				$scope.beneficiaries.threeShow = false;
				$scope.beneficiaries.twoShow = true;
			} else if(init == "three") {
				$scope.beneficiaries.oneShow = false;
				$scope.beneficiaries.twoShow = false;
				$scope.beneficiaries.threeShow = true;
			} else {
				$scope.beneficiaries.oneShow = false;
				$scope.beneficiaries.twoShow = false;
				$scope.beneficiaries.threeShow = false;
			}
		};
		//End of Beneficiaries Template
	}]);