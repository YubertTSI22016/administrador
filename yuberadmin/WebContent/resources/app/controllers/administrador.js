(function () {
    'use strict';
    angular.module('yuberAdmin').controller('administradorCtrl', ['$scope', '$routeParams', 'administradorService', '$localStorage', '$location', administradorCtrl]);

    function administradorCtrl($scope, $routeParams, administradorService, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	
        var administrador = [];
        $scope.showAlert = false;

        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            var type = $routeParams && $routeParams['type'] ? $routeParams['type'] : null;
            
            if(type == 'add'){
                
            
//            	
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
        	
        	var nuevoAdmin = {
                    nombre : this.administrador.nombre, 
                    apellido: this.administrador.apellido,
                    email: {
                    	email: this.administrador.email,
                    	descripcion: "Admin Creado"
                    	},
                    clave: this.administrador.clave
                }
            administradorService.add(nuevoAdmin).then(function (data) {
            		
                    console.log(data);
                });
        	
        }

        $scope.remove = function(id){
        	administradorService.remove(id).then(function (data) {
        		
                console.log(data);
            });
        }

        $scope.edit = function(){
        	console.log('edit')
        }

        
        initialize();
    }

})();