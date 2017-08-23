import tplIntro from '../intro/intro.html';
import tplHeader from '../nav/header.html';

/**
 * Application route definition.
 */
export default function appRouter($stateProvider, $urlRouterProvider) {
  'ngInject';
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        header: {
          template: tplHeader
        },
        content: {
          template: tplIntro
        }
      }
    });
}