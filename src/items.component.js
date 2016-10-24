(function () {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
        restrict : 'E',
        templateUrl : 'src/category.items.template.html',
        bindings : {
          categoryItems : '<'
        }
    });
})();
