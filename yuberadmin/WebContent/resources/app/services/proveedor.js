(function () {
   'use strict';
   angular.module('yuberAdmin').service('proveedorService', ["$http", "$q","CONFIG", proveedorService]);

   function proveedorService($http, $q, CONFIG) {

       var getAll = function(){
           var defer = $q.defer();
    
           $http.get(CONFIG.URL + '/vertical/listarproveedores')
            .success(function (proveedor) {
                defer.resolve(proveedor);
            })
            .error(function(){
                defer.reject('server error')
            });
        
            return defer.promise;
        };
        

       var remove = function(pro){
           var defer = $q.defer();
           $http.post(CONFIG.URL + '/vertical/modificarproveedor',pro)
           .success(function (pro) {
               defer.resolve(pro);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };
      
      var getId = function(id){
           var defer = $q.defer();

           $http.get(CONFIG.URL + '/vertical/obtenerproveedor/'+id)
           .success(function (adm) {
                defer.resolve(adm);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };



       return {
           getAll  : getAll,
           remove  : remove,
           getId   : getId
       }

   }

})();