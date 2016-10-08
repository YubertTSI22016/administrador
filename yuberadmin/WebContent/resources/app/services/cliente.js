(function () {
    'use strict';
    angular.module('yuberAdmin').service('clienteService', ["$http", "$q", clienteService]);

    function clienteService($http, $q) {

        var getAll = function(){
            var defer = $q.defer();
            
            var listadoClientes = [
            	{
            		id : 1, nombre: 'Cliente 1'
            	},
            	{
            		id : 2, nombre: 'Cliente 2'
            	}
            ];

            defer.resolve(listadoClientes);

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