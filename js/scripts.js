var titleCase = function(words) {
    var word = words.toLowerCase();
    var split_words = word.split(" ");
    var exceptions = ["and", "the", "an", "a", "with", "by", "of", "is"];
    var word_array = [];


    for (var i = 0; i < split_words.length; i++){
    if ($.inArray(split_words[i], exceptions) !== -1) {
        word_array.push(split_words[i]);
    } else {

    var result = split_words[i].charAt().toUpperCase() + split_words[i].slice(1);
    word_array.push(result);
}

    };

    var temp = word_array.join(" ");
    var final = temp.charAt(0).toUpperCase() + temp.slice(1);
    return final;
};

$(document).ready(function() {
    $("form#titlecase").submit(function(event) {
        var words = $('input#words').val();
        var result = titleCase(words);

        $(".final").text(result);
        alert(result);

        $("#result").show();
        event.preventDefault();
    });
});
