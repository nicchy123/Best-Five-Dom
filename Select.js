document.getElementById('select-neymar').addEventListener('click', function () {
    getPlayerName('neymar', 'select-neymar');
});
document.getElementById('select-zico').addEventListener('click', function () {
    getPlayerName('zico', 'select-zico');
});
document.getElementById('select-kallu').addEventListener('click', function () {
    getPlayerName('zico', 'select-kallu');
});
document.getElementById('select-Robinho').addEventListener('click', function () {
    getPlayerName('Robinho', 'select-Robinho');
});
document.getElementById('select-Antony').addEventListener('click', function () {
    getPlayerName('Antony','select-Antony');
});
document.getElementById('select-Vini').addEventListener('click', function () {
    getPlayerName('Vini','select-Vini');
});
document.getElementById('select-Thiago').addEventListener('click', function () {
    getPlayerName('Thiago','select-Thiago');
});
document.getElementById('select-Socrates').addEventListener('click', function () {
    getPlayerName('Socrates','select-Socrates');
});
document.getElementById('select-Casemiro').addEventListener('click', function () {
    getPlayerName('Casemiro','select-Casemiro');
});
document.getElementById('select-Arnov').addEventListener('click', function () {
    getPlayerName('Arnov','select-Arnov');
});
document.getElementById('select-Reinier').addEventListener('click', function () {
    getPlayerName('Reinier','select-Reinier');
});
document.getElementById('select-Philippe').addEventListener('click', function () {
    getPlayerName('Philippe','select-Philippe');
});
const players = [

]


function getPlayerName(athleteName,idName) {
    const selectedPlayer = document.getElementById('selected-player');
    const nameElement = document.createElement('li');
    const nameElementNew = getInnerTextById(athleteName);
    nameElement.innerText = nameElementNew;
    selectedPlayer.appendChild(nameElement);
    document.querySelector(`#${idName}`).disabled = true;
    players.push(athleteName);
    


}

function getInnerTextById(IdName) {
    const PlayernameField = document.getElementById(IdName);
    const Playername = PlayernameField.innerText;
    return Playername;
};

const totalPlayerField = document.getElementById('selected-player');
const totalPlayerString = totalPlayerField.innerText;
const totalPlayer = parseInt(totalPlayerString);



