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

ivfCodes.controller('codesCtrl', function ($scope, CodeStore) {

    $scope.codes = CodeStore.list();

});

ivfCodes.controller('DetailCtrl', function ($scope, $state, CodeStore) {

    $scope.code = CodeStore.get($state.params.codeId);

});


ivfCodes.controller('AboutCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
