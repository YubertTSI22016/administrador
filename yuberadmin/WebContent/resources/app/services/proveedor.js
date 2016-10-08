(function () {
    'use strict';
    angular.module('yuberAdmin').service('proveedorService', ["$http", "$q", proveedorService]);

    function proveedorService($http, $q) {

        var getAll = function(){
            var defer = $q.defer();
            
            var listadoProveedores = [
            	{
            		id : 1, nombre: 'mati'
            	},
            	{
            		id : 2, nombre: 'andres'
            	}
            ];

            defer.resolve(listadoProveedores);

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