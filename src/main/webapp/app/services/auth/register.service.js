(function () {
    'use strict';

    angular
        .module('angularSpringApp1App')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
