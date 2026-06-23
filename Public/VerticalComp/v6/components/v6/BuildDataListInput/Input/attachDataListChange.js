import applyDataListSelection from "./DataList/applyDataListSelection.js";

const attachDataListChange = ({
    input,
    dataListSource,
    dataStore,
    onChange
}) => {
    input.addEventListener("change", event => {
        const value = event.target.value;

        onChange?.(value);

        applyDataListSelection({
            dataListSource,
            dataStore,
            inputValue: value,
            currentInput: input
        });
    });
};

export default attachDataListChange;
