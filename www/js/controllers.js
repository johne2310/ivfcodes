var ivfCodes = angular.module('ivfCodes.controllers', []);


//////////////////////////
//start controllers section
/////////////////////////

ivfCodes.controller('HomeCtrl', function ($scope) {});

////////////////////////
//Drug list view controller
////////////////////////
ivfCodes.controller('codesCtrl', function ($scope, CodeStore) {
    CodeStore.getCodes().then(function (data) {
        $scope.codes = data;
    });

    $scope.clearSearch = function () {
        $scope.query = null;
    };
    $scope.findAgonist = function () {
        $scope.query = 'Agonist';
    };
    $scope.findAntag = function () {
        $scope.query = 'Antag.';
    };
    $scope.findTrigger = function () {
        $scope.query = 'Trigger';
    };
    $scope.findLuteal = function () {
        $scope.query = 'Luteal';
    };
    $scope.findOther = function () {
        $scope.query = 'Other';
    };
    $scope.findFSH = function () {
        $scope.query = 'FSH';

    };
});

////////////////////////
//Detail view controller
////////////////////////
ivfCodes.controller('DetailCtrl', function ($scope, $state, CodeStore) {

    $scope.code = CodeStore.get($state.params.codeId);

});


ivfCodes.controller('AboutCtrl', function ($scope) {});
