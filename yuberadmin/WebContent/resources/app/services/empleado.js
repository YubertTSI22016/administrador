(function () {
    'use strict';
    angular.module('yuberAdmin').service('empleadoService', ["$http", "$q", empleadoService]);

    function empleadoService($http, $q) {

        var getAll = function(){
            var defer = $q.defer();
            
            var listadoEmpleados = [
            	{
            		id : 1, nombre: 'Empleado 1'
            	},
            	{
            		id : 2, nombre: 'Otro Empleado'
            	}
            ];

            defer.resolve(listadoEmpleados);

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