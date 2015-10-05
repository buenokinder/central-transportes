var app = angular.module('DashboardModule', [
    	'ngRoute',
    	'ngResource', 'ngAutocomplete', 'ui.bootstrap', 'ui.bootstrap.datetimepicker','ngMap' ]);
		
		
app.controller('DashboardController', [ '$scope', function($scope){
 

}]);
app.controller('SolicitacaoController', [ '$scope', function($scope){
  var wizardForm = $('.wizard-form');
	wizardForm.validate();
	
	
	$scope.showVooIda = function(){
		$("#modalVooIda").modal('show');
	};
	
	
	
	$scope.showVooVolta = function(){
		$("#modalVooVolta").modal('show');
	};
	$scope.tipodestino = "idavolta";
	$scope.boleanIdaVolta = function (){
		if ($scope.tipodestino == "idavolta")
			return true
			
			return false;
	}
	$scope.logLatLng = function(e) {
          console.log('loc', e.latLng);
        }
	// $scope.wayPoints = [
    //       {location: {lat:44.32384807250689, lng: -78.079833984375}, stopover: true},
    //       {location: {lat:44.55916341529184, lng: -76.17919921875}, stopover: true},
    //     ];
	
	/*Cashing variables*/
	var prevTab = $('.prev-tab');
	var nextTab = $('.next-tab');
	var submitWiz = $('#submit-wizard');
	var tabLink = $('.tab-links > .tab-link');
	var stepLink = $('.progress-bar > .step-link');
	
	/*Steps*/
	stepLink.click(function(){
		stepLink.removeClass('current');
		$(this).addClass('current');
	});
	
	/*Tabs (inside each step)*/
	tabLink.click(function(){
		tabLink.removeClass('active');
		$(this).addClass('active');
		if($(this).index() == 0) {
			prevTab.addClass('hidden');
		} else {
			prevTab.removeClass('hidden');
		}
	});
	
	nextTab.on('click', function (e) {
			moveTab("Next");
			e.preventDefault();
	});
	prevTab.on('click', function (e) {
			moveTab("Previous");
			e.preventDefault();
	});
	
	function moveTab(nextOrPrev) {
			var currentTab = "";
			tabLink.each(function () {
					if ($(this).hasClass('active')) {
							currentTab = $(this);
							return false;
					}
			});
			
			var currentStep = "";
			stepLink.each(function () {
					if ($(this).hasClass('current')) {
							currentStep = $(this);
							return false;
					}
			});
			
			if (nextOrPrev == "Next" && wizardForm.valid() == true) {
					
					if (currentTab.next().length) 
					{
						currentTab.removeClass('active');
						currentTab.next().addClass('active').find('a').trigger('click');
					}
					else {
						if (currentStep.next().length) 
						{
							currentStep.removeClass('current').addClass('complete');
							currentStep.next().addClass('current').trigger('click');
							var curStepId = currentStep.next().attr('href');
							$(curStepId + ' .tab-links>.tab-link:first').addClass('active').find('a').trigger('click');
						} else {
							nextTab.addClass('hidden');
							prevTab.addClass('hidden');
							submitWiz.removeClass('hidden');
						}
					} 
	
			} else if(nextOrPrev == "Previous"){
	
					if (currentTab.prev().length) 
					{
						currentTab.removeClass('active');
						currentTab.prev().addClass('active').find('a').trigger('click');
					}
					else {
					} //do nothing for now 
	
			} else{
				return false;
				}
	}	
  
    $scope.dateTimeNow = function() {
    $scope.date = new Date();
  };
  $scope.dateTimeNow();
  $scope.result = ''
//    $scope.details = ''
    $scope.options = {};

    $scope.form = {
      type: 'geocode',
      bounds: {SWLat: 49, SWLng: -97, NELat: 50, NELng: -96},
      country: 'ca',
      typesEnabled: false,
      boundsEnabled: false,
      componentEnabled: false,
      watchEnter: true
    }

    //watch form for changes
    $scope.watchForm = function () {
      return $scope.form
    };
    $scope.$watch($scope.watchForm, function () {
      $scope.checkForm()
    }, true);


    //set options from form selections
    $scope.checkForm = function() {

      $scope.options = {};

      $scope.options.watchEnter = $scope.form.watchEnter

      if ($scope.form.typesEnabled) {
        $scope.options.types = $scope.form.type
      }
      if ($scope.form.boundsEnabled) {

        var SW = new google.maps.LatLng($scope.form.bounds.SWLat, $scope.form.bounds.SWLng)
        var NE = new google.maps.LatLng($scope.form.bounds.NELat, $scope.form.bounds.NELng)
        var bounds = new google.maps.LatLngBounds(SW, NE);
        $scope.options.bounds = bounds

      }
      if ($scope.form.componentEnabled) {
        $scope.options.country = $scope.form.country
      }
    };

}]);
app.directive('icheck', function($timeout, $parse) {
    return {
        require: 'ngModel',
        link: function($scope, element, $attrs, ngModel) {
            return $timeout(function() {
                var value;
                value = $attrs['value'];

                $scope.$watch($attrs['ngModel'], function(newValue){
                    $(element).iCheck('update');
                })

                return $(element).iCheck({
                    checkboxClass: 'icheckbox',
                    radioClass: 'iradio'

                }).on('ifChanged', function(event) {
                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                        $scope.$apply(function() {
                            return ngModel.$setViewValue(event.target.checked);
                        });
                    }
                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                        return $scope.$apply(function() {
                            return ngModel.$setViewValue(value);
                        });
                    }
                });
            });
        }
    };
});
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
