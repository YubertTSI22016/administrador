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
            
            configuracionService.getInfo().then(function (data) {
            	$scope.configuracion = data;
            });
        }

        $scope.guardarConf = function() {
            var editadoConfiguracion = this.configuracion;
            configuracionService.save(editadoConfiguracion).then(function (data) {
                mostrarNotificacion('success', 'Se ha modificado la configuración');
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