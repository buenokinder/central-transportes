var app = angular.module('DashboardModule', [
    	'ngRoute',
    	'ngResource' ]);
		
		
app.controller('DashboardController', [ '$scope', function($scope){
 

}]);
app.controller('SolicitacaoController', [ '$scope', function($scope){
 

}]);

app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/dashboard.html',
      controller : 'DashboardController'
    });

    $routeProvider.when('/solicitacao', {
        templateUrl: '/views/solicitacao/new.html',
        controller : 'SolicitacaoController'
    });

   
    
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    //$locationProvider.html5Mode(true);

  }]);
