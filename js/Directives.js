angular.module("fivestarApp")
	.directive("navbar", function() {
		return {
			templateUrl: "./templates/_navbar.html"
		}
	})
	.directive("divider", function() {
		return {
			template: "<div class='divider'></div>"
		}
	});