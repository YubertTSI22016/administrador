(function () {
    'use strict';
    angular.module('yuberAdmin').controller('empleadoCtrl', ['$scope', '$routeParams', 'empleadoService', empleadoCtrl]);

    function empleadoCtrl($scope, $routeParams, empleadoService) {
        $scope.empleado     = [];
        $scope.showAlert    = false;

        empleadoService.getAll().then(function (data) {
        	console.log(data);
            $scope.empleados = data;
        });

        $scope.add = function(){
        	console.log('aaaddd')
        }

        $scope.edit = function(){
        	console.log('edit')
        }

    }

})();