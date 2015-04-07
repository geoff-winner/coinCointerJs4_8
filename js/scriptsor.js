var pigLatin = function(string){
    var vowels = "aeiou";
    var letter = string[0];
    var exp = /[a|e|i|o|u]/g;
    var qu_check = string.slice(0,2);

    if (qu_check == "qu") {
           var string = string.slice(2)+"quay";}


    else if ($.inArray(letter, vowels) !== -1) {
            string = string + "ay";
    } else if
            (string.indexOf(string.match(exp)) == -1){
                string = string + "ay";
        } else {

                var match_result = string.match(exp);
                var result = string.indexOf(match_result[0]);
                var string = string.slice(result) + string.slice(0, result) +"ay";
            }


        return string;





};
