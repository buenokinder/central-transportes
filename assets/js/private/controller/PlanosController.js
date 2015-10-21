app.controller('PlanosController', ['$scope', '$http', function($scope, $http) {
	$scope.planos = [];
	$scope.plano = [];

	$scope.timesheetForm = {
		loading: false
	}
	
	$scope.init = function() {
		$http.get("planos").then(function(results) {
			$scope.planos = angular.fromJson(results.data);
		});
		console.log($scope.planos);
	}

	$scope.gravar = function() {
		$http.post('/planos', {
			nome: $scope.plano.nome,
			preco: $scope.plano.preco,
		}).then(function onSuccess(sailsResponse){
			window.location = '/planos';
		}).catch(function onError(sailsResponse){

		}).finally(function eitherWay(){
			$scope.timesheetForm.loading = false;
		})
  };
}]);

app.controller('PlanosUpdateController', ['$scope', '$http', function($scope, $http) {

}])