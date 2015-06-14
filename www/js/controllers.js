var ivfCodes = angular.module('ivfCodes.controllers', []);



//function getCode(codeId) {
//    for (var i = 0; i < codes.length; i++) {
//        if (codes[i].id === codeId) {
//            return codes[i];
//        }
//    }
//    return undefined;
//}

//////////////////////////
//start controllers section
/////////////////////////

ivfCodes.controller('HomeCtrl', function ($scope) {});

//ivfCodes.controller('codesCtrl', ['$scope', '$http', '$state',
//    function ($scope, $http, $state) {
//        $http.get('js/data.json').success(function (data) {
//            $scope.codes = data;
//        });
//        $scope.clearSearch = function () {
//            $scope.query = null;
//        };
//    }
//  ]);

ivfCodes.controller('codesCtrl', function ($q, $scope, $state, CodeStore) {
    CodeStore.getCodes().then(function (data) {
        $scope.codes = data;
        console.log($scope.codes);
    });

    $scope.clearSearch = function () {
        $scope.query = null;
    };
    $scope.findAgonist = function () {
        $scope.query = null;
        $scope.query = 'Agonist';
    };
    $scope.findAntag = function () {
        $scope.query = null;
        $scope.query = 'Antagonist';
    };
    $scope.findTrigger = function () {
        $scope.query = null;
        $scope.query = 'Trigger';
    };
    $scope.findLuteal = function () {
        $scope.query = null;
        $scope.query = 'Luteal';
    };
    $scope.findOther = function () {
        $scope.query = null;
        $scope.query = 'Other';
    };
    $scope.findFSH = function () {
        $scope.query = null;
        $scope.query = 'FSH';

    };
});

///test data
//.controller('masterCtrl', function ($q, $scope, RequestService) {
//    RequestService.getRequests().then(function (data) {
//        $scope.requests = data;
//        console.log($scope.requests);
//    })
//})

///end of test





ivfCodes.controller('DetailCtrl', function ($scope, $state, CodeStore) {

    $scope.code = CodeStore.get($state.params.codeId);

});


ivfCodes.controller('AboutCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
