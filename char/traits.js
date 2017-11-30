var hope = 0;
var melancholy = 0;
var fear = 0;
var bravery = 0;
var imagination = 0;
var kills = 0;
var apathy = 0;
var food = 5;
var firstTarget;
var inventory = [
    {name: "chemical light", amount: 1},
    {name: "food ration", amount: 5},
    {name: "medkit", amount: 2},
    {name: "gas mask", amount: 1},
];
var thomasLasky = {
    alive: true,
    crippled: false,
    hp: 30,
};

function die()
{
    window.location.href = '../char/death.html';
}
function lightOn()
{
    dialogBox.style.backgroundColor = "#f0f0f0";
    dialogBox.style.color = "#000000";
}
function lightOff()
{
    dialogBox.style.backgroundColor = "#000000";
    dialogBox.style.color = "#f0f0f0";
}
