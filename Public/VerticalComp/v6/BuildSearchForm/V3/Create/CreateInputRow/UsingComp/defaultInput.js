const startFunc = ({
    inCol,
    inDefaultRow,
    inDataStore, inDataListFillName
}) => {
    const col = inCol.columnName;
    let row = document.createElement("ks-input");

    const defaultValue = col in inDefaultRow ? inDefaultRow[col] : "";

    // console.log("caught----------", inDataListFillName);

    row.setAttribute("label", inCol.title);
    row.setAttribute("ksName", col);
    row.setAttribute("source", col);

    if (defaultValue) row.setAttribute("ksInValue", defaultValue);

    if ("allowOnChange" in inCol?.verticalConfig) row.setAttribute("ksAllowOnChange", inCol?.verticalConfig?.allowOnChange);

    if (inDataListFillName) row.setAttribute("ksDataListFillName", inDataListFillName);

    // console.log("inCol : ", inCol);

    // allowOnChange

    row.dataStore = inDataStore;

    return row;
};

export default startFunc;