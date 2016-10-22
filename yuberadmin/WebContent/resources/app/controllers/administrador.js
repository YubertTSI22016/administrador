(function () {
    'use strict';
    angular.module('yuberAdmin').controller('administradorCtrl', ['$scope', '$routeParams', 'administradorService', '$localStorage', '$location', administradorCtrl]);

    function administradorCtrl($scope, $routeParams, administradorService, $localStorage, $location) {
    	if(!$localStorage.empleadoLogueado){
			$location.url('/login');
		}
    	
        var administrador = {email:null};
        var administradores = [];
        $scope.showAlert = false;

        var initialize = function(){
            var id = $routeParams && $routeParams['id'] ? $routeParams['id'] : null;
            var type = $routeParams && $routeParams['type'] ? $routeParams['type'] : null;
            
            if(type == 'add'){
                
            
//            	
            }
            
            if(id){
            	administradorService.getId(id).then(function (data) {
                    $scope.administrador = data;
                    console.log($scope.administrador);
                });
            }else{
            	administradorService.getAll().then(function (data) {
                	console.log('getAll')
                    $scope.administradores = data;
                });
            }
        }


        $scope.agregar = function() {
        	var nuevoAdministrador = this.administrador;
            administradorService.add(nuevoAdministrador).then(function (data) {
            		mostrarNotificacion('success', 'Se ha creado el administrador');
                    $scope.administrador = null;
                    window.history.back();
                });
        	
        }

        $scope.remove = function (index) {

            var eliminadoAdministrador = this.administrador;
            eliminadoAdministrador.eliminado = true;
            var re = confirm("Seguro que quiere borrar?");
            if (re == true) {
                administradorService.remove(eliminadoAdministrador).then(
                    function () {
                        $scope.administradores.splice(index, 1);
                        mostrarNotificacion('success', 'Se ha heliminado el Administrador');
                    }, function () {
                        mostrarNotificacion('error', 'No se pudo eliminar el Administrador');
                    }
                );
            }
        }
        

        $scope.edit = function(){
            var editadoAdministrador = this.administrador;
             console.log(editadoAdministrador);
            administradorService.edit(editadoAdministrador).then(function (data) {
                mostrarNotificacion('success', 'Se ha modificado el administrador');
                window.history.back();
            });



        }
       
        var mostrarNotificacion = function (tipo, text) {
            var title = '';

            if (tipo == 'success') {
                var title = 'Exito!';
                text || (text = 'Acción realizada con exito.');
            } else if (tipo == 'error') {
                var title = 'Oh No!';
                text || (text = 'Ha ocurrido un error.');
            }

            new PNotify({
                title: title,
                text: text,
                type: tipo,
                nonblock: {
                    nonblock: true
                }
            });
        }
        
        initialize();
    }

})();