const createInput = ({
    name,
    list,
    source,
    value,
    dataListSource
}) => {
    const input = document.createElement("input");

    input.className = "flex-1 border rounded px-3 py-2";
    input.name = name;
    input.setAttribute("list", list);
    input.value = value;
    input.dataset.dataListFillName = name;
    input.dataset.source = source;
    input.dataset.dataListSource = dataListSource;

    return input;
};

export default createInput;
