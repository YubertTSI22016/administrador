(function () {
   'use strict';
   angular.module('yuberAdmin').service('clienteService', ["$http", "$q","CONFIG", clienteService]);

   function clienteService($http, $q, CONFIG) {

       var getAll = function(){
           var defer = $q.defer();
    
           $http.get(CONFIG.URL + '/vertical/listarusuarios')
            .success(function (clientes) {
                defer.resolve(clientes);
            })
            .error(function(){
                defer.reject('server error')
            });
        
            return defer.promise;
        };
        

       var remove = function(cli){
           var defer = $q.defer();
           $http.post(CONFIG.URL + '/vertical/modificarusuario',cli)
           .success(function (cli) {
               defer.resolve(cli);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };




       return {
           getAll  : getAll,
           remove  : remove,
       }

   }

})();