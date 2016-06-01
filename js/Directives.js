angular.module("fivestarApp")
	.directive("navbar", function() {
		return {
			template: require("../templates/_navbar.html")
		}
	})
	.directive("divider", function() {
		return {
			template: "<div class='divider'></div>"
		}
	});