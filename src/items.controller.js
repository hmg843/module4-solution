(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemController', CategoryItemController);

CategoryItemController.$inject = ['$stateParams', 'categories'];
function CategoryItemController($stateParams, categories) {
  var catItemCtrl = this;
  catItemCtrl.categoryItems = categories[$stateParams.categoryName];
}

})();
