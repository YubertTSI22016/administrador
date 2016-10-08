(function () {
    'use strict';
    angular.module('yuberAdmin').controller('clienteCtrl', ['$scope', '$routeParams', 'clienteService', clienteCtrl]);

    function clienteCtrl($scope, $routeParams, clienteService) {
        $scope.clientes     = [];
        $scope.showAlert    = false;

        clienteService.getAll().then(function (data) {
        	console.log(data);
            $scope.clientes = data;
        });

        $scope.save = function(){
        	console.log('edit')
        }

    }

})();