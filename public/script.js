/*Contoller for STY*/
var STY = angular.module('STY', []);

STY.controller('HostSystem', function($scope, $http) 
{   
    /*$scope.user = {
        system: "ouya.ku"
    };
    */
    $scope.currentHost='ouya';
    $scope.system = ["ouya", "beta", "mac"];
    });
STY.controller('STYCtrl', function($scope, $http) {
        $scope.SendURL = function($host) {
            var STYPayload = '{"jsonrpc": "2.0", "method": "Player.Open", "params": { "item": { "file": "plugin://plugin.video.youtube/?action=play_video&videoid='+$scope.url+'" }  }, "id": "libPlayerOpen"}'
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
                    'hostname': $host+'.ku'
                },
            });
            console.log($host);
            console.log($scope.url);
        }

    });