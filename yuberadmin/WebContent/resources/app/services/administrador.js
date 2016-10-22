(function () {
   'use strict';
   angular.module('yuberAdmin').service('administradorService', ["$http", "$q","CONFIG", administradorService]);

   function administradorService($http, $q, CONFIG) {

	   var getAll = function(){
	       var defer = $q.defer();
	
	       $http.get(CONFIG.URL + '/vertical/listaradmins')
			.success(function (empleados) {
				defer.resolve(empleados);
			})
			.error(function(){
				defer.reject('server error')
			});
		
	        return defer.promise;
		};
		
       var add = function(administrador){
           var defer = $q.defer();
           
           $http.post(CONFIG.URL + '/vertical/altaadmin', administrador)
           .success(function (adm) {
               defer.resolve(adm);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };

       var edit = function(administradorModificado){
           var defer = $q.defer();
           $http.post(CONFIG.URL + '/vertical/modificaradmin', administradorModificado)
           .success(function (admin) {
               defer.resolve(admin);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };

       var remove = function(adm){
           var defer = $q.defer();
           $http.post(CONFIG.URL + '/vertical/modificaradmin',adm)
           .success(function (adm) {
               defer.resolve(adm);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };


       var getId = function(id){
           var defer = $q.defer();

           $http.get(CONFIG.URL + '/vertical/obteneradmin/'+id)
           .success(function (adm) {
                defer.resolve(adm);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };
       
       var login = function(usuario){
            var defer = $q.defer();

            $http.post(CONFIG.URL + '/vertical/loginadmin', usuario)
            .success(function (dato) {
                defer.resolve(dato);
            })
            .error(function(){
                defer.reject('server error')
            });

            return defer.promise;
        };

       return {
           getAll  : getAll,
           getId   : getId,
           add     : add,
           remove  : remove,
           edit    : edit,
           login   : login
       }

   }

})();