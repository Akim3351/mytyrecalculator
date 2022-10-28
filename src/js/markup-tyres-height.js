import tyresHeight from '../data/data-tyres-height';

const leftTyresHeight = document.getElementById("lefttyresheight");
const rightTyresHeight = document.getElementById("righttyresheight");

const tyresHeightMarkup = makeTyresHeightMarkup(tyresHeight);

leftTyresHeight.innerHTML = tyresHeightMarkup;
rightTyresHeight.innerHTML = tyresHeightMarkup;

function makeTyresHeightMarkup(tyresHeight) {
    const markupString = tyresHeight.map(
        item => 
        `        <option 
        key=${item.id} 
        value=${item.height}>
        ${item.height}
        </option>        `
    ).join("");
    return markupString;
};
