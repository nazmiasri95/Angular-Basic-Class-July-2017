var app = angular.module("starter", ["ngRoute"])
	
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when("/main", {
				templateUrl: 'main.html',
				controller: 'HomeCtrl'
			})

			.when("/about", {
				templateUrl: 'about.html',
				controller: "AboutCtrl"
			})

			.when("/contact", {
				templateUrl: 'contact.html',
				controller: "ContactCtrl"
			})

			.otherwise({redirectTo: '/main'})
	}])

	// Home Controller
	.controller("HomeCtrl", ["$scope", function($scope) {
		console.log("This is Home Controller");

		$scope.input_name = "Abu";

		var i = 1;
		$scope.printToConsole = function () {
			console.log(i);
			i = i + 1;
		}

	}])

	// Contact Controller
	.controller("ContactCtrl", ["$scope", function($scope) {
		console.log("This is Contact Controller");
	}])

	// About Controller
	.controller("AboutCtrl", ["$scope", function($scope) {
		console.log("This is About Controller");
	}])

