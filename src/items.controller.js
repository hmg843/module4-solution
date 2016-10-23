(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemController', CategoryItemController);

CategoryItemController.$inject = ['categoryItems'];
function CategoryItemController(categoryItems) {
  var catItemCtrl = this;
  catItemCtrl.categoryItems = categoryItems;
}

})();
