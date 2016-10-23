(function () {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('CategoriesUrl', 'https://davids-restaurant.herokuapp.com/categories.json')
    .constant('CategoryItemsUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json');

  MenuDataService.$inject = ['$http', 'CategoriesUrl', 'CategoryItemsUrl'];
  function MenuDataService($http, CategoriesUrl, CategoryItemsUrl) {
    var service = this;
    service.getAllCategories = function() {
      var promise = $http({
          method : 'GET',
          url : CategoriesUrl
      });
      return promise;
    }
    service.getItemsForCategory = function(categoryShortName) {
      var promise = $http({
          method : 'GET',
          url : CategoryItemsUrl,
          params : {
              category : categoryShortName
          }
      });
      return promise;
    }
  }

})();
