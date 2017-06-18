var app = angular.module('lotteryApp', [])

app.controller('lotteryCtrl', function ($scope) {

    $scope.results = [];


    $scope.lottery = function () {
        $scope.reset();
        for (var i = 0; i < 6; i++) {
            $scope.results.push(roll());
        }
        console.log($scope.results);
    }

    function roll() {
        let number = Math.floor(Math.random() * 48) + 1
        if ($scope.results.some(function (ele, val, arr) {
                return val === $scope.results[number]
        })) {
            return roll();
        } else {

            console.log(number)
            return number
        }
    }

    $scope.reset = function () {
        $scope.results = null;
        $scope.results = [];
    }


})

