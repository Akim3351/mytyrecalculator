import tyresDiameter from '../data/data-tyres-diameter';

const leftTyresDiameter = document.getElementById("lefttyresdiameter");
const rightTyresDiameter = document.getElementById("righttyresdiameter");
const leftDisksDiameter = document.getElementById("leftdisksdiameter");
const rightDisksDiameter = document.getElementById("rightdisksdiameter");


const tyresDiameterMarkup = makeTyresDiameterMarkup(tyresDiameter);

leftTyresDiameter.innerHTML = tyresDiameterMarkup;
rightTyresDiameter.innerHTML = tyresDiameterMarkup;
leftDisksDiameter.innerHTML = tyresDiameterMarkup;
rightDisksDiameter.innerHTML = tyresDiameterMarkup;


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
