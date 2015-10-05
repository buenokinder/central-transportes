'use strict';
app.factory('itemFinanceiroService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var itemFinanceiroServiceFactory = {};

    
    
   var _getItemFinanceiro = function (callback) {
        $http.get(serviceBase + 'itemfinanceiro').success(function (response) {
            callback(response, null);
        }).error(function (err, status) {
            callback(err, status);
        });
    };
    itemFinanceiroServiceFactory.getItemFinanceiro = _getItemFinanceiro;
    
    return itemFinanceiroServiceFactory;

}]);