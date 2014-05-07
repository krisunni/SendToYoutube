/*Contoller for STY*/
var STY = angular.module('STY', []);

STY.controller('HostSystem', function($scope, $http) {
    $scope.currentHost = 'ouya';
    $scope.system = ["ouya", "beta", "mac"];
    for (var i in $scope.system) {
        ping('http://' + $scope.system[i] + '.ku:9090', $http);

    }

});

STY.controller('STYCtrl', function($scope, $http) {
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
                'hostname': $host + '.ku'
            },
        });
        console.log($host);
        console.log($scope.url);
    }
});

function ping(host, $http) {

    /*    if (!this.inUse) {
        this.status = 'unchecked';
        this.inUse = true;
        this.callback = callback;
        this.ip = ip;
        var _that = this;
        this.img = new Image();
        this.img.onload = function() {
            _that.inUse = false;
            _that.callback('responded');

        };
        this.img.onerror = function(e) {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback('responded', e);
            }

        };
        this.start = new Date().getTime();
        this.img.src = "http://" + ip;
        this.timer = setTimeout(function() {
            if (_that.inUse) {
                _that.inUse = false;
                _that.callback('timeout');
            }
        }, 25);
    }*/
    console.log(host);
            $http.defaults.useXDomain = true;
    $http({
        method: 'GET',
        url: 'http://pi.ku:5000/SendProxy',
        timeout: 1000,
        headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': ['OPTIONS', 'GET', 'POST'],
                'Access-Control-Allow-Headers': 'Content-Type',
                'hostname': host + '.ku'
            },
    }).
    success(function(data, status, headers, config) {
        console.log(status);
    }).
    error(function(data, status, headers, config) {
        console.log(status);

    });
}