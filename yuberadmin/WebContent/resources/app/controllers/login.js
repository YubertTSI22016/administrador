(function () {
    'use strict';
    angular.module('yuberAdmin').controller('loginCtrl', ['$rootScope', '$scope', '$location', '$localStorage', 'administradorService', loginCtrl]);

    function loginCtrl($rootScope, $scope, $location, $localStorage, administradorService) {
        $scope.login = function(){
        	administradorService.login(this.usuario).then(function (datos) {
        		if(datos){
        			$localStorage.empleadoLogueado = datos;
            		$rootScope.$broadcast('localStorage:changed');
            		$location.url('/');
        		}else{
        			mostrarNotificacion('error', 'El usuario no existe o las credenciales no son las correctas');
        		}
            }, function() {
            	mostrarNotificacion('error', 'El usuario no existe o las credenciales no son las correctas');
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
    }

})();