/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('calculatorMC')
    .config(config);

function config($routeProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist(['**']);

    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: './app/components/home/homeView.html'
        });
}