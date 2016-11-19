(function () {
    'use strict';
    angular.module('yuberAdmin').controller("homeCtrl", ["$scope", '$localStorage', '$location', homeCtrl]);

    function homeCtrl($scope, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	    	
        $scope.hole = "Panel de Control destinado a la administración del servicio"
    }

})();