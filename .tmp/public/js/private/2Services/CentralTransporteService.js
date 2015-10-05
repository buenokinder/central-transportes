'use strict';
app.factory('centralTransporteService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var centralTransporteFactory = {};

    
    
   var _getCentralTransporte = function (callback) {
        $http.get(serviceBase + 'centraltransporte').success(function (response) {
            callback(response, null);
        }).error(function (err, status) {
            callback(err, status);
        });
    };
    centralTransporteFactory.getCentralTransporte = _getCentralTransporte;
    
    return centralTransporteFactory;

}]);