const disksSwicthCheckBox = document.getElementById("disksswitch");

disksSwicthCheckBox.addEventListener("input", switchDisksSelect)

function switchDisksSelect(event) {
    // console.log(event);

    const leftDisksDiameterSelect = document.getElementById("leftdisksdiameter");
    const rightDisksDiameterSelect = document.getElementById("rightdisksdiameter");
    const leftDisksWidthSelect = document.getElementById("leftdiskswidth");
    const rightDisksWidthSelect = document.getElementById("rightdiskswidth");
    const leftDisksETSelect = document.getElementById("leftdiskset");
    const rightDisksETSelect = document.getElementById("rightdiskset");
    const form = document.getElementById("tyresform");

    if (
        leftDisksDiameterSelect.disabled === true &&
        rightDisksDiameterSelect.disabled === true &&
        leftDisksWidthSelect.disabled === true &&
        rightDisksWidthSelect.disabled === true &&
        leftDisksETSelect.disabled === true &&
        rightDisksETSelect.disabled === true
    ) {
        leftDisksDiameterSelect.disabled = false;
        rightDisksDiameterSelect.disabled = false;
        leftDisksWidthSelect.disabled = false;
        rightDisksWidthSelect.disabled = false;
        leftDisksETSelect.disabled = false;
        rightDisksETSelect.disabled = false;
        form.classList.remove("without__disks");
        form.classList.add("with__disks");
        
    } else {
        leftDisksDiameterSelect.disabled = true;
        rightDisksDiameterSelect.disabled = true;
        leftDisksWidthSelect.disabled = true;
        rightDisksWidthSelect.disabled = true;
        leftDisksETSelect.disabled = true;
        rightDisksETSelect.disabled = true;  
        form.classList.remove("with__disks");
        form.classList.add("without__disks");
    }


}

export default switchDisksSelect;