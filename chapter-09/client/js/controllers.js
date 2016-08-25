(function(){
    'use strict';

    angular
        .module('bikesGallery')
        .controller('GalleryController', GalleryController)
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Gallery'];
    function HomeController(Gallery) {
        var vm = this;

        vm.listProducts = Gallery.find();

        //console.log(vm.listProducts);
    }

    GalleryController.$inject = ['Gallery', '$stateParams'];
    function GalleryController(Gallery, $stateParams) {
        var vm = this;

        var itemId = $stateParams.itemId;
        console.log(itemId);

        vm.listProducts = Gallery.bikes({
          id: itemId
        });

        //console.log(vm.listProducts);
    }

})();
