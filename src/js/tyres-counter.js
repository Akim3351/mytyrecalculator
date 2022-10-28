const tyresForm = document.getElementById("tyresform");


tyresForm.addEventListener('change', onFormChange);

function onFormChange(event) {
    event.preventDefault;
    // console.log("ka-chink!!");
    // console.log(event.target);

    
    // input selectors
    const leftTyresWidth = document.getElementById("lefttyreswidth").value;
    const rightTyresWidth = document.getElementById("righttyreswidth").value;
    const leftTyresHeight = document.getElementById("lefttyresheight").value;
    const rightTyresHeight = document.getElementById("righttyresheight").value;
    const leftTyresDiameter = document.getElementById("lefttyresdiameter").value;
    const rightTyresDiameter = document.getElementById("righttyresdiameter").value;
    const leftDisksDiameter = document.getElementById("leftdisksdiameter").value;
    const rightDisksDiameter = document.getElementById("rightdisksdiameter").value;
    const leftTyresDiameterSelect = document.getElementById("lefttyresdiameter");
    const rightTyresDiameterSelect = document.getElementById("righttyresdiameter");
    const leftDisksDiameterSelect = document.getElementById("leftdisksdiameter");
    const rightDisksDiameterSelect = document.getElementById("rightdisksdiameter");
    const leftDisksWidth = document.getElementById("leftdiskswidth").value;
    const rightDisksWidth = document.getElementById("rightdiskswidth").value;
    const leftDisksET = document.getElementById("leftdiskset").value;
    const rightDisksET = document.getElementById("rightdiskset").value;

    const disksSwicthCheckBox = document.getElementById("disksswitch");


    // table cells selectors

    const oldTyresWidthCell = document.getElementById("oldtyreswidth");
    const newTYresWidthCell = document.getElementById("newtyreswidth");
    const oldTyresHeightCell = document.getElementById("oldtyresheight");
    const newTyresHeightCell = document.getElementById("newtyresheight");
    const leftTyresDiameterCell = document.getElementById("oldtyresdiameter");
    const rightTyresDiameterCell = document.getElementById("newdtyresiameter");

    const oldDisksWidthCell = document.getElementById("olddiskswidth");
    const newDisksWidthCell = document.getElementById("newddiskswidth");
    const oldWheelsETCell = document.getElementById("oldwheelset");
    const newWheelsETCell = document.getElementById("newdwheelset");

    // difference selectors
    const tyresWidthDifferenceCell = document.getElementById("tyreswidthdifference");
    const tyresHeightDifferenceCell = document.getElementById("tyresheightdifference");
    const tyresDiameterDifferenceCell = document.getElementById("tyresdiameterdifference");

    const disksDifferenceCell = document.getElementById("disksdifference");

    if (event.target === disksSwicthCheckBox) {
        return;
    } else if (event.target === leftTyresDiameterSelect) {
        leftDisksDiameterSelect.value = leftTyresDiameter;
    } else if (event.target === rightTyresDiameterSelect) {
        rightDisksDiameterSelect.value = rightTyresDiameter;
    } else if (event.target === leftDisksDiameterSelect) {
        leftTyresDiameterSelect.value = leftDisksDiameter
    } else if (event.target === rightDisksDiameterSelect) {
        rightTyresDiameterSelect.value = rightDisksDiameter
    };

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

    if (disksSwicthCheckBox.checked === true) {
        oldDisksWidthCell.innerText = Number(leftDisksWidth * 2.5);
        newDisksWidthCell.innerText = Number(rightDisksWidth * 2.5);
        oldWheelsETCell.innerText = leftDisksET;
        newWheelsETCell.innerText = rightDisksET;

        const oldWheelToBodyGap = Number(((leftDisksWidth * 2.5) / 2) - (Number(leftDisksET) / 10));
        
        const newWheelToBodyGap = Number(((rightDisksWidth * 2.5) / 2) - (Number(rightDisksET) / 10));

        if (oldWheelToBodyGap > newWheelToBodyGap) {
            const diff = Number(oldWheelToBodyGap - newWheelToBodyGap).toFixed(2);
            const phraze = `The wheel is closer to the suspension and body elements by ${diff} cm`;
            disksDifferenceCell.innerText = phraze;
        } else if (oldWheelToBodyGap < newWheelToBodyGap) {
            const diff = Number(newWheelToBodyGap - oldWheelToBodyGap).toFixed(2);
            const phraze = `The wheel is further from the suspension and body elements by ${diff} cm`;
            disksDifferenceCell.innerText = phraze;
        } else {
            const phraze = 'The gap between wheel and the suspension and body elements is the same';
            disksDifferenceCell.innerText = phraze;
        }

    } else {
        oldDisksWidthCell.innerText = "";
        newDisksWidthCell.innerText = "";
        oldWheelsETCell.innerText = "";
        newWheelsETCell.innerText = "";
        disksDifferenceCell.innerText = "";
    }
};