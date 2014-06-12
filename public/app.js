/*Contoller for STY*/
var app = angular.module('STY', []);

app.controller('HostSystem', function($scope, $http) {
    $http.get('/systems.json').success(function(data) {
         $scope.systems = data;
        console.log($scope.systems[1].name);
    });
});

app.controller('STYCtrl', ['$http', '$scope', function($http, $scope) {
    $scope.SendURL = function($host) {
        var PrsdUrl = $scope.url.substr($scope.url.indexOf('=') + 1, $scope.url.length);
        var STYPayload = '{"jsonrpc": "2.0", "method": "Player.Open", "params": { "item": { "file": "plugin://plugin.video.youtube/?action=play_video&videoid=' + PrsdUrl + '" }  }, "id": "libPlayerOpen"}'
        $http.defaults.useXDomain = true;
        $http({
            method: 'POST',
            url: 'http://pi.ku:5000/SendProxy',
            data: STYPayload,
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': ['OPTIONS', 'GET', 'POST'],
                'Access-Control-Allow-Headers': 'Content-Type',
                'hostname': $host 
            },
        });
        console.log($host);
        console.log($scope.url);
    }
}]);