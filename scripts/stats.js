var statI = null;
var statII = null;
var statIII = null;
var statIV = null;
var pointsI = null;
var pointsII = null;
var pointsIII = null;
var pointsIV = null;
var statchart = null;
var statValues = null;
var ptvalues = null;
var ptchart = null;
function Istat(tier) {
   $.getJSON("./data/" + tier + "1.json", function (json) {
        for (i in json) {
            statI += json[i].wins;
        }
         statI = (statI / json.length);
    });
   return statI;
}

function IIstat(tier) {
    $.getJSON("./data/" + tier + "2.json", function (json) {
        for (i in json) {
            statII += json[i].wins;
        }
        statII = (statII / json.length);
    });
    return statII;
}

function IIIstat(tier) {
    $.getJSON("./data/" + tier + "3.json", function (json) {
        for (i in json) {
            statIII += json[i].wins;
        }
        statIII = (statIII / json.length);
    });
    return statIII;
}

function IVstat(tier) {
    $.getJSON("./data/" + tier + "4.json", function (json) {
        for (i in json) {
            statIV += json[i].wins;
        }
        statIV = (statIV / json.length);
    });
    return statIV;
}

function Ipts(tier) {
    $.getJSON("./data/" + tier + "1.json", function (json) {
        for (i in json) {
            pointsI += json[i].leaguePoints;
        }
        pointsI = (pointsI / json.length);
    });
    return pointsI;
}

function IIpts(tier) {
    $.getJSON("./data/" + tier + "2.json", function (json) {
        for (i in json) {
            pointsII += json[i].leaguePoints;
        }
        pointsII = (pointsII / json.length);
    });
    return pointsII;
}

function IIIpts(tier) {
    $.getJSON("./data/" + tier + "3.json", function (json) {
        for (i in json) {
            pointsIII += json[i].leaguePoints;
        }
        pointsIII = (pointsIII / json.length);
    });
    return pointsIII;
}

function IVpts(tier) {
    $.getJSON("./data/" + tier + "4.json", function (json) {
        for (i in json) {
            pointsIV += json[i].leaguePoints;
        }
        pointsIV = (pointsIV / json.length);
    });
    return pointsIV;
}

function fillI() {
    var stat = null;
    var pts = null;
    var k = 1;
    for(var j = 1; j < 5; j++) {
        $.getJSON("./data/diamond" + j + ".json", function (json) {
            for (i in json) {
                stat += json[i].wins;
                pts += json[i].leaguePoints;
            }
            stat = (stat / json.length);
            pts = (pts / json.length);
            switch (k++) {
                case 1:
                    $('#stattable').find('#Istat').text((stat).toFixed(2));
                    $('#ptstable').find('#Ipts').text((pts).toFixed(2));
                    break;
                case 2:
                    $('#stattable').find('#IIstat').text((stat).toFixed(2));
                    $('#ptstable').find('#IIpts').text((pts).toFixed(2));
                    break;
                case 3:
                    $('#stattable').find('#IIIstat').text((stat).toFixed(2));
                    $('#ptstable').find('#IIIpts').text((pts).toFixed(2));
                    break;
                case 4:
                    $('#stattable').find('#IVstat').text((stat).toFixed(2));
                    $('#ptstable').find('#IVpts').text((pts).toFixed(2));
                    break;
            }
        });

    }
}

function fillTable(tier) {
        $('#stattable').find('#Istat').text(Istat(tier).toFixed(2));
        $('#stattable').find('#IIstat').text(IIstat(tier).toFixed(2));
        $('#stattable').find('#IIIstat').text(IIIstat(tier).toFixed(2));
        $('#stattable').find('#IVstat').text(IVstat(tier).toFixed(2));
        $('#ptstable').find('#Ipts').text(Ipts(tier).toFixed(2));
        $('#ptstable').find('#IIpts').text(IIpts(tier).toFixed(2));
        $('#ptstable').find('#IIIpts').text(IIIpts(tier).toFixed(2));
        $('#ptstable').find('#IVpts').text(IVpts(tier).toFixed(2));
}

function BuildChart(values, chartTitle, ctx) {
    Chart.defaults.global.defaultFontColor = 'goldenrod';
    Chart.defaults.global.defaultFontFamily = 'Fredoka One';
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["I","II", "III", "IV"],
            datasets: [{
                label: chartTitle,
                data: [values[0], values[1], values[2], values[3]],
                backgroundColor: [
                    'pink',
                    'blue',
                    'limegreen',
                    'orange',
                ],
                borderColor: [
                    'pink',
                    'blue',
                    'limegreen',
                    'orange',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend:{
                display: true,
            }
        }
    });
    return myChart;
}



$(document).ready(function () {
    fillI();
    selected = 'diamond';
    statValues = [Istat(selected), IIstat(selected), IIIstat(selected), IVstat(selected)];
    ptvalues = [Ipts(selected), IIpts(selected), IIIpts(selected), IVpts(selected)];

    setTimeout(ptchart = BuildChart(ptvalues, "Avg Points Per Divison", document.getElementById('ptschart').getContext('2d')), 10000);
    setTimeout(statchart = BuildChart(statValues, "Average Wins Per Division", document.getElementById('statchart').getContext('2d')), 10000);


    $("#tier").change(function () {
        var selected = document.querySelector('#tier').value;
        fillTable(selected);

        statchart.destroy();
        ptchart.destroy();
        statValues = [Istat(selected), IIstat(selected), IIIstat(selected), IVstat(selected)];
        ptvalues = [Ipts(selected), IIpts(selected), IIIpts(selected), IVpts(selected)];

        console.log(statValues);

        ptchart = BuildChart(ptvalues, "Avg Points Per Divison", document.getElementById('ptschart').getContext('2d'));
        statchart = BuildChart(statValues, "Average Wins Per Division", document.getElementById('statchart').getContext('2d'));



    });

});