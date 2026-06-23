const createInput = ({
    name,
    value,
    inDataListFillName
}) => {
    const input = document.createElement("input");

    input.className = "flex-1 border rounded px-3 py-2";
    input.name = name;
    input.value = value;
    // console.log("inDataListFillName : ", inDataListFillName);
    if (inDataListFillName) input.dataset.dataListFillName = inDataListFillName;

    return input;
};

export default createInput;