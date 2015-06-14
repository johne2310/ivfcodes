angular.module('ivfCodes.services', [])

.factory('CodeStore', function () {



    //Mock data
    var codes = [
        {
            "id": "001",
            "drugName": "Gonal F",
            "strength": "900",
            "pbsCode": "1234A",
            "streamline": "9876Y",
            "Qty": "5",
            "Repeats": "0",
            "Criteria": "This is some text about the drug requirements."
},
        {
            "id": "002",
            "drugName": "Gonal F",
            "strength": "450",
            "pbsCode": "1234A",
            "streamline": "9876Y",
            "Qty": "5",
            "Repeats": "0",
            "Criteria": "This is some text about the drug requirements."
},
        {
            "id": "003",
            "drugName": "Gonal F",
            "strength": "300",
            "pbsCode": "1234A",
            "streamline": "9876Y",
            "Qty": "5",
            "Repeats": "0",
            "Criteria": "This is some text about the drug requirements."
}
    ];


    return {

        list: function () {
            return codes;
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



    //
    //    return {
    //        all: function () {
    //            return codes;
    //        },
    //        remove: function (codes) {
    //            codes.splice(codes.indexOf(codes), 1);
    //        },
    //        get: function (codesId) {
    //            for (var i = 0; i < codes.length; i++) {
    //                if (codes[i].id === parseInt(codesId)) {
    //                    return codes[i];
    //                }
    //            }
    //            return null;
    //        }
    //    };
});
