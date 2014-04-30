/*Contoller for STY*/
var STY = angular.module('STY', []);


    function Systems($scope) {
        $scope.system = 'ouya.ku';
        $scope.system = ["ouya.ku", "beta.ku", "mac"];
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
                    'hostname': $scope.system
                },
            });
            console.log($scope.system);
            console.log($scope.url);
        }

    });