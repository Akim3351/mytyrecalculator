const tyresForm = document.getElementById("tyresform");


tyresForm.addEventListener('change', onFormChange);

function onFormChange(event) {
    event.preventDefault;
    console.log("ka-chink!!");
    // input selectors
    const leftTyresWidth = document.getElementById("lefttyreswidth").value;
    const rightTyresWidth = document.getElementById("righttyreswidth").value;
    const leftTyresHeight = document.getElementById("lefttyresheight").value;
    const rightTyresHeight = document.getElementById("righttyresheight").value;
    const leftTyresDiameter = document.getElementById("lefttyresdiameter").value;
    const rightTyresDiameter = document.getElementById("righttyresdiameter").value;

    // table cells selectors

    const oldTyresWidthCell = document.getElementById("oldtyreswidth");
    const newTYresWidthCell = document.getElementById("newtyreswidth");
    const oldTyresHeightCell = document.getElementById("oldtyresheight");
    const newTyresHeightCell = document.getElementById("newtyresheight");
    const leftTyresDiameterCell = document.getElementById("oldtyresdiameter");
    const rightTyresDiameterCell = document.getElementById("newdtyresiameter");

    // difference selectors
    const tyresWidthDifferenceCell = document.getElementById("tyreswidthdifference");
    const tyresHeightDifferenceCell = document.getElementById("tyresheightdifference");
    const tyresDiameterDifferenceCell = document.getElementById("tyresdiameterdifference");

    oldTyresWidthCell.innerText = leftTyresWidth;
    newTYresWidthCell.innerText = rightTyresWidth;
    oldTyresHeightCell.innerText = Number(leftTyresWidth) * Number(leftTyresHeight) / 100;
    newTyresHeightCell.innerText = Number(rightTyresWidth) * Number(rightTyresHeight) / 100;
    leftTyresDiameterCell.innerText = Number((Number(leftTyresWidth) * Number(leftTyresHeight) / 1000) * 2) + (Number(leftTyresDiameter * 2.5));
    rightTyresDiameterCell.innerText = Number((Number(rightTyresWidth) * Number(rightTyresHeight) / 1000) * 2) + (Number(rightTyresDiameter * 2.5));

    if (leftTyresWidth > rightTyresWidth) {
        const tyresWidthDifference = Number((leftTyresWidth - rightTyresWidth) / 10);
        tyresWidthDifferenceCell.innerText = `The new tire is narrower than the old one by ${tyresWidthDifference} cm`;
    } else if (leftTyresWidth < rightTyresWidth) {
        const tyresWidthDifference = Number((rightTyresWidth - leftTyresWidth) / 10);
        tyresWidthDifferenceCell.innerText = `The new tire is wider than the old one by ${tyresWidthDifference} cm`;
    } else if (leftTyresWidth === rightTyresWidth) {
        tyresWidthDifferenceCell.innerText = 'Tire width is the same';    
    };

    const oldTyresProfile = Number(leftTyresWidth) * Number(leftTyresHeight) / 100;
    const newTyresProfile = Number(rightTyresWidth) * Number(rightTyresHeight) / 100;

    if (oldTyresProfile > newTyresProfile) {
        const tyresProfileDifference = Number(oldTyresProfile - newTyresProfile);
        tyresHeightDifferenceCell.innerText = `The profile height of the new tire is lower than the old one by ${tyresProfileDifference} cm`;
    } else if (newTyresProfile > oldTyresProfile) {
        const tyresProfileDifference = Number(newTyresProfile - oldTyresProfile);
        tyresHeightDifferenceCell.innerText = `The profile height of the new tire is higher than the old one by ${tyresProfileDifference} cm`;
    } else if (newTyresProfile === oldTyresProfile) {
        tyresHeightDifferenceCell.innerText = 'The profile height is the same';
    }

    const oldWheelHeight = Number((Number(leftTyresWidth) * Number(leftTyresHeight) / 1000) * 2) + (Number(leftTyresDiameter * 2.5));
    const newWheelHeight = Number((Number(rightTyresWidth) * Number(rightTyresHeight) / 1000) * 2) + (Number(rightTyresDiameter * 2.5));

    if (oldWheelHeight > newWheelHeight) {
        const wheelHeightDifference = Number(oldWheelHeight - newWheelHeight).toFixed(2);
        tyresDiameterDifferenceCell.innerText = `New wheel will be lower than the old one by ${wheelHeightDifference} cm. The clearance of the car will decrease by ${Number(wheelHeightDifference / 2).toFixed(2)} cm.`;
    } else if (newWheelHeight > oldWheelHeight) {
        const wheelHeightDifference = Number(newWheelHeight - oldWheelHeight).toFixed(2);
        tyresDiameterDifferenceCell.innerText = `New wheel will be higher than the old one by ${wheelHeightDifference} cm. The clearance of the car will increase by ${Number(wheelHeightDifference / 2).toFixed(2)} cm.`;
    } else if (newWheelHeight === oldWheelHeight) {
        tyresDiameterDifferenceCell.innerText = 'Wheel height is the same. The clearance of the car will not change';
    }
}