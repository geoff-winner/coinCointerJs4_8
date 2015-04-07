var titleCase = function(words) {
    var word = words.toLowerCase();
    var split_words = word.split(" ");
    var exceptions = /[the| and| an| a | with| by| of]/g;
    var word_array = [];

    for (var i = 0; i < split_words.length; i++){
        var test = "";
        var test = split_words[i].match(exceptions);
        if (test[0]){
        var    result = split_words[i];
        word_array.push(result);
        return test;
        } else {

    var result = split_words[i].charAt().toUpperCase() + split_words[i].slice(1);
    word_array.push(result);
    };
};

    var final = word_array.join(" ");
    return final;
};
