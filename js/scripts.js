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
        return penniesTotal;
        return nickelsTotal;
        return dimesTotal;
        return quartersTotal;
    };

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
        return penniesTotal2;
        return nickelsTotal2;
        return dimesTotal2;
        return quartersTotal2;
    };
