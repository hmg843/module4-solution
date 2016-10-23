(function () {

angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories()
              .then(function(response) {
                return response.data;
              })
              .catch(function(error) {
                console.log(error);
              })
        }]
      }
    });

    /*
    .state('categories.items', {
      url: '/items',
      templateUrl: 'src/category.items.html'
      controller: 'CategoryItemController as catItemCtrl',
    });*/
}

})();
