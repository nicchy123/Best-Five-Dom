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
    getPlayerName('Antony', 'select-Antony');
});
document.getElementById('select-Vini').addEventListener('click', function () {
    getPlayerName('Vini', 'select-Vini');
});
document.getElementById('select-Thiago').addEventListener('click', function () {
    getPlayerName('Thiago', 'select-Thiago');
});
document.getElementById('select-Socrates').addEventListener('click', function () {
    getPlayerName('Socrates', 'select-Socrates');
});
document.getElementById('select-Casemiro').addEventListener('click', function () {
    getPlayerName('Casemiro', 'select-Casemiro');
});
document.getElementById('select-Arnov').addEventListener('click', function () {
    getPlayerName('Arnov', 'select-Arnov');
});
document.getElementById('select-Reinier').addEventListener('click', function () {
    getPlayerName('Reinier', 'select-Reinier');
});
document.getElementById('select-Philippe').addEventListener('click', function () {
    getPlayerName('Philippe', 'select-Philippe');
});
document.getElementById('calc-total').addEventListener('click', function () {
    const playerPreviousExpensesAmount = getInnerTextById('Expenses');
    const managerExpences = getInputValueById('manager-field');
    const coachExpences = getInputValueById('coach-field');
    const totalexpenseAmount = playerPreviousExpensesAmount + managerExpences + coachExpences;
    const totalexpense = document.getElementById('total-expense');
    totalexpense.innerText = totalexpenseAmount;


})
document.getElementById('calc').addEventListener('click', function () {
    const totalPlayerExpenseField = getInputElementById('Expenses');
    const playerExpenseField = getInputValueById('expense-field');
    const playerNumberField = players.length;
    const totalPlayerExpenseAmount = playerNumberField * playerExpenseField;
    totalPlayerExpenseField.innerText = totalPlayerExpenseAmount;
})
const players = [
]
function getPlayerName(athleteName, idName) {
    const selectedPlayer = document.getElementById('selected-player');
    const nameElement = document.createElement('li');
    const nameElementNew = getInnerTextElementById(athleteName);
    nameElement.innerText = nameElementNew;
    selectedPlayer.appendChild(nameElement);
    document.querySelector(`#${idName}`).disabled = true;
    players.push(athleteName);
}
function getInnerTextElementById(IdName) {
    const PlayernameField = document.getElementById(IdName);
    const Playername = PlayernameField.innerText;
    return Playername;
};
function getInnerTextById(IdNameNew) {
    const PlayernameFieldElement = document.getElementById(IdNameNew);
    const PlayernameString = PlayernameFieldElement.innerText;
    const Playername = parseFloat(PlayernameString);
    return Playername;
};
function getInputValueById(fieldID) {
    const inputFieldName = document.getElementById(fieldID);
    const inputFieldNameString = inputFieldName.value;
    const inputFieldvalue = parseFloat(inputFieldNameString);
    return inputFieldvalue;

};
function getInputElementById(totalfieldID) {
    const totalInputFieldName = document.getElementById(totalfieldID);
    const totalInputFieldNameString = totalInputFieldName.value;
    return totalInputFieldName;
};





