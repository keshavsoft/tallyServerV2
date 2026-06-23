const fillInputsFromObject = ({
    container,
    sourceObject,
    skipInput
}) => {
    Object.entries(sourceObject).forEach(([key, value]) => {
        // const selector = `[name="${CSS.escape(key)}"]`;
        const selector = `[data-data-list-fill-name="${CSS.escape(key)}"]`;

        const input = container.querySelector(selector);

        if (!input || input === skipInput) return;

        input.value = value ?? "";
        // input.dispatchEvent(new Event("change", { bubbles: true }));
    });
};

const findDataListRecord = ({ inInputValue, inDataStore, inDataListSource }) => {
    const dataListSource = inDataListSource;

    if (!dataListSource || !inDataStore) return;

    const [dataListName, matchKey] = dataListSource.split(".");

    if (!dataListName || !matchKey) return;

    const dataListArray = inDataStore.getDataList(dataListName) || [];

    return dataListArray.find(element => {
        return element[matchKey] === inInputValue;
    });
};

const onChangeFunc = ({ inDataListSource, inDataStore, inInputValue,
    inCurrentInput
}) => {
    const currentInput = inCurrentInput;

    const localFind = findDataListRecord({
        inInputValue,
        inDataStore, inDataListSource
    });
    // console.log("localFind : ", localFind);

    if (!localFind) return;

    const closestVerticalForm = currentInput.closest(".verticalForm");

    if (!closestVerticalForm) return;

    fillInputsFromObject({
        container: closestVerticalForm,
        sourceObject: localFind,
        skipInput: currentInput
    });
};

export const buildDataListInput = ({
    inLabel = "",
    inName = "",
    inList = "",
    inSource = "",
    inValue = "",
    inDataListSource,
    inDataStore,
    inOnChange
} = {}) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center space-x-4";

    const label = document.createElement("label");
    label.className = "w-24 text-sm font-medium";
    label.textContent = inLabel;

    const input = document.createElement("input");
    input.className = "flex-1 border rounded px-3 py-2";

    input.name = inName;
    input.setAttribute("list", inList);
    input.dataset.dataListFillName = inName;
    input.dataset.dataListSource = inSource;
    input.value = inValue;

    input.dataset.dataListSource = inDataListSource;

    // console.log("inDataStore : ", inDataStore);

    input.addEventListener("change", event => {
        const value = event.target.value;

        inOnChange?.(value);

        onChangeFunc({
            inDataListSource, inDataStore,
            inInputValue: value,
            inCurrentInput: input
        });
    });

    wrapper.append(label, input);

    return {
        wrapper,
        input
    };
};
