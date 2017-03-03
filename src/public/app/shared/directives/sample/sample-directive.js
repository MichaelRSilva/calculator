/**
 * Created by michaeldfti on 21/02/17.
 */

angular
    .module('calculatorMC')
    .directive('sample', focusMe);

focusMe.$inject = ['$timeout', '$parse'];


function focusMe($timeout, $parse) {

    var directive = {
        link: link,
        restrict: 'EA',
        scope:{}
    };

    return directive;

    function link(scope, element, attrs) {


    }
}