
function getID(summoner){
$.getJSON("./data/summoner.json", function (json) {
   return json.entries[0].accountId;
});
}

function getData(summoner){
    $.getJSON("./data/summonerdata.json", function (json) {
        return json.entries[0].accountId;
    });
}

$(document).ready(function(){




});