(function () {
   'use strict';
   angular.module('yuberAdmin').service('administradorService', ["$http", "$q","CONFIG", administradorService]);

   function administradorService($http, $q, CONFIG) {

	   var getAll = function(){
	       var defer = $q.defer();
	
	       $http.get(CONFIG.URL + '/admins/listar')
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
           
           $http.post(CONFIG.URL + '/admins/alta', administrador)
           .success(function (adm) {
               defer.resolve(adm);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };

       var edit = function(empleado){
           var defer = $q.defer();

           $http.post('/lcbsapi/rest/usuarios/editarempleado', empleado)
           .success(function (emp) {
               defer.resolve(emp);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };

       var borrar = function(id){
           var defer = $q.defer();
           var aEliminar = { 'idEmpleado' : id}
           $http.post('/lcbsapi/rest/usuarios/bajaempleado',aEliminar)
           .success(function (emp) {
               defer.resolve(emp);
           })
           .error(function(){
               defer.reject('server error')
           });

           return defer.promise;
       };

       var getId = function(id){
           var defer = $q.defer();

           $http.get('/lcbsapi/rest/usuarios/getempleado/'+id)
           .success(function (emp) {
               defer.resolve(emp);
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
           borrar  : borrar,
           edit    : edit,
           login   : login
       }

   }

})();