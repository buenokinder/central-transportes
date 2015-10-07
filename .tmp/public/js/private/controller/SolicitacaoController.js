app.controller('SolicitacaoController', [ '$scope', 'ciaAereaService','itemFinanceiroService','centralTransporteService', function($scope,ciaAereaService,itemFinanceiroService,centralTransporteService){
  	var wizardForm = $('.wizard-form');
	wizardForm.validate();
	$scope.ciaaereas = [];
	
	$scope.init = function(){
		ciaAereaService.getCiaAerea(callbackCiaAerea);
		centralTransporteService.getCentralTransporte(callbackCentralTransporte);
		itemFinanceiroService.getItemFinanceiro(callbackItemFinanceiro);
	};
	
	   
   function callbackItemFinanceiro(result, status) {
        if (status == null)            
           $scope.itemfinanceiros  = angular.fromJson(result);
        else
            $scope.alertNotification('Ocorreu um erro ao buscar a listagem de sistemas no banco de dados. Tente novamente mais tarde.', 'danger');
    }
	
	function callbackCentralTransporte(result, status) {
        if (status == null)            
           $scope.centraltransportes  = angular.fromJson(result);
        else
            $scope.alertNotification('Ocorreu um erro ao buscar a listagem de sistemas no banco de dados. Tente novamente mais tarde.', 'danger');
    }
	
	
    function callbackCiaAerea(result, status) {
        if (status == null)            
           $scope.ciaaereas  = angular.fromJson(result);
        else
            $scope.alertNotification('Ocorreu um erro ao buscar a listagem de sistemas no banco de dados. Tente novamente mais tarde.', 'danger');
    }
	
	$scope.showVooIda = function(){
		$("#modalVooIda").modal('show');
	};
	
	 $scope.centrocustos = [];

        // gives another movie array on change
        $scope.updateCentrocusto = function(typed){
            // MovieRetriever could be some service returning a promise
            $scope.newcentrocustos = MovieRetriever.getmovies(typed);
            $scope.newcentrocustos.then(function(data){
              $scope.centrocustos = data;
            });
        }
		
	
	
	
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
    };

	var prevTab = $('.prev-tab');
	var nextTab = $('.next-tab');
	var submitWiz = $('#submit-wizard');
	var tabLink = $('.tab-links > .tab-link');
	var stepLink = $('.progress-bar > .step-link');

	stepLink.click(function(){
		stepLink.removeClass('current');
		$(this).addClass('current');
	});
	
	
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
					} 
	
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