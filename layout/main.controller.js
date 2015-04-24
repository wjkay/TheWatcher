(function() {
    angular
        .module('watcher')
        .controller('mainController', mainController);

    function mainController(auth) { 
        
        console.log(auth.getTempToken());
    }
    
})();

