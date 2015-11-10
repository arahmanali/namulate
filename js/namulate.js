/// <reference path="jquery-2.0.3.min.js" />
var namulate = angular.module('namulate', []);

namulate.controller('namCtrl', function($scope){

    $scope.textIn = '';
    $scope.Result = '';

    var sum = 0;
    var result = 0;
    var InputNameArray  = [];
    var alphabets = [ "ajs", "bkt", "clu", "dmv", "enw", "fox", "gpy", "hqz", "ir" ];
    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    var colors = [ "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Rose", "Gold" ];

    var prop = [numbers.length];
    prop[0] = "The most dominant personality. A visionary and risk-taker: energetic, passionate, tenacious, flamboyant, and courageous.";
    prop[1] = "Balanced both mentally and physically. Happy, loyal, takes each day as it comes.";
    prop[2] = "Cheerful, charming, magnetic, varelligent, confident, and creative. Somewhat psychic, and enigmatic. A good leader and negotiator.";
    prop[3] = "The perfect balance between the physical and mental. Grounded, logical, not easily influenced, rarely judgmental. An varensely loyal friend and has lots of them.";
    prop[4] = "Optimistic, empathetic, flexible, idealistic, tranquil, patient, devoted. A natural mother.";
    prop[5] = "A brilliant old soul who is varuitive, sensitive, impulsive, curious, and ambitious, with a great lust for life.";
    prop[6] = "Also an old soul. Intense, cerebral, wise, loving, generous, sentimental, and artistic.";
    prop[7] = "Main qualities are strength, love, and leadership. Turns visions varo realities.";
    prop[8] = "Radiates love, joy, compassion, and understanding.";


    $scope.Namulate = function(){

        $scope.TextName = $scope.textIn;
        $scope.textIn = $scope.textIn.replace(/ /g,'');
        $scope.textIn = $scope.textIn.toLowerCase();
        InputNameArray = $scope.textIn.split('');
        //console.log(InputNameArray);

        for(var i in InputNameArray)
        {
            //console.log(InputNameArray[i]);
            for (var j = 0; j < numbers.length; j++)
            {
                var found = alphabets[j].indexOf(InputNameArray[i]) > -1;

                if (found)
                {
                    sum += (j + 1);
                    //console.log("sum counter " + sum);
                    break;
                }
            }
        }
        sum--;
        //console.log("sum final " + sum);
        result = (sum % 9);
        //console.log("result " + result);

        $scope.ResultNum = (result + 1 );
        $scope.ResultColor = colors[result];
        $scope.ResultProp = prop[result];

    };
    $scope.Restart = function($){

        $scope.TextName = '';
        $scope.textIn = '';
        sum = 0;
        result = 0;
        InputNameArray  = [];

    };
});