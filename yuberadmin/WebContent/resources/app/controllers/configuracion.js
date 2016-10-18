(function () {
    'use strict';
    angular.module('yuberAdmin').controller('configuracionCtrl', ['$scope', '$routeParams', 'configuracionService', '$localStorage', '$location', configuracionCtrl]);

    function configuracionCtrl($scope, $routeParams, configuracionService, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	
        $scope.configuracioness = [];
        $scope.showAlert = false;
        
        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            
        }


        $scope.edit = function(){
        	console.log('edit')
        }

        
        initialize();
    }

})();