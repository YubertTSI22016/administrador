(function () {
    'use strict';
    angular.module('yuberAdmin').controller('proveedorCtrl', ['$scope', '$routeParams', 'proveedorService', '$localStorage', '$location', proveedorCtrl]);

    function proveedorCtrl($scope, $routeParams, proveedorService, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	
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