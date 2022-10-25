'use strict';

function validateAndColored(regular, DOM){
    return regular.test(DOM.value);
}

function colored(DOM, boolean){
    let color = "black";
    if(!boolean) color = "red";
    let border = "solid 1px " + color;
    DOM.style.border = border;
}

function addToInfoBlock(DOM, idInfo){
    let DOMInfo = document.getElementById(idInfo);
    DOMInfo.innerHTML = DOM.value;
}

function showInfoBlock(flag){
    if(flag){
        document.getElementsByClassName("blockWithInformation")[0].style = "visibility: visible;";
    }
    else{
        document.getElementsByClassName("blockWithInformation")[0].style = "visibility: hidden;";
    }
}

function checkWithRegularExpression(){
    let ids = ["name", "group", "phone", "idCard", "facultati"];
    let idsInfo = ["nameInfo", "groupInfo", "phoneInfo", "idCardInfo", "facultatiInfo"];
    let requlars = ['^[A-Z][a-z]+[ ][A-Z][.][ ][A-Z][.]$', '^[A-Z]{2}[-][0-9]{2}$', '^[+][3][8][0][0-9]{9}$', '^[A-Z]{2}[ ][№][0-9]{6}$', '^[A-Z]{3,4}$'];

    let flag = true;
    for( let i = 0; i < ids.length; i++){
        let DOM = document.getElementById(ids[i]);
        let validate = validateAndColored(new RegExp(requlars[i]), DOM);
        colored(DOM, validate);
        addToInfoBlock(DOM, idsInfo[i]);
        if(!validate) flag = false;
    }
    
    showInfoBlock(flag);
}


function onHover (idElem){
    let elem = document.getElementById(idElem); 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.value = "#" + randomColor;
}

function coloredColomn(nameColumn){
    let columns = document.getElementsByClassName(nameColumn);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    Array.from(columns).forEach(element => {
        element.value = "#" + randomColor;
    });
}

function coloredCell(idName){
    let input = document.getElementById(idName);
    input.showPicker();
}