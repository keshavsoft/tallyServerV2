const createLabel = ({ labelText }) => {
    const label = document.createElement("label");

    label.className = "w-24 text-sm font-medium";
    label.textContent = labelText;

    return label;
};

export default createLabel;
