var playercount_json =JSON.parse(Get('https://clwo.eu/jailbreak/api/v2/players.php?SID=101'));
document.getElementById("playercount").innerHTML = playercount_json.results;