(function () {
    'use strict';
    angular.module('yuberAdmin').controller('clienteCtrl', ['$scope', '$routeParams', 'clienteService', '$localStorage', '$location', clienteCtrl]);

    function clienteCtrl($scope, $routeParams, clienteService, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	
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