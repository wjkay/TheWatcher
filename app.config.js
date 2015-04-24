(function(){
    angular
        .module('watcher')
        .config([
            "$routeProvider",
            "$httpProvider",
            function($routeProvider, $httpProvider){
                $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
            }
        ])
    
})()