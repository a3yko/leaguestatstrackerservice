function challengerratio() {
    var testwin = null;
    var testloss = null;
    $.getJSON("./data/challenger1.json", function (json) {
        for (i in json.entries) {
                testwin += json.entries[i].wins;
                testloss += json.entries[i].losses;
        }
        testt = testwin + testloss;
        testt = testwin / testt;
        $('#challengertable').find('#challengerratio').text((testt).toFixed(2));
    });
}

function challengerwins() {
    var testwin = null;
    $.getJSON("./data/challenger1.json", function (json) {
        for (i in json.entries) {
                testwin += json.entries[i].wins;
        }
        testwin = testwin/json.entries.length;
        $('#challengertable').find('#challengerwins').text((testwin).toFixed(2));
    });
}

function filltable(){
    var name = [];
    var amwins = [];
    var amloss = [];
    var vet = [];
    var hs = [];
    var wl = [];
    $.getJSON("./data/challenger1.json", function (json) {
        for (i in json.entries) {
            name[i] = json.entries[i].summonerName;
            amwins[i] = json.entries[i].wins;
            amloss[i] = json.entries[i].losses;
            vet[i] = json.entries[i].veteran;
            hs[i] = json.entries[i].hotStreak;
            wl[i] = (json.entries[i].wins / (json.entries[i].losses + json.entries[i].wins));
        }
        var table = document.getElementById('challengerplayertable');
        var tblbdy = document.createElement("tbody");

        for (var i = 0; i < json.entries.length; i++) {
            var row = document.createElement("tr");

                var cell1 = document.createElement("td");
                var cell2 = document.createElement("td");
                var cell3 = document.createElement("td");
                var cell4 = document.createElement("td");
                var cell5 = document.createElement("td");
                var cell6 = document.createElement("td");

                var cell1txt = document.createTextNode(name[i]);
                var cell2txt = document.createTextNode(amwins[i]);
                var cell3txt = document.createTextNode(amloss[i]);
                var cell4txt = document.createTextNode(vet[i]);
                var cell5txt = document.createTextNode(hs[i]);
                var cell6txt = document.createTextNode((wl[i]).toFixed(2));

                cell1.appendChild(cell1txt);
                cell2.appendChild(cell2txt);
                cell3.appendChild(cell3txt);
                cell4.appendChild(cell4txt);
                cell5.appendChild(cell5txt);
                cell6.appendChild(cell6txt);

                row.appendChild(cell1);
                row.appendChild(cell2);
                row.appendChild(cell3);
                row.appendChild(cell4);
                row.appendChild(cell5);
                row.appendChild(cell6);

            tblbdy.appendChild(row);
        }
        table.appendChild(tblbdy);
    });
}

$(document).ready(function () {
    challengerwins();
    challengerratio();
    filltable();
});