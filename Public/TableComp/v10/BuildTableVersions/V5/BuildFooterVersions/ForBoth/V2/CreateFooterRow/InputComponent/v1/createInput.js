const createInput = ({
    inType = "text",
    key, inDataStore,
    className, inputClassName,
    inOnKeyDown, inColumnsConfig, inOnChangeType,
    inOnKeyDownType, showDataList, onChangeFunc, inRightAlign,
    inWidth, inDataListSource, inDataListFillName
} = {}) => {

    let input;

    if (inType === "number") {
        console.log("inType------- : ", inType);

        input = document.createElement("ks-table-footer-input");

    } else {

        input = document.createElement("ks-table-footer-input-dl");

    };
    // console.log("inType------- : ", inType);


    input.ksType = inType;
    input.ksPlaceholder = key;
    input.ksName = key;
    input.ksClassName = className;

    input.ksInputClassName = inputClassName;

    input.ksOnKeyDown = inOnKeyDown;
    input.ksOnKeyDownType = inOnKeyDownType;
    input.ksShowDataList = showDataList;
    input.ksInColumnsConfig = inColumnsConfig;

    // input.ksOnChangeFunc = onChangeFunc;
    input.ksOnChangeType = inOnChangeType;

    input.ksRightAlign = inRightAlign;
    input.ksWidth = inWidth;
    input.dataStore = inDataStore;

    input.setAttribute("ksDataListSource", inDataListSource);
    input.setAttribute("ksDataListFillName", inDataListFillName);

    // inDataListSource: inElement.getAttribute("ksDataListSource") || "",
    //         inDataStore: inElement.dataStore,

    return input;
};

export default createInput;
