
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

const randomNumber = (anArray) => {
    let length = anArray.length
    return Math.floor(Math.random()*length);
}

const changingText =() => {
    let subject = who [randomNumber(who)] + " ";
    let verb = action [randomNumber(action)] + " ";
    let object = action [randomNumber(what)] + " ";
    let place = action [randomNumber(when)] + " ";
    let phrase= subject+verb+object+place;
    let excuse= document.getElementById("excuse");
    excuse.innerHTML = phrase;
}

