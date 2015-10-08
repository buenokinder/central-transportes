app.controller('MotoristaController', ['$scope', '$http', function($scope, $http){
  $scope.motoristas = [];
  $scope.veiculo = [];
  $scope.veiculos = [];
  $scope.empresas = [];
  $scope.empresa = [];
	$scope.timesheetForm = {
		loading: false
	}

  $scope.init = function(){
    console.log("entrei");
    $http.get("motorista").then(function(results) {
      $scope.motoristas = angular.fromJson(results.data);
    });
    $http.get("empresa").then(function(results) {
      $scope.empresas = angular.fromJson(results.data);
    });
    $http.get("veiculo").then(function(results) {
      $scope.veiculos = angular.fromJson(results.data);
    });
  };

  $scope.gravar = function(){

      // Set the loading state (i.e. show loading spinner)
		$scope.timesheetForm.loading = true;

		// Submit request to Sails.
		$http.post('/motorista', {
			nome: $scope.motorista.nome,
			telefone: $scope.motorista.telefone,
			email: $scope.motorista.email,
      vehicle: $scope.veiculo,
      empresa: $scope.empresa
		})
		.then(function onSuccess(sailsResponse){
			window.location = '/#/motorista';
		})
		.catch(function onError(sailsResponse){

		

		})
		.finally(function eitherWay(){
			$scope.timesheetForm.loading = false;
		})
  };
  

}]);

app.controller('MotoristaUpdateController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.motoristas = [];
  $scope.veiculos = [];
  $scope.empresas = [];
  $scope.timesheetForm = {
    loading: false
  }

  $scope.update = function() {
      // Submit request to Sails.
    $http.put('/motorista/' + $routeParams.id + '?nome='+ $scope.motorista.nome + '&telefone=' + $scope.motorista.telefone + '&email=' + $scope.motorista.email +  '&vehicle=' + $scope.motorista.vehicle.id + '&empresa=' + $scope.motorista.empresa.id)
    .then(function onSuccess(sailsResponse){
      window.location = '/#/motorista';
    })
    .catch(function onError(sailsResponse){

    

    })
    .finally(function eitherWay(){
      $scope.timesheetForm.loading = false;
    })
  };

  $http.get("/motorista/" + $routeParams.id).then(function(results) {
    $scope.motorista = angular.fromJson(results.data);
  });

  $http.get("veiculo").then(function(results) {
    $scope.veiculos = angular.fromJson(results.data);
  });

  $http.get("empresa").then(function(results) {
    $scope.empresas = angular.fromJson(results.data);
  });
}]);