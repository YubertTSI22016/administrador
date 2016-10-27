(function () {
   'use strict';
   angular.module('yuberAdmin').service('reporteService', ["$http", "$q","CONFIG", reporteService]);

   function reporteService($http, $q, CONFIG) {

       var reporteRatingProv = function(){
           var defer = $q.defer();
    
           $http.get(CONFIG.URL + '/vertical/reporteratingprov/1/10/5')
            .success(function (reporte) {
                defer.resolve(reporte);
            })
            .error(function(){
                defer.reject('server error')
            });
        
            return defer.promise;
        };
        
    return {
           reporteRatingProv  : reporteRatingProv,
       }

   }

})();