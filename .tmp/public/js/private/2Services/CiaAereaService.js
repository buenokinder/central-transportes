'use strict';
app.factory('ciaAereaService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var ciaAereaServiceFactory = {};

    
    
   var _getCiaAerea = function (callback) {
        $http.get(serviceBase + 'ciaaerea').success(function (response) {
            callback(response, null);
        }).error(function (err, status) {
            callback(err, status);
        });
    };
    ciaAereaServiceFactory.getCiaAerea = _getCiaAerea;
    
    return ciaAereaServiceFactory;

}]);