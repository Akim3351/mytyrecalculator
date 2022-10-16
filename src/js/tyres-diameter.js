import tyresDiameter from '../data/tyres-diameter';

const leftTyresDiameter = document.getElementById("lefttyresdiameter");
const rightTyresDiameter = document.getElementById("righttyresdiameter");

const tyresDiameterMarkup = makeTyresDiameterMarkup(tyresDiameter);

leftTyresDiameter.innerHTML = tyresDiameterMarkup;
rightTyresDiameter.innerHTML = tyresDiameterMarkup;

function makeTyresDiameterMarkup(tyresDiameter) {
    const markupString = tyresDiameter.map(
        item => 
        `        <option 
        key=${item.id} 
        value=${item.diameter}>
        ${item.diameter}
        </option>        `
    ).join("");
    return markupString;
};
