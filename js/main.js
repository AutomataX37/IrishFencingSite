var myApp = angular.module('myApp', []);

myApp.factory('Rankings', function ($http){

	var Rankings = {};
	

		$http.get('assets/json/ME.json').success(function(data) 
		{
		  Rankings.results = data;
  		});
	
	
	
	

	return Rankings;

})


function RankingsCtrl($scope, Rankings){
	$scope.rankings = Rankings;
}