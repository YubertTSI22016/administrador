(function () {
    'use strict';
    angular.module('yuberAdmin').controller('administradorCtrl', ['$scope', '$routeParams', 'administradorService', administradorCtrl]);

    function administradorCtrl($scope, $routeParams, administradorService) {
        $scope.administradores = [];
        $scope.showAlert = false;
        
        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            var type = $routeParams && $routeParams['type'] ? $routeParams['type'] : null;
            
            if(type == 'add'){
            	return;
            }
            
            if(id){
            	administradorService.getId(id).then(function (data) {
                    $scope.empleado = data;
                });
            }else{
            	administradorService.getAll().then(function (data) {
                	console.log('getAll')
                    $scope.administradores = data;
                });
            }
        }

        

        $scope.agregar = function() {
        	console.log($scope.administradores)
            $scope.administradores.push(this.administrador);
        	
        	console.log($scope.administradores)
        }

        $scope.add = function(){
        	console.log(administrador.nombre)
        }

        $scope.edit = function(){
        	console.log('edit')
        }

        
        initialize();
    }

})();