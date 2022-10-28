import disksWidth from '../data/data-disks-width';

const leftDisksWidth = document.getElementById("leftdiskswidth");
const rightDisksWidth = document.getElementById("rightdiskswidth");

const disksWidthMarkup = makeDisksWidthMarkup(disksWidth);

leftDisksWidth.innerHTML = disksWidthMarkup;
rightDisksWidth.innerHTML = disksWidthMarkup;

function makeDisksWidthMarkup(disksWidth) {
    const markupString = disksWidth.map(
        item => 
        `<option 
        key=${item.id} 
        value=${item.width}>
        ${item.width}
        </option>`
    ).join("");
    return markupString;
};