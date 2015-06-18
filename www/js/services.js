angular.module('ivfCodes.services', [])

.factory('CodeStore', function ($http) {

    var codes = [];
    return {

        getCodes: function () {
            return $http.get("js/data.json").then(function (response) {
                codes = response.data;
                return codes;
            });
        },

        get: function (codeId) {

            for (var i = 0; i < codes.length; i++) {
                if (codes[i].id === codeId) {
                    return codes[i];
                }
            }
            return undefined;
        }
    };
});
