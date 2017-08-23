import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngTouch from 'angular-touch';
import ngBootstrap from 'angular-ui-bootstrap';
import uiRouter from '@uirouter/angularjs';
import appRouter from './app.router';
import MainController from '../main/MainController';

export default angular.module('homepage', [
	ngAnimate,
	ngAria,
	ngTouch,
	ngBootstrap,
	toastr,
	uiRouter
])
.constant('AppSettings', appConstants)
.config(appRouter)
// .service('ApiService', ApiService)
.controller('MainController', MainController)