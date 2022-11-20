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
    const etDifferenceCell = document.getElementById("etdifference");

    const differenceText = document.getElementById("difftext");

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

    differenceText.innerHTML = "";
    differenceText.insertAdjacentHTML("beforeend", `
    <p>The comparison result is:</p>`);

    if (leftTyresWidth > rightTyresWidth) {
        const tyresWidthDifference = Number(leftTyresWidth - rightTyresWidth);
        tyresWidthDifferenceCell.innerText = `${tyresWidthDifference} mm`;
        differenceText.insertAdjacentHTML("beforeend", `<span>The new tire is narrower than the old one by ${tyresWidthDifference} mm. </span>`);
    } else if (leftTyresWidth < rightTyresWidth) {
        const tyresWidthDifference = Number(rightTyresWidth - leftTyresWidth);
        tyresWidthDifferenceCell.innerText = `${tyresWidthDifference} mm`;
        differenceText.insertAdjacentHTML("beforeend", `<span>The new tire is wider than the old one by ${tyresWidthDifference} mm. </span>`);
    } else if (leftTyresWidth === rightTyresWidth) {
        tyresWidthDifferenceCell.innerText = 'The same';
        differenceText.insertAdjacentHTML("beforeend", `<span>Tire width is the same. </span>`);
    };

    const oldTyresProfile = Number(leftTyresWidth) * Number(leftTyresHeight) / 100;
    const newTyresProfile = Number(rightTyresWidth) * Number(rightTyresHeight) / 100;

    if (oldTyresProfile > newTyresProfile) {
        const tyresProfileDifference = Number(oldTyresProfile - newTyresProfile);
        tyresHeightDifferenceCell.innerText = `${tyresProfileDifference} mm`;
        differenceText.insertAdjacentHTML("beforeend", `<span>The profile height of the new tire is lower than the old one by ${tyresProfileDifference} mm. </span>`);
    } else if (newTyresProfile > oldTyresProfile) {
        const tyresProfileDifference = Number(newTyresProfile - oldTyresProfile);
        tyresHeightDifferenceCell.innerText = `${tyresProfileDifference} mm`;
        differenceText.insertAdjacentHTML("beforeend", `<span>The profile height of the new tire is higher than the old one by ${tyresProfileDifference} mm. </span>`);
    } else if (newTyresProfile === oldTyresProfile) {
        tyresHeightDifferenceCell.innerText = 'The same';
        differenceText.insertAdjacentHTML("beforeend", `<span>The profile height is the same. </span>`);
    }

    const oldWheelHeight = Number((Number(leftTyresWidth) * Number(leftTyresHeight) / 1000) * 2) + (Number(leftTyresDiameter * 2.5));
    const newWheelHeight = Number((Number(rightTyresWidth) * Number(rightTyresHeight) / 1000) * 2) + (Number(rightTyresDiameter * 2.5));

    if (oldWheelHeight > newWheelHeight) {
        const wheelHeightDifference = Number(oldWheelHeight - newWheelHeight).toFixed(2);
        tyresDiameterDifferenceCell.innerText = `${wheelHeightDifference} mm`;
        differenceText.insertAdjacentHTML("beforeend", `<span>New wheel will be lower than the old one by ${wheelHeightDifference} mm. The clearance of the car will decrease by ${Number(wheelHeightDifference / 2).toFixed(2)} mm. </span>`);
    } else if (newWheelHeight > oldWheelHeight) {
        const wheelHeightDifference = Number(newWheelHeight - oldWheelHeight).toFixed(2);
        tyresDiameterDifferenceCell.innerText = `${wheelHeightDifference} mm`;
        differenceText.insertAdjacentHTML("beforeend", `<span>New wheel will be higher than the old one by ${wheelHeightDifference} mm. The clearance of the car will increase by ${Number(wheelHeightDifference / 2).toFixed(2)} mm. </span>`);
    } else if (newWheelHeight === oldWheelHeight) {
        tyresDiameterDifferenceCell.innerText = 'The same';
        differenceText.insertAdjacentHTML("beforeend", `<span>Wheel height is the same. The clearance of the car will not change. </span>`);
    }

    if (disksSwicthCheckBox.checked === true) {
        oldDisksWidthCell.innerText = Number(leftDisksWidth * 25);
        newDisksWidthCell.innerText = Number(rightDisksWidth * 25);
        oldWheelsETCell.innerText = leftDisksET;
        newWheelsETCell.innerText = rightDisksET;

        if (leftDisksWidth > rightDisksWidth) {
            disksDifferenceCell.innerText = Number(leftDisksWidth - rightDisksWidth);
        } else if (rightDisksWidth > leftDisksWidth) {
            disksDifferenceCell.innerText = Number(rightDisksWidth - leftDisksWidth);
        } else if (rightDisksWidth === leftDisksWidth) {
            disksDifferenceCell.innerText = 'The same';
        };

        if (leftDisksET > rightDisksET) {
            etDifferenceCell.innerText = Number(leftDisksET - rightDisksET);
        } else if (rightDisksET > leftDisksET) {
            etDifferenceCell.innerText = Number(rightDisksET - leftDisksET);
        } else if (rightDisksET === leftDisksET) {
            etDifferenceCell.innerText = 'The same';
        }

        const oldWheelToBodyGap = Number((leftDisksWidth * 2.5) / 2) - (Number(leftDisksET));
        const newWheelToBodyGap = Number((rightDisksWidth * 2.5) / 2) - (Number(rightDisksET));

        if (oldWheelToBodyGap > newWheelToBodyGap) {
            const diff = Number(oldWheelToBodyGap - newWheelToBodyGap).toFixed(2);
            differenceText.insertAdjacentHTML("beforeend", `<span>The wheel is closer to the suspension and body elements by ${diff} mm. </span>`);
        } else if (oldWheelToBodyGap < newWheelToBodyGap) {
            const diff = Number(newWheelToBodyGap - oldWheelToBodyGap).toFixed(2);
            differenceText.insertAdjacentHTML("beforeend", `<span>The wheel is further from the suspension and body elements by ${diff} mm. </span>`);
        } else {
            differenceText.insertAdjacentHTML("beforeend", `<span>The gap between wheel and the suspension and body elements is the same. </span>`);
        }

    } else {
        oldDisksWidthCell.innerText = "";
        newDisksWidthCell.innerText = "";
        oldWheelsETCell.innerText = "";
        newWheelsETCell.innerText = "";
        disksDifferenceCell.innerText = "";
        etDifferenceCell.innerText = "";
    }
};