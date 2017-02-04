angular.module('app',[])
.controller('appCtrl',['$scope','$http',function($scope,$http){
	console.log("Hello from the controller");
	var refresh = function(){
	$http({method:'GET',url:'/contactList'}).then(function(success){
		$scope.contactList= success.data;
	},function(error){
		console.log(error);
	});
}
refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactList', $scope.contact).then(function(success){
			console.log(success.data);
			$scope.contact = "";
			refresh();
		},function(error){
			console.log(error);
		});
	}

	$scope.remove = function(id){
		console.log('---->'+id);
		$http.delete('/contactList/'+id).then(function(success){
			refresh();

		},function(error){

		});
	};
}]);