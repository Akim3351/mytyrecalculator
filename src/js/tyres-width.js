import tyresWidth from '../data/tyres-width';

const leftTyresWidth = document.getElementById("lefttyreswidth");
const rightTyresWidth = document.getElementById("righttyreswidth");

const tyresWidthMarkup = makeTyresWidthMarkup(tyresWidth);

leftTyresWidth.innerHTML = tyresWidthMarkup;
rightTyresWidth.innerHTML = tyresWidthMarkup;

function makeTyresWidthMarkup(tyresWidth) {

    const markupString = tyresWidth.map(
        item => 
        `        <option 
        key=${item.id} 
        value=${item.width}>
        ${item.width}
        </option>        `
    ).join("");
    return markupString;
};
