(function () {
    'use strict';
    angular.module('yuberAdmin').service('administradorService', ["$http", "$q", administradorService]);

    function administradorService($http, $q) {

        var getAll = function(){
            var defer = $q.defer();
            
            var listadoAdministradores = [
            	{
            		id : 1, nombre: 'Empleado 1'
            	},
            	{
            		id : 2, nombre: 'Otro Empleado'
            	}
            ];

            defer.resolve(listadoAdministradores);

            // $http.get('api/employee')
	    	// .success(function (employees) {
	    	//     defer.resolve(employees);
	    	// })
	    	// .error(function(){
	    	//     defer.reject('server error')
	    	// });

            return defer.promise;
        };

        return {
            getAll : getAll
        }

    }

})();