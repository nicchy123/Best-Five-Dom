document.getElementById('select-neymar').addEventListener('click',function(){
    getPlayerName('neymar');
});
document.getElementById('select-zico').addEventListener('click',function(){
    getPlayerName('zico');
});
document.getElementById('select-kallu').addEventListener('click',function(){
    getPlayerName('kallu');
});
document.getElementById('select-Robinho').addEventListener('click',function(){
    getPlayerName('Robinho');
});
document.getElementById('select-Antony').addEventListener('click',function(){
    getPlayerName('Antony');
});
document.getElementById('select-Vini').addEventListener('click',function(){
    getPlayerName('Vini');
});
document.getElementById('select-Thiago').addEventListener('click',function(){
    getPlayerName('Thiago');
});
document.getElementById('select-Socrates').addEventListener('click',function(){
    getPlayerName('Socrates');
});
document.getElementById('select-Casemiro').addEventListener('click',function(){
    getPlayerName('Casemiro');
});
document.getElementById('select-Arnov').addEventListener('click',function(){
    getPlayerName('Arnov');
});


function getPlayerName(athleteName){
    const selectedPlayer = document.getElementById('selected-player');
    const nameElement = document.createElement('li'); 
    const nameElementNew = getInnerTextById(athleteName);
    nameElement.innerText = nameElementNew;
    selectedPlayer.appendChild(nameElement);
    document.getElementById('select').style.
}

function getInnerTextById(IdName){
    const PlayernameField = document.getElementById(IdName);
    const Playername = PlayernameField.innerText;
    return Playername;
};