(function () {
    'use strict';
    angular.module('yuberAdmin').service('configuracionService', ["$http", "$q", "CONFIG", configuracionService]);

    function configuracionService($http, $q, CONFIG) {

        var getInfo = function(){
           var defer = $q.defer();
    
           $http.get(CONFIG.URL + '/vertical/obtenerconfig')
            .success(function (tenantInfo) {
                defer.resolve(tenantInfo);
            })
            .error(function(){
                defer.reject('server error')
            });
        
            return defer.promise;
        };

        var createTenant = function(nuevoTenant){
           var defer = $q.defer();
    
           $http.post(CONFIG.URL + '/vertical/crearconfig', nuevoTenant)
            .success(function (tenantInfo) {
                defer.resolve(tenantInfo);
            })
            .error(function(){
                defer.reject('server error')
            });
        
            return defer.promise;
        };

        var save = function(nuevaConf){

           var defer = $q.defer();
           
           $http.post(CONFIG.URL + '/vertical/modificarconfig', nuevaConf)
           .success(function (adm) {
               defer.resolve(adm);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };

           
        return {
            createTenant : createTenant,
            save : save,
            getInfo : getInfo
        }

    }

})();