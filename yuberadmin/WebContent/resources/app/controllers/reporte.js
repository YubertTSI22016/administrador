(function() {
	'use strict';
	angular.module('yuberAdmin').controller(
			'reporteCtrl',
			[ '$scope', '$routeParams', 'reporteService', '$localStorage',
					'$location', reporteCtrl ]);

	function reporteCtrl($scope, $routeParams, reporteService, $localStorage,
			$location) {
		if (!$localStorage.empleadoLogueado) {
			$location.url('/login');
		}

		var proveedor = {
			email : null
		};
		$scope.reporteUsuariosActivos = $scope.reporteGanancia = $scope.proveedores = $scope.proveedoresPorGanancia = $scope.reporteUsuariosPorUso = $scope.reporteUsuariosPorGanancia = [];
		$scope.showAlert = false;
		
		var getTimeStamp = function(date){
			
			return (new Date((date).toString().split(" ").splice(0, 4).join(" ")));
		}
		var initialize = function() {
			var id = $routeParams && $routeParams['id'] ? $routeParams['id']
					: null;
			var type = $routeParams && $routeParams['type'] ? $routeParams['type']
					: null; 
			 
			var nowTimestamp = getTimeStamp( new Date()).getTime();
			var weekAgo = getTimeStamp(new Date((new Date()).setDate( new Date().getDate()-7))).getTime();
			reporteService.reporteRatingProv(1, 10, 5).then(function(data) {
				console.log('reporteRatingProv', data)
				$scope.proveedores = data;
			});
			reporteService.reporteGanancia(0, 10, weekAgo, nowTimestamp).then(function (data) {
                console.log('reporteGanancia', data)
                $scope.reporteGanancia = data;
            });
			reporteService.reporteRatingProvGanancia(0, 10, weekAgo, nowTimestamp).then(function(data) {
				console.log('reporteRatingProvGanacia', data)
				$scope.proveedoresPorGanancia = data;
			});
			reporteService.reporteUsuariosPorGanancia(0, 10, weekAgo, nowTimestamp).then(function(data) {
				console.log('reporteUsuariosPorGanancia', data)
				$scope.reporteUsuariosPorGanancia = data;
			});
			reporteService.reporteUsuariosPorUso(0, 10, weekAgo, nowTimestamp).then(function(data) {
				console.log('reporteUsuariosPorUso', data)
				$scope.reporteUsuariosPorUso = data;
			});
			reporteService.reporteUsuariosActivos(0, 10, weekAgo, nowTimestamp).then(function(data) {
				console.log('reporteUsuariosActivos', data)
				$scope.reporteUsuariosActivos = data;
			});
		}

		var mostrarNotificacion = function(tipo, text) {
			var title = '';

			if (tipo == 'success') {
				var title = 'Exito!';
				text || (text = 'Acción realizada con exito.');
			} else if (tipo == 'error') {
				var title = 'Oh No!';
				text || (text = 'Ha ocurrido un error.');
			}

			new PNotify({
				title : title,
				text : text,
				type : tipo,
				nonblock : {
					nonblock : true
				}
			});
		}

		initialize();
	}

})();