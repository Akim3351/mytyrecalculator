import disksEt from "../data/data-disks-et";

const leftDisksET = document.getElementById("leftdiskset");
const rightDisksET = document.getElementById("rightdiskset");

const disksEtMarkup = makeDisksEtMarkup(disksEt);

leftDisksET.innerHTML = disksEtMarkup;
rightDisksET.innerHTML = disksEtMarkup;

function makeDisksEtMarkup(disksEt) {
    const markupString = disksEt.map(
        item =>
        `<option 
        key=${item.id} 
        value=${item.et}>
        ${item.et}
        </option>`
    ).join("");
    return markupString;
};