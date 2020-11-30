function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(Get('https://clwo.eu/jailbreak/api/v2/ttt_shopstats.php'));
var last_purchases = json_obj.data.LastPurchaseDateTime.data;
var purchase_index = [];
json_obj = JSON.parse(Get('https://clwo.eu/jailbreak/api/v2/ttt_karma.php'));
var top_karma = json_obj.data;

function lastPurchasesTable() {
    var d = new Date();
    var n = d.getTimezoneOffset();
    for (var item in last_purchases) {
            purchase_index.push(item);
    }
    const table = document.getElementById("purchaseData");
    var i;
    for(i=0; i<8; i++) {
        var key = purchase_index[i];
        let row = table.insertRow();
        let item = row.insertCell(0);
        item.innerHTML = key;
        let time = row.insertCell(1);
        var purchase_time = String(Number(last_purchases[key].substring(11, 13))+1)+last_purchases[key].substring(13, 16);
        time.innerHTML = purchase_time;
    }
}

function topMonthKarmaTable(){
    const table = document.getElementById("karmaData");
    for(var i = 0; i < 8; i++) {
        var player = top_karma[i];
        let row = table.insertRow();
        let account = row.insertCell(0);
        var json_player= JSON.parse(Get('https://clwo.eu/jailbreak/api/v2/accounthelper.php?AccountID='+player.AccountID));
        var player_profile = json_player.SteamData;
        console.log();
        account.innerHTML = '<a href="'+player_profile.profileurl+'">'+player_profile.personaname+'</a>';
        let karma = row.insertCell(1);
        karma.innerHTML = player.Karma;
    }
}

lastPurchasesTable();
topMonthKarmaTable();