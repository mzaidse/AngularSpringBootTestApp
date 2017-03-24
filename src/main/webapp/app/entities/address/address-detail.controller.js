(function() {
    'use strict';

    angular
        .module('angularSpringApp1App')
        .controller('AddressDetailController', AddressDetailController);

    AddressDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Address', 'Customer'];

    function AddressDetailController($scope, $rootScope, $stateParams, previousState, entity, Address, Customer) {
        var vm = this;

        vm.address = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('angularSpringApp1App:addressUpdate', function(event, result) {
            vm.address = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
