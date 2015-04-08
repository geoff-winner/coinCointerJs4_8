var coinCounter = function(amount, amount2) {
    var amount = amount;
    var amount2 = amount2;
    var quartersTotal = 0;
    var dimesTotal = 0;
    var nickelsTotal = 0;
    var penniesTotal = 0;
    var quartersTotal2 = 0;
    var dimesTotal2 = 0;
    var nickelsTotal2 = 0;
    var penniesTotal2 = 0;
    var array1 = [];
    var array2 = [];

    while(amount >= 1){
        quartersTotal = (parseInt(amount / 25));
        amount -= (quartersTotal * 25);
        dimesTotal = (parseInt(amount / 10));
        amount -= (dimesTotal * 10);

        nickelsTotal = (parseInt(amount / 5));
        amount -= (nickelsTotal * 5);
        penniesTotal = (parseInt(amount / 1));
        amount -= (penniesTotal * 1);

        }
        array1.push(penniesTotal);
        array1.push(nickelsTotal);
        array1.push(dimesTotal);
        array1.push(quartersTotal);
        return array1;

    while(amount2 >= 1){
        quartersTotal2 = (parseInt(amount2 / 25));
        amount2 -= (quartersTotal2 * 25);
        dimesTotal2 = (parseInt(amount2 / 10));
        amount2 -= (dimesTotal2 * 10);

        nickelsTotal2 = (parseInt(amount2 / 5));
        amount2 -= (nickelsTotal2 * 5);
        penniesTotal2 = (parseInt(amount2 / 1));
        amount2 -= (penniesTotal2 * 1);

        }
        array1.push(penniesTotal2);
        array1.push(nickelsTotal2);
        array1.push(dimesTotal2);
        array1.push(quartersTotal2);
        return array2;
        };

$(document).ready(function() {
    $("form#coincounter").submit(function(event) {
        var amount = $('input#amount').val();
        var amount2 = $('input#amount2').val();
        var result = coinCounter(amount);
        var result2 = coinCounter(amount2);

        $('.penniesTotal').text(result[0]);
        $('.nickelsTotal').text(result[1]);
        $('.dimesTotal').text(result[2]);
        $('.quartersTotal').text(result[3]);

        $('.penniesTotal2').text(result2[0]);
        $('.nickelsTotal2').text(result2[1]);
        $('.dimesTotal2').text(result2[2]);
        $('.quartersTotal2').text(result2[3]);

        $('#result').show();
        event.preventDefault();
    });
});
