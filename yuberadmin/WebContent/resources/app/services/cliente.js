(function () {
    'use strict';
    angular.module('yuberAdmin').service('clienteService', ["$http", "$q", clienteService]);

    function clienteService($http, $q) {

        var getAll = function(){
           var defer = $q.defer();
    
           $http.get(CONFIG.URL + '/vertical/listarclientes')
            .success(function (clientes) {
                defer.resolve(clientes);
            })
            .error(function(){
                defer.reject('server error')
            });
        
            return defer.promise;
        };

        return {
            getAll : getAll
        }

    }

})();