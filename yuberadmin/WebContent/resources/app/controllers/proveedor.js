(function () {
    'use strict';
    angular.module('yuberAdmin').controller('proveedorCtrl', ['$scope', '$routeParams', 'proveedorService', proveedorCtrl]);

    function proveedorCtrl($scope, $routeParams, proveedorService) {
        $scope.proveedores     = [];
        $scope.showAlert    = false;

        proveedorService.getAll().then(function (data) {
        	console.log(data);
            $scope.proveedores = data;
        });

        $scope.save = function(){
        	console.log('edit')
        }

    }

})();