app.config(['$routeProvider',  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/dashboard.html',
      controller : 'DashboardController'
    });

    $routeProvider.when('/solicitacao', {
        templateUrl: '/views/solicitacao/new.html',
        controller : 'SolicitacaoController'
    });


    $routeProvider.when("/usuario", {
			templateUrl: "/views/usuario/grid.html"
		}).when("/usuario/new", {		
		  templateUrl: "/views/usuario/form.html"
		}).when("/usuario/:id", {		
		  templateUrl: "/views/usuario/form-edit.html"
		});
   
   
   $routeProvider.when("/veiculo", {
			templateUrl: "/views/veiculo/index.html"
		}).when("/veiculo/new", {		
		  templateUrl: "/views/veiculo/new.html"
		}).when("/usuario/:id", {		
		  templateUrl: "/views/usuario/edit.html"
		});
    
     $routeProvider.when("/motorista", {
			templateUrl: "/views/motorista/index.html"
		}).when("/motorista/new", {		
		  templateUrl: "/views/motorista/new.html"
		}).when("/motorista/:id", {		
		  templateUrl: "/views/motorista/edit.html"
		});
    
    
    
     $routeProvider.when("/endereco", {
			templateUrl: "/views/endereco/index.html"
		}).when("/endereco/new", {		
		  templateUrl: "/views/endereco/new.html"
		}).when("/endereco/:id", {		
		  templateUrl: "/views/endereco/edit.html"
		});
    
     
     $routeProvider.when("/ciaaerea", {
			templateUrl: "/views/ciaaerea/index.html"
		}).when("/ciaaerea/new", {		
		  templateUrl: "/views/ciaaerea/new.html"
		}).when("/ciaaerea/:id", {		
		  templateUrl: "/views/ciaaerea/edit.html"
		});
    
    
      
     $routeProvider.when("/centrocusto", {
			templateUrl: "/views/centrocusto/index.html"
		}).when("/centrocusto/new", {		
		  templateUrl: "/views/centrocusto/new.html"
		}).when("/centrocusto/:id", {		
		  templateUrl: "/views/centrocusto/edit.html"
		});
    
    
      
     $routeProvider.when("/centraltransportes", {
			templateUrl: "/views/centraltransportes/index.html"
		}).when("/centraltransportes/new", {		
		  templateUrl: "/views/centraltransportes/new.html"
		}).when("/centraltransportes/:id", {		
		  templateUrl: "/views/centraltransportes/edit.html"
		});
    
    
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    //$locationProvider.html5Mode(true);

  }]);