(function() {
	'use strict';
	angular.module('yuberAdmin').service('reporteService',
			[ "$http", "$q", "CONFIG", reporteService ]);

	function reporteService($http, $q, CONFIG) {

		var reporteRatingProv = function(page, amount, cal) {
			var defer = $q.defer();

			$http.get(
					CONFIG.URL + '/vertical/reporteratingprov/' + page + '/'
							+ amount + '/' + cal).success(function(reporte) {
				defer.resolve(reporte);
			}).error(function() {
				defer.reject('server error')
			});

			return defer.promise;
		};

		var reporteUsuariosActivos = function(page, amount, start) {
			var defer = $q.defer();

			$http.get(
					CONFIG.URL + '/vertical/rankinactusers/' + page + '/'
							+ amount + '/' + start).success(
					function(reporte) {
						defer.resolve(reporte);
					}).error(function() {
				defer.reject('server error')
			});

			return defer.promise;
		};

		var reporteUsuariosPorUso = function(page, amount, start, end) {
			var defer = $q.defer();

			$http.get(
					CONFIG.URL + '/vertical/rankinusuariosporconsumo/' + page
							+ '/' + amount + '/' + start + '/' + end).success(
					function(reporte) {
						defer.resolve(reporte);
					}).error(function() {
				defer.reject('server error')
			});

			return defer.promise;
		};

		var reporteUsuariosPorGanancia = function(page, amount, start, end) {
			var defer = $q.defer();

			$http.get(
					CONFIG.URL + '/vertical/rankingananciausuario/' + page
							+ '/' + amount + '/' + start + '/' + end).success(
					function(reporte) {
						defer.resolve(reporte);
					}).error(function() {
				defer.reject('server error')
			});

			return defer.promise;
		};

		var reporteRatingProvGanancia = function(page, amount, start, end) {
			var defer = $q.defer();

			$http.get(
					CONFIG.URL + '/vertical/rankingananciaprov/' + page + '/'
							+ amount + '/' + start + '/' + end).success(
					function(reporte) {
						defer.resolve(reporte);
					}).error(function() {
				defer.reject('server error')
			});

			return defer.promise;
		};

		var reporteGanancia = function( start) {
			var defer = $q.defer();

			$http.get(
					CONFIG.URL + '/vertical/reporteganancia/' + start).success(
					function(reporte) {
						defer.resolve(reporte);
					}).error(function() {
				defer.reject('server error')
			});

			return defer.promise;
		};

		return {
			reporteRatingProv : reporteRatingProv,
			reporteUsuariosActivos : reporteUsuariosActivos,
			reporteGanancia : reporteGanancia,
			reporteRatingProvGanancia : reporteRatingProvGanancia,
			reporteUsuariosPorGanancia : reporteUsuariosPorGanancia,
			reporteUsuariosPorUso : reporteUsuariosPorUso
		}

	}

})();