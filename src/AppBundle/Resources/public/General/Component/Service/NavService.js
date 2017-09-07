(function(){
  'use strict';

  angular
      .module('app')
      .service('navService', navService);

  navService.$inject = ['$q'];
  function navService($q){
    var menuItems = [{
      name: 'Dashboard',
      icon: 'dashboard',
      state: 'app.dashboard'
    }, {
      name: 'Profile',
      icon: 'person',
      state: 'app.profile'
    }, {
      name: 'Posts',
      icon: 'view_module',
      state: 'app.post'
    }];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
