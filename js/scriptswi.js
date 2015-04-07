var titleCase = function(words) {
    var word = words.toLowerCase();
    var split_words = word.split(" ");
    var word_array = [];
    for (var i = 0; i < split_words.length; i++){

    var result = split_words[i].charAt().toUpperCase() + split_words[i].slice(1);
    word_array.push(result);
    };
    var final = word_array.join(" ");
    return final;
};
