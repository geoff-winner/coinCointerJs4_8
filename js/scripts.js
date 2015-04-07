var pigLatin = function(string){
    var vowels = "aeiou";
    var letter = string[0];
    var exp = /[a|e|i|o|u]/g;
    var con = /[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/g;
    var qu_check = string.slice(0,2);

    if (qu_check == "qu") {
        var string = string.slice(2)+"quay";
        }
        else if (letter === 'y'){var string = string.slice(1) + "yay";

        }
        //word starts with a vowel
        else if (letter.indexOf(letter.match(exp)) !== -1) {string = string + "ay";
        }
        else if
        //no vowels found, string are consonants only ex. "n", "str"
                (letter.indexOf(letter.match(con)) !== -1){
                    var match_result = string.match(exp);
                    var result = string.indexOf(match_result[0]);
                    var string = string.slice(result) + string.slice(0, result) +"ay";
                    }
                    return string;

        };

$(document).ready(function() {
    $("form#piglatin").submit(function(event) {
        var check = $("input#word").val();
        var result = pigLatin(check);

        alert(result);
        event.preventDefault();
    });
});
