var namulate = angular.module('namulate', []);

namulate.controller('namCtrl', function($scope){

    $scope.textIn = '';
    $scope.Result = '';

    var sum = 0;
    var result = 0;
    var InputNameArray  = [];
    //var alphabets = [ "ajs", "bkt", "clu", "dmv", "enw", "fox", "gpy", "hqz", "ir" ];
    var alphabets = [ "a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
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

//    Array.prototype.contains = (function(elem)
//    {
//        for (var i in this)
//        {
//            if (this[i] == elem) return true;
//        }
//        return false;
//    });

    $scope.clicked = function(){

        $scope.textIn = $scope.textIn.replace(/ /g,'');
        $scope.textIn = $scope.textIn.toLowerCase();
        InputNameArray = $scope.textIn.split('');
//        console.log(InputNameArray);
        var value = 0;
        for(var i in InputNameArray)
        {
            //console.log(InputNameArray[i]);
            var found = $.inArray(InputNameArray[i], alphabets);
            console.log(found);

            if( found == 0 || found == 9 || found == 18){
                value = 1;
            }
            else if( found == 1 ||found == 10 || found == 19){
                value = 2;
            }
            else if( found == 2 ||found == 11 || found == 20){
                value = 3;
            }
            else if( found == 3 ||found == 12 || found == 21){
                value = 4;
            }
            else if( found == 4 ||found == 13 || found == 22){
                value = 5;
            }
            else if( found == 5 ||found == 14 || found == 23){
                value = 6;
            }
            else if( found == 6 ||found == 15 || found == 24){
                value = 7;
            }
            else if( found == 7 ||found == 16 || found == 25){
                value = 8;
            }
            else{
                value = 9;
            }

            sum += value;



//            //console.log(InputNameArray[i]);
//            for (var j = 0; j < numbers.length; j++)
//            {
//                //console.log(InputNameArray[i]);
//                var alpha = [];
//                alpha = alphabets[j].split('');
//                //console.log(j);
//
//                for(var k in alpha)
//                {
//                    var found = k.indexOf(i);
//                    found++;
//                    console.log(k);
//                }
////                var found = $.inArray(i, alphabets[j] !== -1);
//                if (found)
//                {
//                    sum += j;
////                    console.log("sum counter " + sum);
//                    break;
//                }
//            }
        }
        //sum--;
//        console.log("sum final " + sum);

                //console.log("sum final " + sum);
        result = (sum % 9);
//        console.log("result " + result);
        return $scope.Result = ( (result) + ', ' + colors[result] + ', ' + prop[result] );
    };
});