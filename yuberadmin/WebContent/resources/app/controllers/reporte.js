(function () {
    'use strict';
    angular.module('yuberAdmin').controller('reporteCtrl', ['$scope', '$routeParams', 'reporteService', '$localStorage', '$location', reporteCtrl]);

    function reporteCtrl($scope, $routeParams, reporteService, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	
        $scope.reportes     = [];
        $scope.showAlert    = false;

        reporteService.getAll().then(function (data) {
        	console.log(data);
            $scope.reportes = data;
        });

        $scope.add = function(){
        	console.log('aaaddd')
        }

        $scope.edit = function(){
        	console.log('edit')
        }

    }

})();