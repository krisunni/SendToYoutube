/*Contoller for STY*/
var STY = angular.module('STY', []);

STY.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
/* $scope.url = 7WNdMwM_oFQ';*/


function Systems($scope) {
    $scope.system = 'ouya';
    $scope.system = ["ouya", "beta", "mac"];

}

var SystemsCtrl = function($scope) {

    $scope.singleModel = 1;

    $scope.radioModel = 'ouya';

    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };
};

STY.controller('STYCtrl', function($scope, $http) {
    $scope.SendURL = function() {
        /*        var YoutubePayload = '?request={"jsonrpc": "2.0", "method": "Player.Open", "params":{"item": {"file" : "plugin://plugin.video.youtube/?action=play_video&videoid=' + $scope.url + '" }}, "id" : "1"}';
         */
        var YoutubePayload = '{"jsonrpc": "2.0", "method": "Player.Open", "params": { "item": { "file": "plugin://plugin.video.youtube/?action=play_video&videoid=nC1yLD7R0ZU" }  }, "id": "libPlayerOpen"}'
        $http.defaults.useXDomain = true;
        $http({
            method: 'POST',
            url: 'http://pi.ku:5000/SendProxy',
            data: YoutubePayload,
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': ['OPTIONS', 'GET', 'POST'],
                'Access-Control-Allow-Headers': 'Content-Type',
                'Server':$scope.system
            },
        });

        console.log($scope.url);
    }

});