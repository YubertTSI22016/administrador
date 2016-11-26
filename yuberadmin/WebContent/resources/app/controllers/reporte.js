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
        var nowTimestamp = getTimeStamp( new Date()).getTime();
		var startDate = getTimeStamp(new Date((new Date()).setDate( new Date().getDate()-7))).getTime();
		
	    var startDateNuevos = moment().subtract(29, 'days');
	    var endDateNuevos = moment();
	        
		var dateOption = {
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            showDropdowns: true,
            timePicker: false,
            ranges: {
                'Ultimos 7 dias': [moment().subtract(6, 'days'), moment()],
                'Ultimos 30 dias': [moment().subtract(29, 'days'), moment()],
                'Este Mes': [moment().startOf('month'), moment().endOf('month')],
                'Mes anterior': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            opens: 'left',
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary',
            cancelClass: 'btn-small',
            format: 'DD/MM/YY',
            separator: '',
            locale: {
                applyLabel: 'Enviar',
                cancelLabel: 'Borrar',
                fromLabel: 'Desde',
                toLabel: '',
                customRangeLabel: 'Rango',
                daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                monthNames: ['Enero', 'Febero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            }
        };
		 $('#dateRange').daterangepicker(dateOption);
         $('#dateRange span').html(startDateNuevos.format('DD/MM/YY') + ' - ' + endDateNuevos.format('DD/MM/YY'));
         $('#dateRange').on('apply.daterangepicker', function (ev, picker) {
        	 startDate = picker.startDate;
        	 nowTimestamp = picker.endDate;
             initialize();
         });
         var chartPorNuevos;
         
         var initChart = function(data){
        	 chartPorNuevos = Morris.Bar({
	             element: 'gananciasVertical',
	             data: data,
	             xkey: 'dia',
	             hideHover: 'auto',
	             barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
	             ykeys: ['saldo'],
	             labels: ['Ganancias'],
	             xLabelAngle: 60,
	             resize: true
	         });
         }
		var initialize = function() {
			 
			
			reporteService.reporteRatingProv(1, 10, 5).then(function(data) {
				console.log('reporteRatingProv', data)
				$scope.proveedores = data;
			});
			reporteService.reporteGanancia(startDate).then(function (data) {
                console.log('reporteGanancia', data)
                $scope.reporteGanancia = data; 
                if(chartPorNuevos){
                	chartPorNuevos.setData(data);
                }else{
                	initChart(data);
                }
                
            });
			reporteService.reporteRatingProvGanancia(0, 20, startDate, nowTimestamp).then(function(data) {
				console.log('reporteRatingProvGanacia', data)
				$scope.proveedoresPorGanancia = data;
			});
			reporteService.reporteUsuariosPorGanancia(0, 20, startDate, nowTimestamp).then(function(data) {
				console.log('reporteUsuariosPorGanancia', data)
				$scope.reporteUsuariosPorGanancia = data;
			});
			reporteService.reporteUsuariosPorUso(0, 20, startDate, nowTimestamp).then(function(data) {
				console.log('reporteUsuariosPorUso', data)
				$scope.reporteUsuariosPorUso = data;
			});
			reporteService.reporteUsuariosActivos(0, 20, startDate, nowTimestamp).then(function(data) {
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