(function () {
  'use strict';

  angular.module('myapp', [])

  .controller('HelloController', function($scope){
        $scope.helloTo = {};
        $scope.helloTo.title = "Triggy";
  });

})();
