angular.module("fivestarApp")
	.controller("ctMain", ["$scope", "$mdSidenav", function($scope, $mdSidenav) {

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
					if(child.name && child.dob) {
						splitedChilds.push(child);
					}
				});
			};

			concater(currentChildren);
			concater(husbandChildren);
			concater(wifeChildren);
			$scope.concatChildren = splitedChilds;
			console.log($scope.special.specialChips);
			console.log($scope.special.excludedChips);
		};
		//Basic Template
		$scope.basic = {
			choice: "couple",
			individualShow: false,
			coupleShow: true,
			dataShow: false,
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
			$scope.basic.dataShow = true;
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
					name: "gabe",
					dob: "04/26/1997"
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
			childrenPercentage: {

			},
			beneficiaries: {

			},
			ageChoiceOne: {
				first: null
			},
			ageChoiceTwo: {
				first: null,
				second: null
			},
			ageChoiceThree: {
				first: null,
				second: null,
				third: null
			},
			beneficiariesAmount: 0,
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
		$scope.beneficiariesAgeChoice = function(init) {
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
		$scope.addnewBeneficiaries = function(init) {
			$scope.beneficiaries.beneficiariesAmount++;
			console.warn($scope.beneficiaries.beneficiariesAmount);
			var beneficiariesAmount = $scope.beneficiaries.beneficiariesAmount;
			$scope.beneficiaries.beneficiaries[beneficiariesAmount] = {
				name: null,
				percentage: null
			};
			console.warn($scope.beneficiaries);
		};
		//End of Beneficiaries Template

		//Special Template
		$scope.special = {
			choice: {
				inheritance: "yes",
				age: "none",
				special: "no",
				exclude: "no"
			},
			ageChoiceOne: {
				first: null
			},
			ageChoiceTwo: {
				first: null,
				second: null
			},
			ageChoiceThree: {
				first: null,
				second: null,
				third: null
			},
			specialChips: [

			],
			excludeChips : [

			],
			inheritanceShow: true,
			percentageShow: false,
			oneShow: false,
			twoShow: false,
			threeShow: false,
			specialNeedsShow: false,
			excludeShow: false
		};
		$scope.specialAgeChoice = function(init) {
			if(init == "one") {
				$scope.special.threeShow = false;
				$scope.special.twoShow = false;
				$scope.special.oneShow = true;
			} else if(init == "two") {
				$scope.special.oneShow = false;
				$scope.special.threeShow = false;
				$scope.special.twoShow = true;
			} else if(init == "three") {
				$scope.special.oneShow = false;
				$scope.special.twoShow = false;
				$scope.special.threeShow = true;
			} else {
				$scope.special.oneShow = false;
				$scope.special.twoShow = false;
				$scope.special.threeShow = false;
			}
		};
		$scope.specialNeedsChoice = function(init) {
			if(init == "yes") {
				$scope.special.specialNeedsShow = true;
			} else {
				$scope.special.specialNeedsShow = false;
			}
		};
		$scope.specialExcludeChoice = function(init) {
			if(init == "yes") {
				$scope.special.excludeShow = true;
			} else {
				$scope.special.excludeShow = false;
			}
		};
		$scope.inheritanceChoice = function(init) {
			if(init == "yes") {
				$scope.special.inheritanceShow = true;
			} else {
				$scope.special.inheritanceShow = false;
			}
		};
		//End of Special Template

		//Power Template
		$scope.power = {
			choice: {
				husbandPrimaryAgent: "yes",
				wifePrimaryAgent: "yes"
			},
			individual: {
				coAgents: false
			},
			couple: {
				husband: {
					coAgents: false
				},
				wife: {
					coAgents: false
				}
			},
			husbandPrimaryAgentShow: true,
			altHusbandPrimaryAgentShow: false,
			wifePrimaryAgentShow: true,
			altWifePrimaryAgentShow: false
		};
		$scope.powerHusbandPrimaryAgent = function (init) {
			$scope.power.choice.husbandPrimaryAgent = init;
			if(init == "yes") {
				$scope.power.husbandPrimaryAgentShow = true;
				$scope.power.altHusbandPrimaryAgentShow = false;
			} else {
				$scope.power.husbandPrimaryAgentShow = false;
				$scope.power.altHusbandPrimaryAgentShow = true;
			}
		};
		$scope.powerWifePrimaryAgent = function (init) {
			$scope.power.choice.wifePrimaryAgent = init;
			if(init == "yes") {
				$scope.power.wifePrimaryAgentShow = true;
				$scope.power.altWifePrimaryAgentShow = false;
			} else {
				$scope.power.wifePrimaryAgentShow = false;
				$scope.power.altWifePrimaryAgentShow = true;
			}
		};
		//End of Power Template

		//Healthcare Template
		$scope.healthcare = {
			choice: {
				husbandPrimaryAgent: "yes",
				wifePrimaryAgent: "yes"
			},
			individual: {
				coAgents: false
			},
			couple: {
				husband: {
					coAgents: false
				},
				wife: {
					coAgents: false
				}
			},
			husbandPrimaryAgentShow: true,
			altHusbandPrimaryAgentShow: false,
			wifePrimaryAgentShow: true,
			altWifePrimaryAgentShow: false
		};
		$scope.healthcareHusbandPrimaryAgent = function (init) {
			$scope.healthcare.choice.husbandPrimaryAgent = init;
			if(init == "yes") {
				$scope.healthcare.husbandPrimaryAgentShow = true;
				$scope.healthcare.altHusbandPrimaryAgentShow = false;
			} else {
				$scope.healthcare.husbandPrimaryAgentShow = false;
				$scope.healthcare.altHusbandPrimaryAgentShow = true;
			}
		};
		$scope.healthcareWifePrimaryAgent = function (init) {
			$scope.healthcare.choice.wifePrimaryAgent = init;
			if(init == "yes") {
				$scope.healthcare.wifePrimaryAgentShow = true;
				$scope.healthcare.altWifePrimaryAgentShow = false;
			} else {
				$scope.healthcare.wifePrimaryAgentShow = false;
				$scope.healthcare.altWifePrimaryAgentShow = true;
			}
		};
		//End of Healthcare Template

		//Property Template
		$scope.property = {
			choice: {
				prepareDeed: "no",
				otherRealEstate: "no",
				business: "no"
			},
			estate: {

			},
			business: {

			},
			estateAmount: 0,
			businessAmount: 0,
			prepareDeedShow: false,
			otherRealEstateShow: false,
			businessShow: false
		};
		$scope.prepareDeedChoice = function(init) {
			if(init == "yes") {
				$scope.property.prepareDeedShow = true;
			} else {
				$scope.property.prepareDeedShow = false;
			}
		};
		$scope.otherRealEstateChoice = function(init) {
			if(init == "yes") {
				$scope.property.otherRealEstateShow = true;
			} else {
				$scope.property.otherRealEstateShow = false;
			}
		};
		$scope.propertyBusinessChoice = function(init) {
			if(init == "yes") {
				$scope.property.businessShow = true;
			} else {
				$scope.property.businessShow = false;
			}
		};
		$scope.addnewProperty = function(init) {
			$scope.property[init + 'Amount']++;
			console.warn($scope.property[init + 'Amount']);
			var amount = $scope.property[init + 'Amount'];
			$scope.property[init][amount] = {
				name: null,
				percentage: null
			};
			console.warn($scope.property);
		};
		//End of Property Template
	}]);