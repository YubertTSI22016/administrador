(function () {
    'use strict';
    angular.module('yuberAdmin').service('reporteService', ["$http", "$q", reporteService]);

    function reporteService($http, $q) {

        var getAll = function(){
            var defer = $q.defer();
            
            var algo = [
            	{
            		id : 1, nombre: 'mati'
            	},
            	{
            		id : 2, nombre: 'andres'
            	}
            ];

            defer.resolve(algo);

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