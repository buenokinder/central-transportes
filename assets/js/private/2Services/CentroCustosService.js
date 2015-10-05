'use strict';
app.factory('centroCustoService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var centroCustoFactory = {};

    
    
   var _getCentroCusto = function (pesquisa,callback) {
        $http.get(serviceBase + 'centrocusto ?where={"nome":{"contains":"' +  pesquisa +'"}}').success(function (response) {
            callback(response, null);
        }).error(function (err, status) {
            callback(err, status);
        });
    };
    centroCustoFactory.getCentroCusto = _getCentroCusto;
    
    return centroCustoFactory;

}]);