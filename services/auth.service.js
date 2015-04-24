// Authentication services
(function() {
    'use strict';   
    angular
        .module('watcher')
        .service('auth', auth)
    
    function auth ($http) {
        return {
            getTempToken: function() { return $http.post('https://secure.trademe.co.nz/Oauth/RequestToken'
                + '?scope=MyTradeMeRead'
                + '&oauth_consumer_key=0C5FFFA83D38BD25A9ED42649BD0F113'
            )}
        }    
    }
    
})();

//POST&https://secure.trademe.co.nz/Oauth/RequestToken
//&oauth_callback=http%3A%2F%2Fwww.website-tm-access.co.nz%2Ftrademe-callback
//&oauth_consumer_key=0C5FFFA83D38BD25A9ED42649BD0F113
//&oauth_nonce=7O3kEe
//&oauth_signature_method=HMAC-SHA1
//&oauth_timestamp=1285532322
//&oauth_version=1.0
//&scope=MyTradeMeRead%2CMyTradeMeWrite